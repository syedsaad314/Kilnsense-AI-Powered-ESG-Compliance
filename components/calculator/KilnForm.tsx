"use client";
import { useState } from "react";
import { ResultsPanel } from "./ResultsPanel";
import { Loader2, Sparkles } from "lucide-react";

export function KilnForm() {
  const [kilnType, setKilnType] = useState("FCBTK");
  const [fuelType, setFuelType] = useState("Coal");
  const [dailyUsage, setDailyUsage] = useState<number | "">("");
  const [district, setDistrict] = useState("Lahore");
  const [operatingDays, setOperatingDays] = useState<number | "">(200);
  
  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dailyUsage || !operatingDays || !district) return;
    
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/evaluate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kiln_type: kilnType,
          fuel_type: fuelType,
          daily_tonnes: dailyUsage,
          district,
          operating_days: operatingDays
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to evaluate via Groq Engine");
      
      setResults(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="glass p-8 rounded-2xl border border-white/60">
        <h2 className="text-2xl font-bold text-forest mb-6">Evaluation Parameters</h2>
        <form onSubmit={handleCalculate} className="space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Kiln Technology</label>
              <select value={kilnType} onChange={(e) => setKilnType(e.target.value)} className="w-full bg-white/80 border border-slate-200 rounded-xl p-3 outline-none focus:border-lime transition-all">
                <option value="FCBTK">FCBTK (Traditional)</option>
                <option value="BullsTrench">Bull's Trench</option>
                <option value="Zigzag">Induced Draft Zigzag</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Primary Fuel</label>
              <select value={fuelType} onChange={(e) => setFuelType(e.target.value)} className="w-full bg-white/80 border border-slate-200 rounded-xl p-3 outline-none focus:border-lime transition-all">
                <option value="Coal">Bituminous Coal</option>
                <option value="Biomass">Biomass (Agri-waste)</option>
                <option value="Mixed">Mixed</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Daily Fuel (Tonnes)</label>
              <input type="number" value={dailyUsage} onChange={(e) => setDailyUsage(Number(e.target.value))} placeholder="e.g. 10" className="w-full bg-white/80 border border-slate-200 rounded-xl p-3 outline-none focus:border-lime transition-all" required />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700">Operating Days/Year</label>
              <input type="number" value={operatingDays} onChange={(e) => setOperatingDays(Number(e.target.value))} placeholder="e.g. 200" className="w-full bg-white/80 border border-slate-200 rounded-xl p-3 outline-none focus:border-lime transition-all" required />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2 text-slate-700">District / Location</label>
            <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} placeholder="e.g. Lahore, Punjab" className="w-full bg-white/80 border border-slate-200 rounded-xl p-3 outline-none focus:border-lime transition-all" required />
          </div>

          {error && <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">{error}</div>}

          <button type="submit" disabled={isLoading} className="w-full bg-lime hover:bg-forest disabled:opacity-50 transition-colors text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2 shadow-lg shadow-lime/20 mt-4">
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Sparkles className="w-5 h-5" /> Run AI Evaluation</>}
          </button>
        </form>
      </div>

      <div className="h-[750px]">
        {results ? (
          <ResultsPanel results={results} />
        ) : (
          <div className="glass p-8 rounded-2xl border border-white/60 h-full flex items-center justify-center text-slate-400 text-center flex-col gap-4 shadow-sm">
            <div className="w-20 h-20 rounded-full bg-slate-100/50 border border-slate-200 flex items-center justify-center mb-2">
              <Sparkles className="w-8 h-8 text-slate-300" />
            </div>
            <h3 className="font-bold text-slate-600">Awaiting Data</h3>
            <p className="max-w-[250px] text-sm">Enter your kiln parameters and run the AI Evaluation to generate a compliance report.</p>
          </div>
        )}
      </div>
    </div>
  );
}
