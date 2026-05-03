import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="hero rv">
        <div className="badge"><div className="bdot"></div>Pakistan NEQS 2010 Compliant</div>
        <h1>Engineering a Sustainable Future for Pakistan’s Industrial Landscape.</h1>
        <p className="hero-sub">KilnSense is an enterprise-grade AI web application engineered to calculate, monitor, and mitigate industrial emissions from brick kilns.</p>
        <div className="btns">
          <Link href="/dashboard" className="btn-p">Start Evaluation</Link>
          <Link href="/awareness" className="btn-g">View Guidelines</Link>
        </div>
      </div>

      <div className="dbw rv" id="dashboard">
        <div className="dbg"></div>
        <div className="dbf">
          <div className="dbt">
            <div className="dd" style={{ background: '#ef4444' }}></div>
            <div className="dd" style={{ background: '#f59e0b' }}></div>
            <div className="dd" style={{ background: '#22c55e' }}></div>
            <span style={{ fontSize: '10px', color: 'var(--t3)', fontFamily: 'var(--mono)', marginLeft: '8px' }}>kilnsense.ai/dashboard</span>
          </div>
          <div className="dbi">
            <div className="dbs">
             <div style={{ fontSize: '9px', color: 'var(--t3)', fontFamily: 'var(--mono)', padding: '3px 8px', marginBottom: '6px' }}>OVERVIEW</div>
              <div className="dbn act">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                Dashboard
              </div>
              <div className="dbn"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Emissions</div>
              <div className="dbn"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>EPA Reports</div>
              <div style={{ fontSize: '9px', color: 'var(--t3)', fontFamily: 'var(--mono)', padding: '3px 8px', margin: '10px 0 6px' }}>COMPLIANCE</div>
              <div className="dbn"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>Interventions</div>
              <div className="dbn"><svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>Chatbot</div>
            </div>
            <div className="dbc">
              <div className="kpis">
                <div className="kpi"><div className="kpi-l">TOTAL CO₂</div><div className="kpi-v">1,245<span style={{ fontSize: '11px', color: 'var(--t3)' }}>t</span></div><div className="kpi-t kt-d">↓ 12.4%</div></div>
                <div className="kpi"><div className="kpi-l">COMPLIANCE</div><div className="kpi-v">88.5<span style={{ fontSize: '11px', color: 'var(--t3)' }}>%</span></div><div className="kpi-t kt-d">Near-Limit</div></div>
                <div className="kpi"><div className="kpi-l">PARTICULATES</div><div className="kpi-v">450<span style={{ fontSize: '11px', color: 'var(--t3)' }}>mg/Nm³</span></div><div className="kpi-t kt-u">Violation</div></div>
                <div className="kpi"><div className="kpi-l">EPA REPORTS</div><div className="kpi-v">4</div><div className="kpi-t kt-u">1 pending</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="trust">
        <div className="trust-i">
          <div className="trust-l">ALIGNED WITH</div>
          <div className="trust-logos">
            <div className="tlogo">PAKISTAN NEQS 2010</div><div className="tlogo">EPA PUNJAB</div><div className="tlogo">IPCC TIER 1</div><div className="tlogo">ZIGZAG TECHNOLOGY</div>
          </div>
        </div>
      </div>

      <section className="section-pad" id="features">
        <div className="container-cc">
          <div className="center-c rv">
            <div className="sec-lbl">From pollution to compliance</div>
            <h2 className="sec-h">Bridge the gap between industrial operations<br/>and environmental compliance.</h2>
          </div>
          <div className="fg rv">
            <div className="fc"><div className="fi"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><h3>Real-time Compliance</h3><p>Monitor status instantly. Get categorized as Compliant, Near-Limit, or in Violation of NEQS standards.</p></div>
            <div className="fc"><div className="fi"><svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div><h3>Automated EPA Reports</h3><p>Generate precise, formatted PDF reports ready for submission to the Environmental Protection Agency.</p></div>
            <div className="fc"><div className="fi"><svg viewBox="0 0 24 24"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></div><h3>AI-Driven Interventions</h3><p>Receive ROI-based roadmaps generated by our Custom Llama 3 AI Agent to upgrade kilns to Zigzag technology.</p></div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ paddingTop: 0 }} id="compliance">
        <div className="container-cc">
          <div className="center-c rv" style={{ marginBottom: '64px' }}>
            <div className="sec-lbl">Architecture</div>
            <h2 className="sec-h">High performance strict typing<br/>for seamless user experience.</h2>
            <p className="sec-sub">Built with Next.js 14, Tailwind CSS, and Framer Motion for rapid hackathon delivery and enterprise-grade scale.</p>
          </div>

          <div className="bf rv">
            <div>
              <div className="bf-tag"><div className="bt-dot"></div>IPCC Tier 1</div>
              <h3 className="bf-h">Scientific Calculation Models</h3>
              <p className="bf-p">We utilize standard IPCC factors and Carbon Interface APIs to predict accurate emissions for coal and biomass fuel types.</p>
              <ul className="bf-ul"><li>Accurate CO₂ estimation algorithms</li><li>Particulate matter tracking (PM2.5, PM10)</li><li>Sulphur oxides (SOx) predictions</li><li>Aligns strictly with IPCC guidelines</li></ul>
            </div>
            <div className="mb">
              <div className="mt">Live Emissions Calculator Feed</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 9px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '6px' }}><span style={{ fontSize: '10px', color: 'var(--t2)' }}>Coal (Bituminous)</span><span style={{ fontSize: '10px', color: '#ef4444', fontFamily: 'var(--mono)' }}>2.4t CO₂/ton</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 9px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '6px' }}><span style={{ fontSize: '10px', color: 'var(--t2)' }}>Biomass (Wood)</span><span style={{ fontSize: '10px', color: 'var(--g)', fontFamily: 'var(--mono)' }}>1.1t CO₂/ton</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 9px', background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: '6px' }}><span style={{ fontSize: '10px', color: 'var(--t2)' }}>Agri-waste</span><span style={{ fontSize: '10px', color: 'var(--g)', fontFamily: 'var(--mono)' }}>0.8t CO₂/ton</span></div>
              </div>
            </div>
          </div>

          <div className="bf rev rv">
            <div>
              <div className="bf-tag"><div className="bt-dot"></div>Groq Llama 3</div>
              <h3 className="bf-h">Interactive AI Chatbot</h3>
              <p className="bf-p">Get instantaneous answers regarding environmental regulations, EPA policies, and upgrade roadmaps through our integrated AI agent.</p>
              <ul className="bf-ul"><li>Trained on Pakistan NEQS 2010 policies</li><li>Suggests Zigzag conversion steps</li><li>Explains penalties and dos/donts</li><li>Conversational interface</li></ul>
            </div>
            <div className="mb">
              <div className="mt">KilnSense AI Assistant</div>
              <div className="chat">
                <div className="cm u">What is the permissible limit for Particulate Matter for brick kilns?</div>
                <div className="cm a">According to <strong>NEQS Pakistan</strong>, the permissible limit for particulate matter (PM) emissions from industrial sources is <strong>500 mg/Nm³</strong>. Upgrading to Zigzag technology can reduce your PM by 70%.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="stats">
        <div className="container-cc">
          <div className="sg">
            <div className="sc rv"><div className="sn">70%</div><div className="sl">Reduction in particulate emissions when upgrading to induced-draft Zigzag technology.</div></div>
            <div className="sc rv"><div className="sn">30%</div><div className="sl">Less coal consumption, leading to a direct return on investment for kiln owners.</div></div>
            <div className="sc rv"><div className="sn">100%</div><div className="sl">Alignment with Environmental Protection Agency (EPA) Pakistan submission formats.</div></div>
          </div>
        </div>
      </div>

      <div className="ctas rv">
        <div className="ctas-g"></div>
        <h2>Ready to evaluate your kiln?</h2>
        <p>Join the movement towards a sustainable, compliant, and profitable industrial landscape in Pakistan.</p>
        <Link href="/dashboard" className="btn-p" style={{ fontSize: '14px', padding: '12px 32px' }}>Run Full Calculation</Link>
      </div>
    </>
  );
}