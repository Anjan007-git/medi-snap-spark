import { useState } from "react";
import { Clock, Trash2, Pill } from "lucide-react";
import { MediCard } from "@/components/ui/MediCard";
import MedicineResult from "@/components/MedicineResult";
import { useScanHistory, ScanHistoryItem } from "@/hooks/useScanHistory";
import { MedicineInfo } from "@/components/MedicineResult";

const HistoryPage = () => {
  const { history, clearHistory, removeFromHistory } = useScanHistory();
  const [selected, setSelected] = useState<MedicineInfo | null>(null);

  if (selected) {
    return (
      <div className="min-h-screen">
        <MedicineResult medicine={selected} onBack={() => setSelected(null)} />
      </div>
    );
  }

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) +
      " at " +
      d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Scan History</h1>
            <p className="text-muted-foreground text-sm mt-1">Your previously scanned medicines</p>
          </div>
          {history.length > 0 && (
            <button
              onClick={clearHistory}
              className="text-sm text-danger hover:text-danger/80 font-medium transition-colors flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="text-center py-16">
            <Clock className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-foreground font-medium mb-1">No scan history</h3>
            <p className="text-muted-foreground text-sm">
              Scanned medicines will appear here
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((item) => (
              <MediCard
                key={item.id}
                className="cursor-pointer hover:shadow-card-hover transition-all active:scale-[0.99]"
                onClick={() => setSelected(item.medicine)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Pill className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm truncate">{item.medicine.name}</h3>
                    <p className="text-muted-foreground text-xs">{formatDate(item.scannedAt)}</p>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); removeFromHistory(item.id); }}
                    className="text-muted-foreground hover:text-danger transition-colors p-1"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </MediCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
