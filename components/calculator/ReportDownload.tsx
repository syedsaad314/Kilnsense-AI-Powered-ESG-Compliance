"use client";
import { Download } from "lucide-react";
import dynamic from 'next/dynamic';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDFDownloadLink = dynamic(
  () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
  { ssr: false }
);

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica' },
  header: { fontSize: 24, marginBottom: 5, color: '#0D5C37', fontWeight: 'bold' },
  subHeader: { fontSize: 12, color: '#64748b', marginBottom: 20 },
  section: { marginBottom: 15, padding: 15, border: '1pt solid #e2e8f0', borderRadius: 8, backgroundColor: '#f8fafc' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  label: { fontSize: 11, color: '#475569' },
  value: { fontSize: 12, color: '#0f172a', fontWeight: 'bold' },
  statusBox: { padding: 12, borderRadius: 6, marginBottom: 15, flexDirection: 'row', alignItems: 'center' },
  statusLabel: { fontSize: 14, color: '#334155', marginRight: 10 },
  statusText: { fontWeight: 'bold', fontSize: 16, textTransform: 'uppercase' },
  recommendationTitle: { fontSize: 14, marginTop: 5, marginBottom: 5, color: '#0D5C37', fontWeight: 'bold' },
  recommendation: { fontSize: 11, marginBottom: 6, color: '#334155', lineHeight: 1.5 },
});

const CompliancePDF = ({ results }: { results: any }) => {
  const { emission_profile, compliance_status, overall_status, interventions } = results;
  
  const getStatusColor = (status: string) => {
    if (status === 'compliant') return '#22C55E';
    if (status === 'warning' || status === 'near_limit') return '#eab308';
    return '#ef4444';
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>KilnSense Official Report</Text>
        <Text style={styles.subHeader}>Generated via AI-Powered ESG Compliance Engine</Text>
        
        <View style={{...styles.statusBox, backgroundColor: overall_status === 'compliant' ? '#f0fdf4' : '#fef2f2'}}>
          <Text style={styles.statusLabel}>Overall Status:</Text>
          <Text style={{...styles.statusText, color: getStatusColor(overall_status) }}>{overall_status.replace('_', ' ')} (NEQS 2010)</Text>
        </View>

        <View style={styles.section}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#0f172a', marginBottom: 10 }}>Emission Profile</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Estimated CO2</Text>
            <Text style={styles.value}>{emission_profile.CO2}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Particulate Matter (PM2.5)</Text>
            <Text style={styles.value}>{emission_profile.PM25} [{compliance_status.PM25.toUpperCase()}]</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Sulphur Oxides (SOx)</Text>
            <Text style={styles.value}>{emission_profile.SOx} [{compliance_status.SOx.toUpperCase()}]</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Nitrogen Oxides (NOx)</Text>
            <Text style={styles.value}>{emission_profile.NOx} [{compliance_status.NOx.toUpperCase()}]</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.recommendationTitle}>Top AI Mitigations</Text>
          {interventions?.map((inv: any, i: number) => (
            <Text key={i} style={styles.recommendation}>
              {i + 1}. {inv.name} (Est. {inv.pkr_cost}) - {inv.description}
            </Text>
          ))}
        </View>

      </Page>
    </Document>
  );
};

export function ReportDownload({ results }: { results: any }) {
  return (
    <div className="w-full">
      <PDFDownloadLink 
        document={<CompliancePDF results={results} />} 
        fileName="kilnsense-compliance-report.pdf"
        className="flex items-center justify-center gap-2 w-full bg-white hover:bg-slate-50 border border-slate-200 text-forest font-bold py-3.5 rounded-xl transition-all shadow-sm"
      >
        {/* @ts-ignore */}
        {({ loading }) => (
          <>
            <Download className="w-5 h-5" />
            {loading ? 'Generating PDF Document...' : 'Download Official PDF Report'}
          </>
        )}
      </PDFDownloadLink>
    </div>
  );
}
