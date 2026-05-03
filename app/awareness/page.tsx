import { BookOpen, ShieldAlert, BadgeCheck, Zap, Scale, Landmark } from "lucide-react";

export default function AwarenessPage() {
  return (
    <div className="container-cc section-pad space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-12">
      <div className="text-center max-w-2xl mx-auto mt-8 mb-12">
        <h1 className="text-4xl font-bold text-forest mb-4">Regulatory Awareness & Compliance</h1>
        <p className="text-slate-600 text-lg">Understanding the Pakistan EPA Laws, NEQS Standards, and how to operate your brick kiln sustainably.</p>
      </div>

      {/* NEQS section */}
      <div className="glass p-8 rounded-3xl border border-white/60 shadow-md">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-forest/10 rounded-xl text-forest"><Scale className="w-6 h-6" /></div>
          <h2 className="text-2xl font-bold text-slate-800">What is NEQS 2010?</h2>
        </div>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Pakistan’s National Environmental Quality Standards (NEQS) 2010 set legal reference limits for pollutants in ambient air. These standards were issued by the Pakistan Environmental Protection Agency under the Pakistan Environmental Protection Act, 1997, to protect public health and control air pollution. For KilnSense, these limits are used as a compliance reference because brick kilns release pollutants that affect surrounding air quality. The values used here are ambient air standards, not separate brick-kiln stack limits.
        </p>
        
        <h3 className="font-bold text-slate-800 mb-4">Key Pollutant Limits</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <span className="block text-sm font-semibold text-slate-500 mb-1">PM2.5</span>
            <span className="text-xl font-bold text-forest">35 µg/m³ <span className="text-sm font-normal">/ 24h</span></span>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <span className="block text-sm font-semibold text-slate-500 mb-1">PM10</span>
            <span className="text-xl font-bold text-forest">150 µg/m³ <span className="text-sm font-normal">/ 24h</span></span>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <span className="block text-sm font-semibold text-slate-500 mb-1">SO₂</span>
            <span className="text-xl font-bold text-forest">120 µg/m³ <span className="text-sm font-normal">/ 24h</span></span>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <span className="block text-sm font-semibold text-slate-500 mb-1">NOx/NO</span>
            <span className="text-xl font-bold text-forest">40 µg/m³ <span className="text-sm font-normal">/ 24h</span></span>
          </div>
          <div className="bg-white/60 p-4 rounded-xl border border-slate-100 shadow-sm">
            <span className="block text-sm font-semibold text-slate-500 mb-1">CO</span>
            <span className="text-xl font-bold text-forest">5 mg/m³ <span className="text-sm font-normal">/ 8h</span></span>
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4 italic">Note: CO₂ has no direct NEQS limit, so it is shown only for carbon footprint and future carbon-credit tracking.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Fines & Violations */}
        <div className="glass p-8 rounded-3xl border border-white/60 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-100 rounded-xl text-red-600"><ShieldAlert className="w-6 h-6" /></div>
            <h2 className="text-2xl font-bold text-slate-800">What happens if a kiln exceeds the limit?</h2>
          </div>
          <p className="text-slate-600 leading-relaxed text-sm">
            If a kiln causes excessive pollution or violates environmental directions, EPA officials may inspect the site, issue warnings or notices, direct the owner to adopt cleaner technology, start legal proceedings, and seal or close the kiln if non-compliance continues. Recent enforcement actions show that non-compliant kilns using outdated technology were sealed after warnings and inspections. Exact penalties depend on the applicable federal/provincial environmental law and the case decision.
          </p>
        </div>

        {/* Dos and Don'ts */}
        <div className="glass p-8 rounded-3xl border border-white/60 shadow-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-forest/10 rounded-xl text-forest"><BadgeCheck className="w-6 h-6" /></div>
            <h2 className="text-2xl font-bold text-slate-800">Dos and Don'ts</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-forest font-bold mb-2 text-sm uppercase">What kiln owners must do</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Operate in a way that does not damage public health. Follow EPA directions, shift from outdated straight-fire technology to approved cleaner kiln operation where required, maintain proper combustion, use cleaner fuel where feasible, avoid excessive smoke, cooperate during inspections, and keep basic records of fuel use. Monitor emissions where required.
              </p>
            </div>
            <div>
              <h3 className="text-red-500 font-bold mb-2 text-sm uppercase">What kiln owners must not do</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Do not operate highly polluting traditional kilns where cleaner technology is required. Do not ignore EPA notices, burn poor-quality or prohibited fuel, release dense black smoke, operate without required environmental approval, or continue production after sealing/closure orders. Do not falsify fuel or emission information.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Incentives */}
      <div className="glass p-8 rounded-3xl border border-white/60 shadow-md bg-gradient-to-b from-white/40 to-lime/5">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-lime/20 rounded-xl text-forest"><Landmark className="w-6 h-6" /></div>
          <h2 className="text-2xl font-bold text-slate-800">Government Incentives & Support</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/60 p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-forest mb-2">Punjab EPA Zigzag Conversion Program</h3>
            <p className="text-sm text-slate-600 mb-3"><span className="font-medium text-slate-800">Eligibility:</span> Applicable to traditional Bull’s Trench kilns operating in Punjab.</p>
            <p className="text-sm text-slate-600"><span className="font-medium text-slate-800">Support Type:</span> Regulatory enforcement combined with technical assistance and monitoring support during conversion.</p>
          </div>

          <div className="bg-white/60 p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-forest mb-2">World Bank Clean Brick Kiln Initiative</h3>
            <p className="text-sm text-slate-600 mb-3"><span className="font-medium text-slate-800">Eligibility:</span> Brick kiln owners participating in cleaner production programs, especially those transitioning to zigzag.</p>
            <p className="text-sm text-slate-600"><span className="font-medium text-slate-800">Support Type:</span> Technical assistance, training, and financial facilitation through partner programs.</p>
          </div>

          <div className="bg-white/60 p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-forest mb-2">ENERCON Energy Efficiency Support</h3>
            <p className="text-sm text-slate-600 mb-3"><span className="font-medium text-slate-800">Eligibility:</span> Industrial operators seeking to improve energy efficiency and reduce fuel consumption.</p>
            <p className="text-sm text-slate-600"><span className="font-medium text-slate-800">Support Type:</span> Technical guidance, audits, and facilitation for energy-efficient technologies.</p>
          </div>

          <div className="bg-white/60 p-5 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="font-bold text-forest mb-2">Energy Efficiency Financing Schemes</h3>
            <p className="text-sm text-slate-600 mb-3"><span className="font-medium text-slate-800">Eligibility:</span> Industrial units investing in energy-saving technologies such as waste heat recovery systems.</p>
            <p className="text-sm text-slate-600"><span className="font-medium text-slate-800">Support Type:</span> Soft loans, financing assistance, and technical support through financial institutions.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
