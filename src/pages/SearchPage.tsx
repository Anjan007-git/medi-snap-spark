import { useState } from "react";
import { Search, Pill } from "lucide-react";
import { MediCard } from "@/components/ui/MediCard";
import MedicineResult from "@/components/MedicineResult";
import { useMedicineSearch } from "@/hooks/useMedicineSearch";
import { MedicineInfo } from "@/components/MedicineResult";

const SearchPage = () => {
  const { query, setQuery, suggestions, allMedicines } = useMedicineSearch();
  const [selected, setSelected] = useState<MedicineInfo | null>(null);

  if (selected) {
    return (
      <div className="min-h-screen">
        <MedicineResult medicine={selected} onBack={() => setSelected(null)} />
      </div>
    );
  }

  const displayList = query.length >= 2 ? suggestions : allMedicines;

  return (
    <div className="min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-2">
          Search Medicines
        </h1>
        <p className="text-muted-foreground text-center text-sm mb-8">
          Type a medicine name to find information
        </p>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search medicine name..."
            className="w-full h-12 pl-12 pr-4 rounded-xl border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
          />
        </div>

        {/* Results */}
        <div className="space-y-3">
          {displayList.length === 0 && query.length >= 2 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No medicines found for "{query}"</p>
            </div>
          ) : (
            displayList.map((medicine) => (
              <MediCard
                key={medicine.name}
                className="cursor-pointer hover:shadow-card-hover transition-all active:scale-[0.99]"
                onClick={() => setSelected(medicine)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Pill className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-sm truncate">{medicine.name}</h3>
                    <p className="text-muted-foreground text-xs truncate">{medicine.generic}</p>
                  </div>
                </div>
              </MediCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
