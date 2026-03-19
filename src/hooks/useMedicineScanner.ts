import { useState, useCallback } from "react";
import { MedicineInfo } from "@/components/MedicineResult";
import { MEDICINE_DATABASE } from "@/data/medicines";

const cloneMedicine = (medicine: MedicineInfo): MedicineInfo => ({
  ...medicine,
  uses: [...medicine.uses],
  precautions: [...medicine.precautions],
  warnings: [...medicine.warnings],
  sideEffects: medicine.sideEffects ? [...medicine.sideEffects] : undefined,
  interactions: medicine.interactions ? [...medicine.interactions] : undefined,
});

const hashString = (input: string) => {
  let hash = 0;
  for (let i = 0; i < input.length; i += 97) {
    hash = (hash * 31 + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
};

export const useMedicineScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [result, setResult] = useState<MedicineInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  const analyzeMedicine = useCallback(async (imageData: string): Promise<MedicineInfo> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const medicines = Object.values(MEDICINE_DATABASE);
    const index = hashString(imageData) % medicines.length;
    return cloneMedicine(medicines[index]);
  }, []);

  const scanMedicine = useCallback(async (imageData: string) => {
    try {
      setIsScanning(true);
      setError(null);
      setResult(null);
      const medicineInfo = await analyzeMedicine(imageData);
      setResult(medicineInfo);
    } catch (err) {
      console.error("Scan error:", err);
      setError("Unable to identify medicine. Please try again with a clearer image.");
    } finally {
      setIsScanning(false);
    }
  }, [analyzeMedicine]);

  const clearResult = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return { isScanning, result, error, scanMedicine, clearResult };
};
