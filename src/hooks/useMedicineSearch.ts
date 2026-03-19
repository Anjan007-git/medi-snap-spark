import { useState, useCallback, useMemo } from "react";
import { MedicineInfo } from "@/components/MedicineResult";
import { MEDICINE_DATABASE } from "@/data/medicines";

export const useMedicineSearch = () => {
  const [query, setQuery] = useState("");

  const allMedicines = useMemo(() => Object.values(MEDICINE_DATABASE), []);

  const suggestions = useMemo(() => {
    if (query.length < 2) return [];
    const q = query.toLowerCase();
    return allMedicines.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.generic.toLowerCase().includes(q)
    );
  }, [query, allMedicines]);

  const searchMedicine = useCallback(
    (name: string): MedicineInfo | undefined => {
      const q = name.toLowerCase();
      return allMedicines.find(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.generic.toLowerCase().includes(q)
      );
    },
    [allMedicines]
  );

  return { query, setQuery, suggestions, searchMedicine, allMedicines };
};
