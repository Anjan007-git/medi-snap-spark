import { MedicineInfo } from "@/components/MedicineResult";

export const MEDICINE_DATABASE: Record<string, MedicineInfo> = {
  paracip: {
    name: "PARACIP-500",
    generic: "Paracetamol (Acetaminophen)",
    uses: [
      "Used to reduce fever and relieve mild to moderate pain.",
      "Headache, toothache, body aches, backache, muscle aches",
      "Pain and fever associated with cold/flu",
    ],
    composition: "Paracetamol IP 500 mg per tablet",
    dosage:
      "Typical adult dose: 500–1000 mg every 4–6 hours as needed. Do not exceed 4000 mg/day.",
    sideEffects: [
      "Nausea or stomach discomfort (rare at recommended doses)",
      "Allergic reactions such as skin rash or itching (rare)",
      "Liver damage with overdose or prolonged high-dose use",
    ],
    precautions: [
      "Use caution if you have liver disease, drink alcohol regularly, or are malnourished.",
      "If symptoms persist (fever > 3 days or pain > 5 days), seek medical advice.",
      "Use age/weight-based dosing for children (pediatric formulation preferred).",
    ],
    warnings: [
      "Do not take with other medicines that contain paracetamol (risk of overdose).",
      "Overdose can cause serious liver damage—seek emergency help if too much is taken.",
      "Stop and seek help if rash, swelling, breathing trouble, or severe allergy occurs.",
    ],
    interactions: [
      "Warfarin – may increase bleeding risk with regular paracetamol use",
      "Alcohol – increases risk of liver damage",
      "Other paracetamol-containing products – risk of accidental overdose",
    ],
    storage: "Store below 30°C in a dry place. Keep out of reach of children.",
  },
  dolo: {
    name: "DOLO-650",
    generic: "Paracetamol (Acetaminophen)",
    uses: [
      "Used to reduce fever and relieve mild to moderate pain.",
      "Headache, toothache, body aches, post-vaccination fever",
      "Pain and fever associated with cold/flu",
    ],
    composition: "Paracetamol IP 650 mg per tablet",
    dosage:
      "Typical adult dose: 650 mg every 4–6 hours as needed. Do not exceed 4 g/day.",
    sideEffects: [
      "Nausea or vomiting (uncommon)",
      "Skin rash or allergic reaction (rare)",
      "Liver toxicity with overdose",
    ],
    precautions: [
      "Use caution with liver disease or regular alcohol use.",
      "Avoid duplicate paracetamol products (cold/flu combos often contain it).",
      "Use age/weight-based dosing for children (pediatric formulation preferred).",
    ],
    warnings: [
      "Do not exceed recommended dose (serious liver injury risk).",
      "Seek urgent help if you suspect overdose, even if you feel well.",
      "Stop and seek help if severe skin reaction or allergy occurs.",
    ],
    interactions: [
      "Warfarin – enhanced anticoagulant effect",
      "Alcohol – heightened hepatotoxicity risk",
      "Metoclopramide – may increase paracetamol absorption rate",
    ],
    storage: "Store below 25°C. Protect from moisture and light.",
  },
  crocin: {
    name: "CROCIN ADVANCE",
    generic: "Paracetamol (Acetaminophen)",
    uses: [
      "Used to reduce fever and relieve mild to moderate pain.",
      "Headache, toothache, body aches, muscle pain",
      "Pain and fever associated with cold/flu",
    ],
    composition: "Paracetamol 500 mg per tablet",
    dosage:
      "Typical adult dose: 500–1000 mg every 4–6 hours as needed. Do not exceed 4000 mg/day.",
    sideEffects: [
      "Nausea (uncommon)",
      "Allergic skin reactions (rare)",
      "Blood disorders with prolonged use (very rare)",
    ],
    precautions: [
      "Use caution if you have liver disease or consume alcohol.",
      "If symptoms persist (fever > 3 days or pain > 5 days), seek medical advice.",
      "Use age/weight-based dosing for children (pediatric formulation preferred).",
    ],
    warnings: [
      "Do not take with other paracetamol-containing products.",
      "Overdose can cause serious liver damage—seek emergency help if too much is taken.",
      "Stop and seek help if rash, swelling, breathing trouble, or severe allergy occurs.",
    ],
    interactions: [
      "Warfarin – may potentiate anticoagulant effect",
      "Cholestyramine – reduces paracetamol absorption",
      "Alcohol – increased risk of liver damage",
    ],
    storage: "Store below 30°C in a dry place. Keep away from children.",
  },
  azithromycin: {
    name: "AZITHROMYCIN-500",
    generic: "Azithromycin",
    uses: [
      "Bacterial infections of the respiratory tract (bronchitis, pneumonia)",
      "Ear, nose, and throat infections (sinusitis, pharyngitis, tonsillitis)",
      "Skin and soft tissue infections",
    ],
    composition: "Azithromycin 500 mg per tablet",
    dosage:
      "Typical adult dose: 500 mg once daily for 3 days, or 500 mg on day 1 then 250 mg on days 2–5.",
    sideEffects: [
      "Diarrhea, nausea, abdominal pain",
      "Headache, dizziness",
      "Skin rash (discontinue if severe)",
    ],
    precautions: [
      "Inform your doctor of liver or kidney disease.",
      "May prolong the QT interval – use caution with heart conditions.",
      "Complete the full course even if you feel better.",
    ],
    warnings: [
      "Serious allergic reactions (anaphylaxis) – seek immediate help.",
      "Can cause Clostridium difficile-associated diarrhea.",
      "Not effective against viral infections (cold, flu).",
    ],
    interactions: [
      "Antacids – take azithromycin 1 hour before or 2 hours after",
      "Warfarin – monitor for increased bleeding",
      "Ergot derivatives – risk of ergotism",
    ],
    storage: "Store below 30°C. Protect from light and moisture.",
  },
  amoxicillin: {
    name: "AMOXICILLIN-500",
    generic: "Amoxicillin",
    uses: [
      "Bacterial infections of ear, nose, throat, and urinary tract",
      "Respiratory tract infections (bronchitis, pneumonia)",
      "Skin infections and dental infections",
    ],
    composition: "Amoxicillin 500 mg per capsule",
    dosage:
      "Typical adult dose: 250–500 mg every 8 hours, or 500–875 mg every 12 hours depending on infection.",
    sideEffects: [
      "Diarrhea, nausea, vomiting",
      "Skin rash (may indicate allergy – stop and consult doctor)",
      "Candidiasis (yeast infection) with prolonged use",
    ],
    precautions: [
      "Inform doctor if allergic to penicillin or cephalosporins.",
      "Use with caution in kidney impairment.",
      "Complete the full prescribed course.",
    ],
    warnings: [
      "Severe allergic reactions possible – seek emergency help for breathing difficulty or swelling.",
      "May reduce effectiveness of oral contraceptives.",
      "Not effective against viral infections.",
    ],
    interactions: [
      "Methotrexate – increased toxicity risk",
      "Probenecid – increases amoxicillin levels",
      "Oral contraceptives – may reduce efficacy",
    ],
    storage: "Store below 25°C. Keep capsules in original packaging.",
  },
  cetirizine: {
    name: "CETIRIZINE-10",
    generic: "Cetirizine Hydrochloride",
    uses: [
      "Allergic rhinitis (sneezing, runny nose, itchy eyes)",
      "Chronic urticaria (hives)",
      "Seasonal and perennial allergies",
    ],
    composition: "Cetirizine Hydrochloride 10 mg per tablet",
    dosage:
      "Adults and children ≥12 years: 10 mg once daily. Children 6–11 years: 5–10 mg daily.",
    sideEffects: [
      "Drowsiness, fatigue",
      "Dry mouth, headache",
      "Gastrointestinal discomfort (uncommon)",
    ],
    precautions: [
      "May cause drowsiness – avoid driving or operating machinery until you know how it affects you.",
      "Use caution in kidney impairment (dose adjustment may be needed).",
      "Avoid alcohol as it may increase drowsiness.",
    ],
    warnings: [
      "Do not exceed recommended dose.",
      "Seek medical advice if symptoms do not improve within 3 days.",
      "Not recommended for children under 2 years without medical advice.",
    ],
    interactions: [
      "Alcohol – increased sedation",
      "CNS depressants – additive drowsiness",
      "Theophylline – may slightly decrease cetirizine clearance",
    ],
    storage: "Store below 30°C. Protect from moisture.",
  },
  omeprazole: {
    name: "OMEPRAZOLE-20",
    generic: "Omeprazole",
    uses: [
      "Gastroesophageal reflux disease (GERD) and heartburn",
      "Peptic ulcer disease (stomach and duodenal ulcers)",
      "Zollinger-Ellison syndrome",
    ],
    composition: "Omeprazole 20 mg per capsule (enteric-coated)",
    dosage:
      "Adults: 20 mg once daily before a meal, typically for 4–8 weeks. May increase to 40 mg for severe cases.",
    sideEffects: [
      "Headache, nausea, diarrhea, abdominal pain",
      "Dizziness, flatulence",
      "Vitamin B12 and magnesium deficiency with long-term use",
    ],
    precautions: [
      "Long-term use may increase risk of bone fractures.",
      "May mask symptoms of gastric cancer – rule out malignancy before starting.",
      "Inform doctor about all medications due to drug interactions.",
    ],
    warnings: [
      "Prolonged use (>1 year) may cause magnesium deficiency – monitor levels.",
      "May increase risk of Clostridium difficile infection.",
      "Do not crush or chew enteric-coated capsules.",
    ],
    interactions: [
      "Clopidogrel – may reduce antiplatelet effect (avoid combination)",
      "Methotrexate – increased toxicity with high doses",
      "Ketoconazole/Itraconazole – reduced absorption",
    ],
    storage: "Store below 25°C in a dry place. Protect from light.",
  },
  ibuprofen: {
    name: "IBUPROFEN-400",
    generic: "Ibuprofen",
    uses: [
      "Pain relief (headache, dental pain, menstrual cramps, muscle aches)",
      "Reduction of inflammation (arthritis, sprains)",
      "Fever reduction",
    ],
    composition: "Ibuprofen 400 mg per tablet",
    dosage:
      "Adults: 200–400 mg every 4–6 hours as needed. Max 1200 mg/day (OTC) or 3200 mg/day (prescription).",
    sideEffects: [
      "Stomach pain, nausea, indigestion",
      "Dizziness, headache",
      "Increased risk of GI bleeding with prolonged use",
    ],
    precautions: [
      "Take with food or milk to reduce stomach irritation.",
      "Use the lowest effective dose for the shortest duration.",
      "Avoid in late pregnancy (may harm the fetus).",
    ],
    warnings: [
      "May increase risk of heart attack or stroke with long-term use.",
      "Do not use if you have a history of GI bleeding or peptic ulcers.",
      "Avoid if allergic to aspirin or other NSAIDs.",
    ],
    interactions: [
      "Aspirin – may reduce cardioprotective effects",
      "Warfarin/anticoagulants – increased bleeding risk",
      "ACE inhibitors – reduced antihypertensive effect",
    ],
    storage: "Store below 25°C. Keep in original container.",
  },
};
