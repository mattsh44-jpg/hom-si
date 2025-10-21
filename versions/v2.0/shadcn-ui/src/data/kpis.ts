export interface KPI {
  id: string;
  name: string;
  description: string;
  category: string;
  target: number;
  current: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  status: 'green' | 'yellow' | 'red';
  lastUpdated: string;
}

export const kpiCategories = [
  'Automation Efficiency',
  'System Reliability',
  'Financial Performance',
  'Client Success',
  'Operational Excellence'
];

export const kpis: KPI[] = [
  {
    id: 'auto-001',
    name: 'Workflow Automation Rate',
    description: 'Percentage of internal workflows fully automated',
    category: 'Automation Efficiency',
    target: 80,
    current: 78,
    unit: '%',
    trend: 'up',
    status: 'yellow',
    lastUpdated: '2025-01-20T10:30:00Z'
  },
  {
    id: 'auto-002',
    name: 'Founder Dependency Reduction',
    description: 'Reduction in direct founder involvement in operations',
    category: 'Automation Efficiency',
    target: 70,
    current: 65,
    unit: '%',
    trend: 'up',
    status: 'yellow',
    lastUpdated: '2025-01-20T10:30:00Z'
  },
  {
    id: 'sys-001',
    name: 'System Uptime',
    description: 'Percentage of automations running error-free',
    category: 'System Reliability',
    target: 95,
    current: 97,
    unit: '%',
    trend: 'stable',
    status: 'green',
    lastUpdated: '2025-01-20T10:25:00Z'
  },
  {
    id: 'sys-002',
    name: 'Error Rate',
    description: 'Percentage of transactions with errors',
    category: 'System Reliability',
    target: 2,
    current: 1.3,
    unit: '%',
    trend: 'down',
    status: 'green',
    lastUpdated: '2025-01-20T10:25:00Z'
  },
  {
    id: 'fin-001',
    name: 'AR Days',
    description: 'Average days to collect accounts receivable',
    category: 'Financial Performance',
    target: 35,
    current: 28,
    unit: 'days',
    trend: 'down',
    status: 'green',
    lastUpdated: '2025-01-20T09:00:00Z'
  },
  {
    id: 'fin-002',
    name: 'Revenue from Automation',
    description: 'Revenue contribution from systemized workflows',
    category: 'Financial Performance',
    target: 15,
    current: 12,
    unit: '%',
    trend: 'up',
    status: 'yellow',
    lastUpdated: '2025-01-20T09:00:00Z'
  },
  {
    id: 'client-001',
    name: 'Project Turnaround Improvement',
    description: 'Improvement in average project delivery time',
    category: 'Client Success',
    target: 30,
    current: 25,
    unit: '%',
    trend: 'up',
    status: 'yellow',
    lastUpdated: '2025-01-20T08:45:00Z'
  },
  {
    id: 'ops-001',
    name: 'Documentation Coverage',
    description: 'Percentage of workflows fully documented',
    category: 'Operational Excellence',
    target: 100,
    current: 95,
    unit: '%',
    trend: 'up',
    status: 'yellow',
    lastUpdated: '2025-01-20T10:15:00Z'
  }
];

export const eosScorecard = {
  companyScorecard: [
    { metric: 'Monthly Recurring Revenue', target: '$50K', current: '$47K', status: 'yellow' },
    { metric: 'Gross Margin', target: '70%', current: '68%', status: 'yellow' },
    { metric: 'Pipeline Velocity', target: '45 days', current: '42 days', status: 'green' },
    { metric: 'Client Health Score', target: '8.5/10', current: '8.2/10', status: 'yellow' },
    { metric: 'System Uptime', target: '95%', current: '97%', status: 'green' }
  ],
  roleScorecard: {
    systemsIntegrator: [
      { metric: 'Automation Rate', target: '80%', current: '78%', status: 'yellow' },
      { metric: 'System Uptime', target: '95%', current: '97%', status: 'green' },
      { metric: 'Error Rate', target: '<2%', current: '1.3%', status: 'green' },
      { metric: 'Documentation Coverage', target: '100%', current: '95%', status: 'yellow' }
    ],
    revenueOperator: [
      { metric: 'Lead Response Time', target: '<5min', current: '3min', status: 'green' },
      { metric: 'Conversion Rate', target: '25%', current: '23%', status: 'yellow' },
      { metric: 'Pipeline Value', target: '$200K', current: '$185K', status: 'yellow' }
    ],
    financialController: [
      { metric: 'AR Days', target: '<35', current: '28', status: 'green' },
      { metric: 'Invoice Accuracy', target: '99%', current: '98.5%', status: 'yellow' },
      { metric: 'Cash Flow Forecast', target: '90 days', current: '85 days', status: 'yellow' }
    ]
  }
};