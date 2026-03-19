import {
  ArrowLeft,
  Info,
  Pill,
  Shield,
  AlertTriangle,
  CheckCircle,
  FlaskConical,
  Package,
  Heart,
} from "lucide-react";
import { MediCard, MediCardTitle, MediCardContent } from "./ui/MediCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";

export interface MedicineInfo {
  name: string;
  generic: string;
  uses: string[];
  composition: string;
  dosage: string;
  sideEffects?: string[];
  precautions: string[];
  warnings: string[];
  interactions?: string[];
  storage?: string;
}

interface MedicineResultProps {
  medicine: MedicineInfo;
  onBack: () => void;
}

const MedicineResult = ({ medicine, onBack }: MedicineResultProps) => {
  return (
    <div className="pb-8 animate-fade-in-up max-w-2xl mx-auto">
      {/* Medicine Header */}
      <div className="px-4 sm:px-6 mt-4">
        <MediCard className="bg-gradient-to-br from-primary-light to-card">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="w-12 h-12 rounded-full bg-card/80 flex items-center justify-center shadow-card hover:shadow-card-hover transition-all flex-shrink-0"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold text-primary truncate">{medicine.name}</h2>
              <p className="text-muted-foreground text-sm">Generic: {medicine.generic}</p>
            </div>
          </div>
        </MediCard>
      </div>

      {/* Tabs */}
      <div className="px-4 sm:px-6 mt-4">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="w-full grid grid-cols-3 h-12 rounded-xl bg-muted">
            <TabsTrigger value="overview" className="rounded-lg text-xs sm:text-sm">Overview</TabsTrigger>
            <TabsTrigger value="safety" className="rounded-lg text-xs sm:text-sm">Safety</TabsTrigger>
            <TabsTrigger value="more" className="rounded-lg text-xs sm:text-sm">More Info</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-4 mt-4">
            <MediCard variant="highlight">
              <MediCardTitle>
                <Info className="w-5 h-5 text-primary flex-shrink-0" />
                Uses
              </MediCardTitle>
              <MediCardContent>
                <ul className="space-y-2">
                  {medicine.uses.map((use, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </MediCardContent>
            </MediCard>

            <MediCard variant="highlight">
              <MediCardTitle>
                <Pill className="w-5 h-5 text-primary flex-shrink-0" />
                Composition
              </MediCardTitle>
              <MediCardContent>
                <p className="text-foreground text-sm">{medicine.composition}</p>
              </MediCardContent>
            </MediCard>

            <MediCard variant="highlight">
              <MediCardTitle>
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                Dosage
              </MediCardTitle>
              <MediCardContent>
                <p className="text-foreground text-sm">{medicine.dosage}</p>
              </MediCardContent>
            </MediCard>
          </TabsContent>

          {/* Safety Tab */}
          <TabsContent value="safety" className="space-y-4 mt-4">
            {medicine.sideEffects && medicine.sideEffects.length > 0 && (
              <MediCard variant="warning">
                <MediCardTitle className="text-warning-foreground">
                  <Heart className="w-5 h-5 text-warning flex-shrink-0" />
                  Side Effects
                </MediCardTitle>
                <MediCardContent>
                  <ul className="space-y-2">
                    {medicine.sideEffects.map((effect, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                        <span className="w-2 h-2 rounded-full bg-warning mt-1.5 flex-shrink-0" />
                        {effect}
                      </li>
                    ))}
                  </ul>
                </MediCardContent>
              </MediCard>
            )}

            <MediCard variant="warning">
              <MediCardTitle className="text-warning-foreground">
                <AlertTriangle className="w-5 h-5 text-warning flex-shrink-0" />
                Precautions
              </MediCardTitle>
              <MediCardContent>
                <ul className="space-y-3">
                  {medicine.precautions.map((precaution, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                      <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                      {precaution}
                    </li>
                  ))}
                </ul>
              </MediCardContent>
            </MediCard>

            <MediCard variant="danger">
              <MediCardTitle className="text-danger">
                <AlertTriangle className="w-5 h-5 text-danger flex-shrink-0" />
                Important Warnings
              </MediCardTitle>
              <MediCardContent>
                <ul className="space-y-3">
                  {medicine.warnings.map((warning, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                      <CheckCircle className="w-4 h-4 text-danger mt-0.5 flex-shrink-0" />
                      {warning}
                    </li>
                  ))}
                </ul>
              </MediCardContent>
            </MediCard>
          </TabsContent>

          {/* More Info Tab */}
          <TabsContent value="more" className="space-y-4 mt-4">
            {medicine.interactions && medicine.interactions.length > 0 && (
              <MediCard variant="highlight">
                <MediCardTitle>
                  <FlaskConical className="w-5 h-5 text-primary flex-shrink-0" />
                  Drug Interactions
                </MediCardTitle>
                <MediCardContent>
                  <ul className="space-y-2">
                    {medicine.interactions.map((interaction, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground text-sm">
                        <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {interaction}
                      </li>
                    ))}
                  </ul>
                </MediCardContent>
              </MediCard>
            )}

            {medicine.storage && (
              <MediCard variant="highlight">
                <MediCardTitle>
                  <Package className="w-5 h-5 text-primary flex-shrink-0" />
                  Storage
                </MediCardTitle>
                <MediCardContent>
                  <p className="text-foreground text-sm">{medicine.storage}</p>
                </MediCardContent>
              </MediCard>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Disclaimer */}
      <div className="px-4 sm:px-6 mt-6">
        <div className="bg-muted rounded-xl p-4">
          <p className="text-center text-xs text-muted-foreground leading-relaxed">
            ⚕️ This information is for educational purposes only. Always consult a doctor or pharmacist before taking any medication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicineResult;
