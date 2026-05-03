# KilnSense | AI-Powered ESG Compliance

> **Engineering a Sustainable Future for Pakistan’s Industrial Landscape.**

KilnSense is an enterprise-grade web application engineered to calculate, monitor, and mitigate industrial emissions from brick kilns. By integrating real-time air quality data, IPCC Tier 1 scientific calculation models, and advanced AI-driven recommendations, KilnSense bridges the gap between industrial operations and environmental compliance (Pakistan NEQS 2010).

---

## 🚀 Core Architecture

This application is built for high performance, strict typing, and seamless user experience:
* **Framework:** Next.js 14 (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **Data Visualization:** Recharts
* **PDF Generation:** React-PDF
* **AI Engine:** Anthropic Claude API
* **Environmental APIs:** Carbon Interface, OpenAQ, Climatiq

```mermaid
graph TD
    %% Global Styles
    classDef input fill:#F8FAFC,stroke:#064E3B,stroke-width:2px,color:#064E3B
    classDef logic fill:#064E3B,stroke:#10B981,stroke-width:2px,color:#fff
    classDef ai fill:#ECFDF5,stroke:#059669,stroke-width:2px,color:#064E3B
    classDef output fill:#FFFFFF,stroke:#334155,stroke-width:2px,color:#334155

    subgraph Data_Input [Data Acquisition Layer]
        A([Industrial Sensor Inputs])
        B([Global Environmental APIs])
    end

    subgraph Core_Processing [Logic-Labs Engine]
        C{{KilnSense Core Engine}}
        D[IPCC Tier 1 Methodologies]
        E[NEQS 2010 Regulatory Logic]
    end

    subgraph Intelligence_Layer [Agentic AI Analysis]
        F{Claude 3.5 Sonnet Integration}
    end

    subgraph Output_Interfaces [Industrial Insights]
        G[/Live Analytics Dashboard/]
        H[/EPA-Ready Compliance PDF/]
        I[/Strategic Intervention Roadmap/]
    end

    %% Connections with High-Contrast Link Styling
    A & B --> C
    C --> D & E
    D & E --> F
    F --> G & H & I

    %% Apply Styles
    class A,B input
    class C,D,E logic
    class F ai
    class G,H,I output

    %% Explicit Link/Arrow Visibility Fix
    linkStyle default stroke:#334155,stroke-width:2px,transition:all 0.3s;

    %% Specific Subgraph Styling
    style Core_Processing fill:#F1F5F9,stroke:#064E3B,stroke-dasharray: 5 5
    style Intelligence_Layer fill:#F0FDF4,stroke:#10B981

```

## 📂 Project Structure & Handoff Protocols

Our development is strictly modular. Every feature is isolated in its respective file to ensure zero merge conflicts during parallel development. 

* `/app`: Next.js routing, pages, and backend API routes.
* `/components`: Isolated UI components (Layout, Dashboard, Chat, Calculator, Shared UI).
* `/lib`: Core backend logic, API wrappers, and the IPCC emission calculator engine.
* `/data`: Static JSON knowledge bases (NEQS standards, IPCC factors, Interventions).
* `/types`: TypeScript interfaces for strict data enforcement.

---

## ⚖️ Regulatory Alignment
KilnSense is built to align with the **Pakistan NEQS 2010** standards, providing kilns with:
1. Real-time compliance status (Compliant/Near-Limit/Violation).
2. ROI-based intervention roadmaps.
3. Automated EPA-Ready PDF Reporting.

---
*Developed for the 2026 Environmental Tech Hackathon by **Engr. Syed Saad Bin Irfan***
