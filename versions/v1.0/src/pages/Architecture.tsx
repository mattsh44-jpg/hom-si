import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Database, 
  Bot, 
  Workflow, 
  Shield, 
  Monitor,
  Zap,
  Users,
  FileText,
  ArrowRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function Architecture() {
  const coreServices = [
    {
      name: 'Workflow Engine',
      description: 'n8n-based automation orchestration',
      technology: 'n8n, Node.js',
      status: 'operational',
      connections: ['Data Fabric', 'AI Agents', 'External APIs'],
      icon: <Workflow className="h-6 w-6" />
    },
    {
      name: 'Data Fabric',
      description: 'Centralized data layer with Supabase',
      technology: 'Supabase, PostgreSQL',
      status: 'operational',
      connections: ['All Services', 'External Sources', 'Analytics'],
      icon: <Database className="h-6 w-6" />
    },
    {
      name: 'Agent Orchestration',
      description: 'AI agent deployment and monitoring',
      technology: 'OpenAI, Anthropic, Docker',
      status: 'operational',
      connections: ['Workflow Engine', 'Data Fabric', 'Validation'],
      icon: <Bot className="h-6 w-6" />
    },
    {
      name: 'Validation Layer',
      description: 'Quality assurance and compliance',
      technology: 'Custom Rules Engine',
      status: 'operational',
      connections: ['All Outputs', 'Governance', 'Monitoring'],
      icon: <Shield className="h-6 w-6" />
    },
    {
      name: 'Monitoring & Analytics',
      description: 'Real-time system observability',
      technology: 'Prometheus, Grafana',
      status: 'operational',
      connections: ['All Services', 'Alerting', 'Dashboards'],
      icon: <Monitor className="h-6 w-6" />
    },
    {
      name: 'Human Interface',
      description: 'Dashboards and approval systems',
      technology: 'React, shadcn/ui',
      status: 'operational',
      connections: ['All Services', 'User Management', 'Notifications'],
      icon: <Users className="h-6 w-6" />
    }
  ];

  const integrations = [
    { name: 'n8n', type: 'Automation', status: 'connected', icon: <Workflow className="h-4 w-4" /> },
    { name: 'Supabase', type: 'Database', status: 'connected', icon: <Database className="h-4 w-4" /> },
    { name: 'QuickBooks', type: 'Finance', status: 'connected', icon: <FileText className="h-4 w-4" /> },
    { name: 'HubSpot', type: 'CRM', status: 'connected', icon: <Users className="h-4 w-4" /> },
    { name: 'Mailchimp', type: 'Marketing', status: 'connected', icon: <Zap className="h-4 w-4" /> },
    { name: 'Google Workspace', type: 'Productivity', status: 'connected', icon: <FileText className="h-4 w-4" /> },
    { name: 'OpenAI', type: 'AI', status: 'connected', icon: <Bot className="h-4 w-4" /> },
    { name: 'Anthropic', type: 'AI', status: 'connected', icon: <Bot className="h-4 w-4" /> }
  ];

  const informationFlow = [
    { stage: 'Intake', description: 'Multi-channel data ingestion', color: 'bg-blue-100 text-blue-800' },
    { stage: 'Automate', description: 'Workflow execution and processing', color: 'bg-green-100 text-green-800' },
    { stage: 'Validate', description: 'Quality checks and compliance', color: 'bg-yellow-100 text-yellow-800' },
    { stage: 'Report', description: 'Dashboard updates and notifications', color: 'bg-purple-100 text-purple-800' },
    { stage: 'Learn', description: 'Feedback loops and optimization', color: 'bg-orange-100 text-orange-800' }
  ];

  const humanGates = [
    { gate: 'Financial Approvals', threshold: '>$10K or margin exceptions', sla: '4 hours' },
    { gate: 'Legal Review', threshold: 'Contract terms, IP, liability', sla: '24 hours' },
    { gate: 'Strategic Decisions', threshold: 'New partnerships, service changes', sla: '8 hours' },
    { gate: 'Technical Deployment', threshold: 'Production releases, new agents', sla: '12 hours' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                System Architecture
              </h1>
              <p className="text-gray-600 mt-2">
                HOM-SI AI-First Systems Integration Architecture
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <FileText className="h-4 w-4 mr-2" />
              Export Diagram
            </Button>
          </div>
        </div>

        {/* Core Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Core Services Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreServices.map((service, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{service.name}</h3>
                        <p className="text-xs text-gray-500">{service.technology}</p>
                      </div>
                    </div>
                    <Badge className={
                      service.status === 'operational' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }>
                      {service.status}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-1">Connections:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.connections.map((conn, connIndex) => (
                        <Badge key={connIndex} variant="outline" className="text-xs">
                          {conn}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Information Flow */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowRight className="h-5 w-5 mr-2" />
              Information Flow Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              {informationFlow.map((stage, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className={`px-4 py-2 rounded-lg ${stage.color} font-semibold`}>
                      {stage.stage}
                    </div>
                    <p className="text-xs text-gray-600 mt-2 max-w-24">
                      {stage.description}
                    </p>
                  </div>
                  {index < informationFlow.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Integrations and Human Gates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Required Integrations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2" />
                System Integrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {integrations.map((integration, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white rounded">
                        {integration.icon}
                      </div>
                      <div>
                        <div className="font-medium text-sm">{integration.name}</div>
                        <div className="text-xs text-gray-500">{integration.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <Badge className="bg-green-100 text-green-800 text-xs">
                        {integration.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Human-in-the-Loop Gates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Human-in-the-Loop Gates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {humanGates.map((gate, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-sm">{gate.gate}</h3>
                      <Badge variant="outline" className="text-xs">
                        SLA: {gate.sla}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-600">{gate.threshold}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Architecture Principles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Design Principles & Guardrails
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Core Principles</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Turn Chaos into Rhythm
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Run on Data, Not Intuition
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Protect Cash, Multiply IP
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Never Operate Blind
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Stay Within Human Guardrails
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Safety Guardrails</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                    RBAC & Least Privilege
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                    PII Protection & Auto-masking
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                    Cost Ceilings & Budget Caps
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                    Audit Logging & Traceability
                  </li>
                  <li className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-orange-600 mr-2" />
                    No Unapproved Public Outputs
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}