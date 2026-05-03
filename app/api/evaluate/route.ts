import { NextResponse } from 'next/server';
import Groq from "groq-sdk";
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { kiln_type, fuel_type, daily_tonnes, district, operating_days } = body;

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return NextResponse.json({ error: "GROQ_API_KEY is missing." }, { status: 500 });
    }

    const groq = new Groq({ apiKey: groqApiKey });

    // Read local data
    const interventionsPath = path.join(process.cwd(), 'data', 'interventions.json');
    const neqsPath = path.join(process.cwd(), 'data', 'neqs.json');
    const interventionsData = fs.readFileSync(interventionsPath, 'utf8');
    const neqsData = fs.readFileSync(neqsPath, 'utf8');

    const systemPrompt = `You are an environmental compliance assistant for Pakistan’s brick kiln industry.

Your task is to analyze kiln operation data, calculate emissions using standard methods, compare them with Pakistan NEQS 2010 limits, and provide clear compliance status and recommendations.

INPUT DATA:
- kiln_type: ${kiln_type}
- fuel_type: ${fuel_type}
- daily_tonnes: ${daily_tonnes}
- district: ${district}
- operating_days: ${operating_days}

CALCULATION INSTRUCTIONS:
Use IPCC Tier 1 emission factors for the given fuel type and kiln type to calculate:
- CO2 in tonnes per day
- PM2.5 in ug/m3
- SOx in ug/m3
- NOx in ug/m3

Also calculate annual emissions using:
annual_emissions = daily_emissions * operating_days

NEQS LIMITS:
${neqsData}

INTERVENTIONS DATA:
${interventionsData}

COMPLIANCE ASSESSMENT:
Use Pakistan NEQS 2010 ambient air quality standards as reference limits.
For each pollutant (PM25, SOx, NOx):
- If value is below limit -> status = "compliant"
- If value is within 80%-100% of limit -> status = "near_limit"
- If value exceeds limit -> status = "exceeds"

OVERALL STATUS:
- If all pollutants are compliant -> overall_status = "compliant"
- If any pollutant is near_limit -> overall_status = "warning"
- If any pollutant exceeds -> overall_status = "non_compliant"

RECOMMENDATIONS:
Select exactly 3 relevant interventions from the provided INTERVENTIONS DATA for the given kiln type. Prioritize lowest cost first.
Format the pkr_cost as a range string (e.g., "1.5M - 4.0M PKR").
Also include any applicable government incentives based on district (e.g. Punjab EPA Zigzag Conversion Program if in Punjab).

OUTPUT FORMAT:
Return ONLY a valid JSON object. Do NOT include any text before or after JSON. Use this exact schema:
{
  "emission_profile": {
    "CO2": value,
    "PM25": value,
    "SOx": value,
    "NOx": value,
    "annual": { "CO2": value, "PM25": value, "SOx": value, "NOx": value }
  },
  "compliance_status": {
    "PM25": "compliant | near_limit | exceeds",
    "SOx": "compliant | near_limit | exceeds",
    "NOx": "compliant | near_limit | exceeds",
    "CO2": "informational"
  },
  "overall_status": "compliant | warning | non_compliant",
  "interventions": [
    {
      "name": "...",
      "description": "...",
      "pkr_cost": "...",
      "roi_months": 12,
      "ease_score": 5
    }
  ],
  "incentives": ["..."],
  "urdu_summary": "Provide a short, simple explanation in Urdu for kiln owners."
}`;

    const response = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: "Evaluate the data and return the JSON." }
      ],
      model: "llama-3.3-70b-versatile", // High capacity model for complex JSON routing
      temperature: 0.1,
      response_format: { type: "json_object" }
    });

    const reply = response.choices[0]?.message?.content;
    if (!reply) throw new Error("No response from Groq");
    
    const jsonResponse = JSON.parse(reply);

    return NextResponse.json(jsonResponse);
  } catch (error: any) {
    console.error("Evaluation Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
