"use client";
import { KilnForm } from "@/components/calculator/KilnForm";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Wind, AlertTriangle, ShieldCheck } from "lucide-react";

export default function DashboardPage() {
  const aqData = [
    { name: "Current PM2.5", value: 165 },
    { name: "Safe Limit", value: 35 },
  ];
  
  const compData = [
    { name: "PM", current: 450, limit: 500 },
    { name: "SOx", current: 300, limit: 400 },
    { name: "NOx", current: 150, limit: 600 },
  ];

  return (
    <div className="container-cc section-pad space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-forest">Kiln Dashboard</h1>
          <p className="text-slate-500 mt-1">Real-time overview of your emissions and compliance status.</p>
        </div>
        <div className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-lime/30 text-sm font-semibold text-forest">
          <ShieldCheck className="w-4 h-4 text-lime" />
          NEQS 2010 Monitor Active
        </div>
      </div>

      {/* WIDGETS ROW */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* AQI Widget */}
        <div className="glass p-6 rounded-2xl flex flex-col border border-white/60 shadow-sm relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-32 h-32 bg-lime/10 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><Wind className="w-5 h-5" /></div>
            <h3 className="font-semibold text-slate-700">City AQI (OpenAQ Mock)</h3>
          </div>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-bold text-red-500">165</span>
            <span className="text-sm font-medium text-slate-500 mb-1">Unhealthy</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Regional background pollution is high. Optimizing your kiln is critical today.</p>
        </div>

        {/* Gauge Widget */}
        <div className="glass p-6 rounded-2xl flex flex-col border border-white/60 shadow-sm relative">
          <h3 className="font-semibold text-slate-700 mb-4">Emissions Breakdown</h3>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={[{name: 'CO2', value: 80}, {name: 'PM', value: 15}, {name: 'SOx', value: 5}]} innerRadius={30} outerRadius={50} dataKey="value" stroke="none">
                  <Cell fill="#0D5C37" />
                  <Cell fill="#22C55E" />
                  <Cell fill="#cbd5e1" />
                </Pie>
                <Tooltip cursor={{fill: 'transparent'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bar Chart Widget */}
        <div className="glass p-6 rounded-2xl flex flex-col border border-white/60 shadow-sm relative">
          <h3 className="font-semibold text-slate-700 mb-4">NEQS Thresholds</h3>
          <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={compData}>
                <XAxis dataKey="name" fontSize={10} axisLine={false} tickLine={false} />
                <Tooltip cursor={{fill: '#f1f5f9'}} />
                <Bar dataKey="current" fill="#0D5C37" radius={[4,4,0,0]} barSize={20} />
                <Bar dataKey="limit" fill="#cbd5e1" radius={[4,4,0,0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex gap-4 mt-2 justify-center text-[10px] font-medium text-slate-500">
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-forest"></div> Current</div>
            <div className="flex items-center gap-1"><div className="w-2 h-2 rounded bg-slate-300"></div> Limit</div>
          </div>
        </div>
      </div>

      <div className="h-px bg-slate-200/50" />

      {/* CALCULATOR INTEGRATION */}
      <div>
        <h2 className="text-2xl font-bold text-forest mb-6">Emissions Calculator Engine</h2>
        <KilnForm />
      </div>

    </div>
  );
}
