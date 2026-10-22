import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { seedData } from "../lib/school-data";

const STORAGE_KEY = "grid-logic-school-data-v1";
const SchoolDataContext = createContext(null);

function cloneSeeds() {
  return JSON.parse(JSON.stringify(seedData));
}

export function SchoolDataProvider({ children }) {
  const [data, setData] = useState(cloneSeeds);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setData((current) => ({ ...current, ...parsed }));
      }
    } catch (error) {
      console.warn("Could not load saved school records.", error);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.warn("Could not save school records in this browser.", error);
    }
  }, [data, ready]);

  const addRecord = useCallback((key, record) => {
    const id = record.id || `${key.slice(0, 2).toUpperCase()}-${Date.now().toString().slice(-6)}`;
    setData((current) => ({ ...current, [key]: [{ ...record, id }, ...(current[key] || [])] }));
    return id;
  }, []);

  const updateRecord = useCallback((key, recordId, updates) => {
    setData((current) => ({
      ...current,
      [key]: (current[key] || []).map((record) => String(record.id) === String(recordId) ? { ...record, ...updates } : record),
    }));
  }, []);

  const deleteRecord = useCallback((key, recordId) => {
    setData((current) => ({
      ...current,
      [key]: (current[key] || []).filter((record) => String(record.id) !== String(recordId)),
    }));
  }, []);

  const resetData = useCallback(() => setData(cloneSeeds()), []);
  const value = useMemo(() => ({ data, ready, addRecord, updateRecord, deleteRecord, resetData }), [data, ready, addRecord, updateRecord, deleteRecord, resetData]);

  return <SchoolDataContext.Provider value={value}>{children}</SchoolDataContext.Provider>;
}

export function useSchoolData() {
  const value = useContext(SchoolDataContext);
  if (!value) throw new Error("useSchoolData must be used inside SchoolDataProvider");
  return value;
}
