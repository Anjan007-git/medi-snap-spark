import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { imageData, scanId } = await req.json();

    if (!imageData || typeof imageData !== "string") {
      return new Response(
        JSON.stringify({ error: "No image data provided", scanId }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: "LOVABLE_API_KEY is not configured", scanId }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const systemPrompt = `You are a medicine identification expert. Analyze the provided image and determine if it contains a medicine (tablet strip, bottle, packaging, etc.).

CRITICAL RULES:
1. Only return results if the image CLEARLY contains a recognizable medicine product.
2. If the image does NOT contain medicine (e.g., a tree, person, food, random object), return null.
3. If the image is too blurry or unclear to identify, return null.
4. Never guess or hallucinate medicine information.
5. Provide a confidence score from 0 to 100.

Return your response as a JSON object with this EXACT structure:
{
  "isMedicine": true/false,
  "confidence": <number 0-100>,
  "medicine": {
    "name": "<brand name>",
    "generic": "<generic/chemical name>",
    "uses": ["<use 1>", "<use 2>", "<use 3>"],
    "composition": "<active ingredients with strengths>",
    "dosage": "<typical adult dosage instructions>",
    "precautions": ["<precaution 1>", "<precaution 2>", "<precaution 3>"],
    "warnings": ["<warning 1>", "<warning 2>", "<warning 3>"],
    "sideEffects": ["<side effect 1>", "<side effect 2>", "<side effect 3>"],
    "storage": "<storage instructions>"
  }
}

If isMedicine is false, set medicine to null and confidence to how sure you are it's NOT medicine.
If isMedicine is true, confidence should reflect how sure you are about the identification.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: "Analyze this image. Is it a medicine? If yes, identify it and provide detailed information. Return ONLY the JSON object, no markdown or extra text.",
              },
              {
                type: "image_url",
                image_url: { url: imageData },
              },
            ],
          },
        ],
      }),
    });

    if (!response.ok) {
      const statusCode = response.status;
      if (statusCode === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment.", scanId }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (statusCode === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add funds.", scanId }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errText = await response.text();
      console.error(`AI gateway error [${statusCode}]:`, errText);
      return new Response(
        JSON.stringify({ error: "Failed to analyze image", scanId }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const aiResponse = await response.json();
    const content = aiResponse.choices?.[0]?.message?.content;

    if (!content) {
      return new Response(
        JSON.stringify({ error: "No response from AI", scanId }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Parse the JSON from the AI response (strip markdown code fences if present)
    let parsed;
    try {
      const cleaned = content.replace(/```json\s*/g, "").replace(/```\s*/g, "").trim();
      parsed = JSON.parse(cleaned);
    } catch {
      console.error("Failed to parse AI response:", content);
      return new Response(
        JSON.stringify({ error: "Unable to process AI response", scanId }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate the response
    if (!parsed.isMedicine || !parsed.medicine || !parsed.medicine.name) {
      return new Response(
        JSON.stringify({
          isMedicine: false,
          confidence: parsed.confidence || 0,
          medicine: null,
          scanId,
        }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log(`[analyze-medicine] scanId=${scanId} | detected=${parsed.medicine.name} | confidence=${parsed.confidence}`);

    return new Response(
      JSON.stringify({
        isMedicine: true,
        confidence: parsed.confidence,
        medicine: parsed.medicine,
        scanId,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("analyze-medicine error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
