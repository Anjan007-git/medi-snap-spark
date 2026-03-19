import { useNavigate } from "react-router-dom";
import { Camera, Upload, Sparkles, Shield, Zap, Eye, Clock } from "lucide-react";
import { MediCard } from "@/components/ui/MediCard";
import HowItWorks from "@/components/HowItWorks";

const features = [
  { icon: Zap, title: "Instant Results", description: "Get medicine info in seconds with AI-powered scanning" },
  { icon: Eye, title: "Accurate Detection", description: "Advanced image recognition for reliable identification" },
  { icon: Shield, title: "Trusted Information", description: "Verified medical data with safety warnings" },
  { icon: Clock, title: "Scan History", description: "Access your previously scanned medicines anytime" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="px-4 sm:px-6 pt-12 pb-8 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          AI-Powered Medicine Scanner
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
          Identify Any Medicine{" "}
          <span className="text-gradient">Instantly</span>
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto mb-8 leading-relaxed">
          Scan or upload a photo of any medicine to get detailed information about uses, dosage, side effects, and safety warnings.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <button
            onClick={() => navigate("/scan")}
            className="w-full sm:w-auto gradient-teal text-primary-foreground rounded-xl py-4 px-8 flex items-center justify-center gap-3 font-semibold text-lg shadow-card hover:shadow-card-hover transition-all active:scale-[0.98]"
          >
            <Camera className="w-5 h-5" />
            Scan Medicine
          </button>
          <button
            onClick={() => navigate("/search")}
            className="w-full sm:w-auto bg-card text-foreground rounded-xl py-4 px-8 flex items-center justify-center gap-3 font-medium shadow-card hover:shadow-card-hover transition-all active:scale-[0.98] border border-border"
          >
            Search by Name
          </button>
        </div>
      </section>

      {/* How it Works */}
      <HowItWorks />

      {/* Features */}
      <section className="px-4 sm:px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
          Why Choose MediScan?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <MediCard
              key={f.title}
              className="flex items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            </MediCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
