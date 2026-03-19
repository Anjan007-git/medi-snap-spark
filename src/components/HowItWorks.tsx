import { Camera, Cpu, FileText } from "lucide-react";
import { MediCard } from "./ui/MediCard";

const steps = [
  {
    icon: Camera,
    title: "Scan or Upload",
    description: "Take a photo of your medicine or upload an image from your gallery.",
  },
  {
    icon: Cpu,
    title: "AI Analysis",
    description: "Our AI instantly identifies the medicine and extracts key information.",
  },
  {
    icon: FileText,
    title: "Get Details",
    description: "View uses, dosage, side effects, precautions, and more.",
  },
];

const HowItWorks = () => {
  return (
    <section className="px-4 sm:px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-2">
        How It Works
      </h2>
      <p className="text-center text-muted-foreground mb-8 text-sm">
        Three simple steps to identify any medicine
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {steps.map((step, i) => (
          <MediCard
            key={step.title}
            className="text-center py-8 animate-fade-in-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-xs font-bold text-primary mb-1">Step {i + 1}</div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </MediCard>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
