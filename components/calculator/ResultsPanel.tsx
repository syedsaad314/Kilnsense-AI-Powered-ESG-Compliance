"use client";
import { CheckCircle2, XCircle, AlertTriangle, Coins, Target } from "lucide-react";
import { ReportDownload } from "./ReportDownload";

interface ResultsPanelProps {
  results: any;
}

export function ResultsPanel({ results }: ResultsPanelProps) {
  const { emission_profile, compliance_status, overall_status, interventions, incentives, urdu_summary } = results;

  const getStatusColor = (status: string) => {
    if (status === "compliant") return "text-lime bg-green-50 border-green-100";
    if (status === "warning" || status === "near_limit") return "text-yellow-600 bg-yellow-50 border-yellow-100";
    return "text-red-600 bg-red-50 border-red-100";
  };

  const getStatusIcon = (status: string) => {
    if (status === "compliant") return <CheckCircle2 className="w-6 h-6 text-lime" />;
    if (status === "warning" || status === "near_limit") return <AlertTriangle className="w-6 h-6 text-yellow-600" />;
    return <XCircle className="w-6 h-6 text-red-500" />;
  };

  return (
    <div className="glass p-6 rounded-2xl flex flex-col h-full overflow-y-auto border border-white/60 shadow-sm relative">
      
      {/* Banner */}
      <div className={`p-4 rounded-xl border mb-6 flex items-center gap-3 shadow-sm ${getStatusColor(overall_status)}`}>
        {getStatusIcon(overall_status)}
        <div>
          <h2 className="font-bold capitalize text-lg leading-tight">{overall_status.replace('_', ' ')}</h2>
          <p className="text-xs opacity-80 mt-0.5">Based on Pakistan NEQS 2010 Limits</p>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-2">Emission Profile</h3>
        <div className="grid grid-cols-2 gap-3">
          <StatBox label="PM2.5" value={emission_profile.PM25} status={compliance_status.PM25} />
          <StatBox label="SOx" value={emission_profile.SOx} status={compliance_status.SOx} />
          <StatBox label="NOx" value={emission_profile.NOx} status={compliance_status.NOx} />
          <div className="p-3 bg-white/50 rounded-xl border border-slate-100 text-center shadow-sm flex flex-col justify-center">
            <div className="text-xs text-slate-500 font-semibold mb-1">Total CO₂</div>
            <div className="font-bold text-slate-800 text-lg">{emission_profile.CO2}</div>
          </div>
        </div>

        <h3 className="font-bold text-slate-800 border-b border-slate-200 pb-2 mt-6 pt-4">Top AI Recommendations</h3>
        <div className="space-y-3">
          {interventions?.map((inv: any, idx: number) => (
            <div key={idx} className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
              <h4 className="font-bold text-forest text-sm flex items-center gap-2"><Target className="w-4 h-4"/> {inv.name}</h4>
              <p className="text-xs text-slate-600 mt-1.5 mb-3 leading-relaxed">{inv.description}</p>
              <div className="flex gap-4 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-lg border border-slate-100">
                <span className="flex items-center gap-1"><Coins className="w-3.5 h-3.5 text-yellow-500"/> {inv.pkr_cost}</span>
                <span>ROI: {inv.roi_months} mo</span>
              </div>
            </div>
          ))}
        </div>

        {incentives && incentives.length > 0 && (
          <div className="bg-lime/5 p-5 rounded-xl border border-lime/20 mt-4">
            <h4 className="font-bold text-forest text-sm mb-3">Available Government Incentives</h4>
            <ul className="text-xs text-slate-700 space-y-2 list-disc pl-4 marker:text-lime">
              {incentives.map((inc: string, i: number) => <li key={i} className="leading-relaxed">{inc}</li>)}
            </ul>
          </div>
        )}

        {urdu_summary && (
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mt-4 text-right" dir="rtl">
            <h4 className="font-bold text-slate-800 text-sm mb-2">خلاصہ (Summary)</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{urdu_summary}</p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-200">
        <ReportDownload results={results} />
      </div>
    </div>
  );
}

function StatBox({ label, value, status }: { label: string, value: any, status: string }) {
  const isCompliant = status === "compliant";
  const isWarning = status === "near_limit";
  return (
    <div className={`p-3 rounded-xl border text-center shadow-sm ${isCompliant ? 'bg-green-50/50 border-green-100' : isWarning ? 'bg-yellow-50/50 border-yellow-100' : 'bg-red-50/50 border-red-100'}`}>
      <div className="text-xs font-semibold text-slate-600 mb-1">{label}</div>
      <div className={`font-bold text-lg ${isCompliant ? 'text-forest' : isWarning ? 'text-yellow-600' : 'text-red-600'}`}>{value}</div>
      <div className={`text-[10px] font-bold uppercase tracking-wider mt-1 ${isCompliant ? 'text-lime' : isWarning ? 'text-yellow-600' : 'text-red-500'}`}>{status.replace('_', ' ')}</div>
    </div>
  );
}
