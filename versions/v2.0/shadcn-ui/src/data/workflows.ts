export interface Workflow {
  id: string;
  name: string;
  description: string;
  category: string;
  triggers: string[];
  inputs: string[];
  outputs: string[];
  tools: string[];
  autonomousSteps: string[];
  humanApprovalPoints: string[];
  kpis: string[];
  slo: string;
  status: 'active' | 'pending' | 'error';
  automationRate: number;
}

export const workflowCategories = [
  'Intake & Deal Desk',
  'Onboarding & Orchestration',
  'Data & Integration Fabric',
  'AI Agent Lifecycle',
  'Automation & Workflow Mesh',
  'Diagnostics & Delivery',
  'Finance Stack',
  'Productization',
  'Reporting & EOS',
  'Governance & Risk',
  'Reliability & SRE',
  'Knowledge Management',
  'Talent & Access',
  'Marketing Operations'
];

export const workflows: Workflow[] = [
  {
    id: 'intake-001',
    name: 'Lead Capture & Enrichment',
    description: 'Automated lead capture from multiple channels with Clearbit-style enrichment',
    category: 'Intake & Deal Desk',
    triggers: ['Form submission', 'Email inquiry', 'WhatsApp message', 'LinkedIn connection'],
    inputs: ['Contact info', 'Company data', 'Initial inquiry'],
    outputs: ['Enriched lead profile', 'ICP fit score', 'Next action recommendation'],
    tools: ['Clearbit API', 'HubSpot', 'n8n', 'Supabase'],
    autonomousSteps: [
      'Capture lead data',
      'Enrich with firmographics',
      'Score ICP fit',
      'Route to appropriate queue'
    ],
    humanApprovalPoints: ['High-value prospect review'],
    kpis: ['Lead response time <5min', 'Enrichment accuracy >95%'],
    slo: '99% uptime, <30s processing',
    status: 'active',
    automationRate: 95
  },
  {
    id: 'intake-002',
    name: 'Discovery Q&A Bot',
    description: 'Automated discovery process with intelligent questioning and transcript logging',
    category: 'Intake & Deal Desk',
    triggers: ['Qualified lead', 'Discovery meeting scheduled'],
    inputs: ['Lead profile', 'Initial requirements'],
    outputs: ['Discovery transcript', 'Gap analysis', 'Solution mapping'],
    tools: ['OpenAI API', 'Calendly', 'Notion', 'Zoom API'],
    autonomousSteps: [
      'Generate contextual questions',
      'Conduct discovery interview',
      'Analyze responses for gaps',
      'Map to solution framework'
    ],
    humanApprovalPoints: ['Complex requirement validation'],
    kpis: ['Discovery completion rate >90%', 'Accuracy score >85%'],
    slo: '24/7 availability, <2s response',
    status: 'active',
    automationRate: 85
  },
  {
    id: 'deal-001',
    name: 'Proposal Assembly',
    description: 'Automated SOW builder with pricing guardrails and e-signature routing',
    category: 'Intake & Deal Desk',
    triggers: ['Discovery completed', 'Solution mapped'],
    inputs: ['Discovery data', 'Solution requirements', 'Pricing parameters'],
    outputs: ['Complete proposal', 'SOW document', 'E-signature request'],
    tools: ['DocuSign', 'Zoho Books', 'Notion', 'Pricing engine'],
    autonomousSteps: [
      'Generate SOW from template',
      'Apply pricing guardrails',
      'Create timeline and milestones',
      'Route for e-signature'
    ],
    humanApprovalPoints: ['Margin exceptions', 'Custom terms', 'High-value deals >$50K'],
    kpis: ['Proposal turnaround <24h', 'Margin compliance >95%'],
    slo: '4h max generation time',
    status: 'active',
    automationRate: 80
  },
  {
    id: 'data-001',
    name: 'ETL/ELT Pipelines',
    description: 'Automated data integration with quality monitoring and change detection',
    category: 'Data & Integration Fabric',
    triggers: ['Scheduled intervals', 'Data source changes', 'Quality alerts'],
    inputs: ['Source systems', 'Schema definitions', 'Quality rules'],
    outputs: ['Clean datasets', 'Quality reports', 'Change notifications'],
    tools: ['Supabase', 'n8n', 'Airbyte', 'dbt'],
    autonomousSteps: [
      'Extract from sources',
      'Transform per schema',
      'Validate data quality',
      'Load to warehouse'
    ],
    humanApprovalPoints: ['Schema changes', 'Quality threshold breaches'],
    kpis: ['Pipeline uptime >99%', 'Data freshness <1h'],
    slo: 'RTO 15min, RPO 5min',
    status: 'active',
    automationRate: 98
  },
  {
    id: 'agent-001',
    name: 'AI Agent Deployment',
    description: 'Automated deployment of AI agents with evaluation and monitoring',
    category: 'AI Agent Lifecycle',
    triggers: ['Agent approval', 'Configuration update', 'Deployment request'],
    inputs: ['Agent config', 'Prompt templates', 'Tool definitions'],
    outputs: ['Deployed agent', 'Monitoring setup', 'Performance baseline'],
    tools: ['OpenAI API', 'Anthropic Claude', 'Docker', 'Kubernetes'],
    autonomousSteps: [
      'Package agent configuration',
      'Deploy to environment',
      'Initialize monitoring',
      'Run initial evaluation'
    ],
    humanApprovalPoints: ['New agent types', 'Production deployment', 'Policy changes'],
    kpis: ['Deployment success >95%', 'Agent uptime >99%'],
    slo: 'Deploy <30min, rollback <5min',
    status: 'active',
    automationRate: 90
  },
  {
    id: 'finance-001',
    name: 'Invoice & Collections',
    description: 'Automated invoicing with AR dunning and payment tracking',
    category: 'Finance Stack',
    triggers: ['Project milestone', 'Payment due', 'Overdue account'],
    inputs: ['Project data', 'Billing terms', 'Payment history'],
    outputs: ['Invoice generated', 'Payment reminder', 'Collection action'],
    tools: ['Zoho Books', 'Zoho Invoice', 'Mailchimp', 'n8n'],
    autonomousSteps: [
      'Generate invoice from milestones',
      'Send payment reminders',
      'Escalate overdue accounts',
      'Update AR aging'
    ],
    humanApprovalPoints: ['Write-offs', 'Payment plans', 'Legal action'],
    kpis: ['AR days <35', 'Collection rate >95%'],
    slo: 'Invoice generation <4h',
    status: 'active',
    automationRate: 92
  },
  {
    id: 'report-001',
    name: 'EOS Scorecard Generation',
    description: 'Automated weekly scorecard with KPI tracking and variance analysis',
    category: 'Reporting & EOS',
    triggers: ['Weekly schedule', 'KPI threshold breach', 'Executive request'],
    inputs: ['System metrics', 'Financial data', 'Project status'],
    outputs: ['EOS scorecard', 'Variance report', 'Action items'],
    tools: ['Supabase', 'Google Data Studio', 'Slack', 'Email'],
    autonomousSteps: [
      'Collect KPI data',
      'Calculate variances',
      'Generate scorecard',
      'Distribute to stakeholders'
    ],
    humanApprovalPoints: ['Significant variance explanations'],
    kpis: ['Report accuracy >99%', 'Delivery <24h lag'],
    slo: 'Weekly delivery by Monday 9AM',
    status: 'active',
    automationRate: 95
  }
];

export const humanApprovalGates = [
  {
    category: 'Financial',
    gates: ['Pricing exceptions beyond guardrails', 'Write-offs >$1K', 'Budget overrides'],
    approver: 'Founder/CFO',
    sla: '4 business hours'
  },
  {
    category: 'Legal/Risk',
    gates: ['Contract terms', 'IP assignments', 'Liability clauses', 'Data processing agreements'],
    approver: 'Legal/Executive',
    sla: '24 business hours'
  },
  {
    category: 'Strategic',
    gates: ['New client onboarding', 'Service scope changes', 'Partnership agreements'],
    approver: 'Founder/COO',
    sla: '8 business hours'
  },
  {
    category: 'Technical',
    gates: ['New AI agent types', 'Data category expansion', 'Security policy changes'],
    approver: 'CTO/Security Lead',
    sla: '12 business hours'
  }
];