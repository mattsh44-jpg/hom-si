export interface Agent {
  id: string;
  name: string;
  type: string;
  description: string;
  capabilities: string[];
  tools: string[];
  guardrails: string[];
  status: 'active' | 'training' | 'offline';
  performance: {
    accuracy: number;
    responseTime: number;
    uptime: number;
    costPerRequest: number;
  };
  lastDeployed: string;
}

export const agentTypes = [
  'Sales Agent',
  'Diagnostic Bot',
  'Business Mentor',
  'PBX Agent',
  'Copy Assistant',
  'Data Analyst',
  'Process Optimizer'
];

export const agents: Agent[] = [
  {
    id: 'sales-001',
    name: 'HOM Sales Agent',
    type: 'Sales Agent',
    description: 'Handles initial client inquiries, qualification, and proposal generation',
    capabilities: [
      'Lead qualification',
      'Discovery questioning',
      'Proposal generation',
      'Objection handling',
      'Meeting scheduling'
    ],
    tools: [
      'OpenAI GPT-4',
      'HubSpot CRM',
      'Calendly API',
      'DocuSign',
      'Pricing Engine'
    ],
    guardrails: [
      'No pricing above $100K without approval',
      'No custom terms without legal review',
      'No promises on delivery dates >90 days',
      'Must escalate technical questions to specialists'
    ],
    status: 'active',
    performance: {
      accuracy: 92,
      responseTime: 2.3,
      uptime: 99.2,
      costPerRequest: 0.15
    },
    lastDeployed: '2025-01-15T14:30:00Z'
  },
  {
    id: 'diag-001',
    name: 'Business Diagnostic Bot',
    type: 'Diagnostic Bot',
    description: 'Conducts automated business assessments and identifies optimization opportunities',
    capabilities: [
      'Process analysis',
      'Efficiency scoring',
      'Gap identification',
      'Recommendation generation',
      'ROI calculation'
    ],
    tools: [
      'Anthropic Claude',
      'Process Mining Tools',
      'Analytics APIs',
      'Benchmarking Database',
      'Report Generator'
    ],
    guardrails: [
      'No access to confidential financial data',
      'Cannot make binding recommendations',
      'Must flag high-risk findings for human review',
      'Limited to pre-approved assessment frameworks'
    ],
    status: 'active',
    performance: {
      accuracy: 88,
      responseTime: 15.7,
      uptime: 97.8,
      costPerRequest: 0.45
    },
    lastDeployed: '2025-01-18T09:15:00Z'
  },
  {
    id: 'pbx-001',
    name: 'Customer Service PBX Agent',
    type: 'PBX Agent',
    description: 'Handles inbound calls, basic support, and call routing',
    capabilities: [
      'Call answering',
      'Basic troubleshooting',
      'Appointment scheduling',
      'Information lookup',
      'Escalation routing'
    ],
    tools: [
      'Twilio Voice API',
      'Speech-to-Text',
      'Text-to-Speech',
      'CRM Integration',
      'Knowledge Base'
    ],
    guardrails: [
      'Cannot handle billing disputes',
      'Must escalate technical issues',
      'No access to sensitive customer data',
      'Limited to 15-minute call duration'
    ],
    status: 'training',
    performance: {
      accuracy: 85,
      responseTime: 1.8,
      uptime: 95.5,
      costPerRequest: 0.25
    },
    lastDeployed: '2025-01-10T11:20:00Z'
  },
  {
    id: 'copy-001',
    name: 'Marketing Copy Assistant',
    type: 'Copy Assistant',
    description: 'Generates marketing content, emails, and social media posts',
    capabilities: [
      'Email copywriting',
      'Social media content',
      'Blog post drafts',
      'Ad copy creation',
      'Content optimization'
    ],
    tools: [
      'OpenAI GPT-4',
      'Brand Guidelines DB',
      'Content Calendar',
      'A/B Testing Tools',
      'SEO Analyzer'
    ],
    guardrails: [
      'Must follow brand guidelines',
      'Cannot publish without approval',
      'No claims about competitors',
      'Must include required disclaimers'
    ],
    status: 'active',
    performance: {
      accuracy: 94,
      responseTime: 3.2,
      uptime: 98.7,
      costPerRequest: 0.08
    },
    lastDeployed: '2025-01-12T16:45:00Z'
  }
];

export const agentBlueprint = {
  coreLogicAgent: {
    name: 'HOM-SI Core',
    responsibilities: [
      'Workflow orchestration',
      'Decision routing',
      'Exception handling',
      'Performance monitoring'
    ],
    decisionRules: [
      'Route high-value deals (>$50K) to human approval',
      'Escalate system errors after 3 retry attempts',
      'Flag margin exceptions below 60%',
      'Auto-approve standard proposals within guardrails'
    ]
  },
  planner: {
    name: 'Strategic Planner',
    responsibilities: [
      'Resource allocation',
      'Capacity planning',
      'Timeline optimization',
      'Risk assessment'
    ],
    algorithms: [
      'Critical path analysis',
      'Resource leveling',
      'Monte Carlo simulation',
      'Constraint satisfaction'
    ]
  },
  validator: {
    name: 'Quality Validator',
    responsibilities: [
      'Data quality checks',
      'Output validation',
      'Compliance verification',
      'Performance testing'
    ],
    validationRules: [
      'Data freshness <24h',
      'Accuracy threshold >95%',
      'Compliance with data retention policies',
      'Performance SLA adherence'
    ]
  },
  reporter: {
    name: 'Intelligence Reporter',
    responsibilities: [
      'KPI aggregation',
      'Trend analysis',
      'Anomaly detection',
      'Executive briefing'
    ],
    reportingCadence: [
      'Real-time: System alerts',
      'Daily: Operational metrics',
      'Weekly: EOS scorecard',
      'Monthly: Performance review'
    ]
  }
};