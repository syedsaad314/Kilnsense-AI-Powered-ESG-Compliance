import type { Metadata } from "next";
import "./globals.css";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "KilnSense | AI-Powered ESG Compliance",
  description: "Enterprise-grade web application to calculate, monitor, and mitigate industrial emissions from brick kilns.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RevealOnScroll />
        <div className="nav">
          <a href="/" className="nav-logo">
            <div className="nav-logo-i">
              <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/></svg>
            </div>
            KilnSense
          </a>
          <a href="/#features">Features</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/awareness">Compliance</a>
          <a href="/chat">Chatbot</a>
          <ThemeToggle />
          <a href="/dashboard" className="nav-cta">Evaluate Kiln</a>
        </div>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="c-footer">
          <div className="fi2">
            <div className="ft">
              <div className="fb">
                <div className="nav-logo mb-2">
                  <div className="nav-logo-i">
                    <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/><path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4"/></svg>
                  </div>
                  KilnSense
                </div>
                <p>Built for the 2026 Environmental Tech Hackathon by Engr. Syed Saad Bin Irfan</p>
              </div>
              <div className="fcol">
                <h4>Product</h4>
                <a href="/dashboard">Dashboard</a>
                <a href="/dashboard">Calculator</a>
                <a href="/chat">Chatbot</a>
              </div>
              <div className="fcol">
                <h4>Resources</h4>
                <a href="/awareness">NEQS 2010 Policy</a>
                <a href="/awareness">EPA Guidelines</a>
                <a href="/awareness">Zigzag Tech Manual</a>
              </div>
              <div className="fcol">
            <h4>Developer</h4>
             <a 
              href="https://www.linkedin.com/in/syed-saad-bin-irfan/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            Engr. Syed Saad Bin Irfan
            </a>
           </div>
            </div>
            <div className="fb2">
              <p>© 2026 KilnSense Hackathon Project.</p>
              <p>Engineering a sustainable future.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}