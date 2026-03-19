import { useState, useCallback, useEffect } from "react";
import { MedicineInfo } from "@/components/MedicineResult";

export interface ScanHistoryItem {
  id: string;
  medicine: MedicineInfo;
  scannedAt: string;
}

const STORAGE_KEY = "mediscan_history";

const loadHistory = (): ScanHistoryItem[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const useScanHistory = () => {
  const [history, setHistory] = useState<ScanHistoryItem[]>(loadHistory);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  }, [history]);

  const addToHistory = useCallback((medicine: MedicineInfo) => {
    const item: ScanHistoryItem = {
      id: crypto.randomUUID(),
      medicine,
      scannedAt: new Date().toISOString(),
    };
    setHistory((prev) => [item, ...prev].slice(0, 50));
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const removeFromHistory = useCallback((id: string) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return { history, addToHistory, clearHistory, removeFromHistory };
};
