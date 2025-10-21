export interface Policy {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements: string[];
  controls: string[];
  auditFrequency: string;
  owner: string;
  lastReviewed: string;
  status: 'active' | 'draft' | 'deprecated';
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  resource: string;
  outcome: 'success' | 'failure';
  details: string;
}

export const governanceCategories = [
  'Data Privacy',
  'AI Ethics',
  'Financial Controls',
  'Access Management',
  'Operational Security',
  'Compliance'
];

export const policies: Policy[] = [
  {
    id: 'dp-001',
    name: 'Personal Data Protection',
    category: 'Data Privacy',
    description: 'Ensures compliance with GDPR and local privacy regulations',
    requirements: [
      'Data minimization principles',
      'Explicit consent for processing',
      'Right to erasure implementation',
      'Data breach notification <72h'
    ],
    controls: [
      'Automated PII detection and masking',
      'Consent management system',
      'Data retention policy enforcement',
      'Regular privacy impact assessments'
    ],
    auditFrequency: 'Quarterly',
    owner: 'Data Protection Officer',
    lastReviewed: '2025-01-15',
    status: 'active'
  },
  {
    id: 'ai-001',
    name: 'AI Model Governance',
    category: 'AI Ethics',
    description: 'Governs the development, deployment, and monitoring of AI systems',
    requirements: [
      'Bias testing before deployment',
      'Human oversight for critical decisions',
      'Explainability for client-facing outputs',
      'Regular model performance reviews'
    ],
    controls: [
      'Model validation pipeline',
      'Bias detection algorithms',
      'Human-in-the-loop checkpoints',
      'Performance monitoring dashboards'
    ],
    auditFrequency: 'Monthly',
    owner: 'AI Ethics Committee',
    lastReviewed: '2025-01-10',
    status: 'active'
  },
  {
    id: 'fc-001',
    name: 'Financial Authorization Matrix',
    category: 'Financial Controls',
    description: 'Defines approval limits and segregation of duties for financial transactions',
    requirements: [
      'Dual approval for transactions >$10K',
      'Monthly reconciliation of all accounts',
      'Segregation of duties in AP/AR',
      'Regular variance analysis'
    ],
    controls: [
      'Automated approval workflows',
      'Real-time spend monitoring',
      'Exception reporting',
      'Monthly financial close process'
    ],
    auditFrequency: 'Monthly',
    owner: 'Financial Controller',
    lastReviewed: '2025-01-20',
    status: 'active'
  },
  {
    id: 'am-001',
    name: 'Role-Based Access Control',
    category: 'Access Management',
    description: 'Manages user access rights and permissions across all systems',
    requirements: [
      'Principle of least privilege',
      'Regular access reviews',
      'Immediate revocation on termination',
      'Multi-factor authentication'
    ],
    controls: [
      'Identity and access management system',
      'Quarterly access certification',
      'Automated provisioning/deprovisioning',
      'Privileged access monitoring'
    ],
    auditFrequency: 'Quarterly',
    owner: 'IT Security Manager',
    lastReviewed: '2025-01-12',
    status: 'active'
  }
];

export const auditLogs: AuditLog[] = [
  {
    id: 'log-001',
    timestamp: '2025-01-20T10:30:15Z',
    user: 'system.automation',
    action: 'PROPOSAL_GENERATED',
    resource: 'proposal-2025-001',
    outcome: 'success',
    details: 'Automated proposal generation for Client ABC, value $25K'
  },
  {
    id: 'log-002',
    timestamp: '2025-01-20T10:25:42Z',
    user: 'john.doe@hom.com',
    action: 'APPROVAL_GRANTED',
    resource: 'deal-2025-015',
    outcome: 'success',
    details: 'Approved deal with 5% margin exception'
  },
  {
    id: 'log-003',
    timestamp: '2025-01-20T10:20:33Z',
    user: 'ai.agent.sales',
    action: 'LEAD_QUALIFIED',
    resource: 'lead-2025-089',
    outcome: 'success',
    details: 'Lead scored 85/100, routed to discovery queue'
  },
  {
    id: 'log-004',
    timestamp: '2025-01-20T10:15:18Z',
    user: 'system.monitor',
    action: 'ALERT_TRIGGERED',
    resource: 'workflow-etl-001',
    outcome: 'failure',
    details: 'Data pipeline failure detected, auto-retry initiated'
  }
];

export const complianceFrameworks = [
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation',
    requirements: ['Data minimization', 'Consent management', 'Right to erasure'],
    status: 'compliant'
  },
  {
    name: 'SOC 2 Type II',
    description: 'Service Organization Control 2',
    requirements: ['Security controls', 'Availability monitoring', 'Processing integrity'],
    status: 'in-progress'
  },
  {
    name: 'ISO 27001',
    description: 'Information Security Management',
    requirements: ['Risk assessment', 'Security policies', 'Incident response'],
    status: 'planned'
  }
];

export const autonomyLimits = [
  {
    category: 'Financial',
    limits: [
      'No self-approval of pricing exceptions',
      'Cannot authorize payments >$5K',
      'Must escalate margin below 60%',
      'Cannot modify billing terms'
    ]
  },
  {
    category: 'Legal',
    limits: [
      'No binding contract generation',
      'Cannot modify legal terms',
      'Must escalate IP-related decisions',
      'No unilateral NDA signing'
    ]
  },
  {
    category: 'Operational',
    limits: [
      'Cannot grant high-privilege access',
      'No production deployments without approval',
      'Must escalate security incidents',
      'Cannot suppress critical alerts'
    ]
  },
  {
    category: 'Strategic',
    limits: [
      'No public statements for tier-1 clients',
      'Cannot change service offerings',
      'Must escalate partnership decisions',
      'No unilateral policy changes'
    ]
  }
];