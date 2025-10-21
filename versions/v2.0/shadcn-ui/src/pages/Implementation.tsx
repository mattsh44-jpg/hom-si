import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Target,
  Users,
  Zap,
  FileText,
  ArrowRight
} from 'lucide-react';

export default function Implementation() {
  const sprints = [
    {
      id: 'sprint-a',
      name: 'Sprint A: Foundation',
      duration: 'Weeks 1-4',
      status: 'completed',
      progress: 100,
      deliverables: [
        'Quote→Cash automation',
        'Intake→Proposal workflow',
        'EOS Scorecards implementation',
        'Access control & vault setup'
      ],
      successCriteria: [
        'Proposal generation <24h',
        'Invoice automation >90%',
        'Access controls implemented',
        'Basic dashboards operational'
      ],
      keyMilestones: [
        { week: 1, task: 'System architecture setup', status: 'completed' },
        { week: 2, task: 'Core workflow implementation', status: 'completed' },
        { week: 3, task: 'Integration testing', status: 'completed' },
        { week: 4, task: 'User acceptance testing', status: 'completed' }
      ]
    },
    {
      id: 'sprint-b',
      name: 'Sprint B: Intelligence',
      duration: 'Weeks 5-8',
      status: 'in-progress',
      progress: 65,
      deliverables: [
        'Data fabric implementation',
        'Diagnostic engine deployment',
        'Agent evaluation framework',
        'AR dunning automation'
      ],
      successCriteria: [
        'Data pipeline uptime >99%',
        'Agent accuracy >85%',
        'Diagnostic completion rate >90%',
        'AR days <35'
      ],
      keyMilestones: [
        { week: 5, task: 'Data pipeline setup', status: 'completed' },
        { week: 6, task: 'AI agent deployment', status: 'completed' },
        { week: 7, task: 'Evaluation framework', status: 'in-progress' },
        { week: 8, task: 'Performance optimization', status: 'pending' }
      ]
    },
    {
      id: 'sprint-c',
      name: 'Sprint C: Scale & Govern',
      duration: 'Weeks 9-12',
      status: 'pending',
      progress: 0,
      deliverables: [
        'Productization pipelines',
        'Board pack automation',
        'GRC & SRE-lite implementation',
        'Knowledge base system'
      ],
      successCriteria: [
        'White-label kit deployment',
        'Automated board reporting',
        'Compliance framework active',
        'Documentation coverage 100%'
      ],
      keyMilestones: [
        { week: 9, task: 'Productization framework', status: 'pending' },
        { week: 10, task: 'Governance implementation', status: 'pending' },
        { week: 11, task: 'Knowledge system deployment', status: 'pending' },
        { week: 12, task: 'Final validation & handover', status: 'pending' }
      ]
    }
  ];

  const kpiTargets = [
    { metric: 'Internal workflow automation', target: '≥ 80%', current: '78%', status: 'yellow' },
    { metric: 'Automation uptime', target: '≥ 95%', current: '97%', status: 'green' },
    { metric: 'Documentation coverage', target: '100%', current: '95%', status: 'yellow' },
    { metric: 'Founder execution involvement', target: '≤ 30%', current: '35%', status: 'yellow' },
    { metric: 'Avg project turnaround', target: '+30% faster', current: '+25%', status: 'yellow' },
    { metric: 'Error rate', target: '≤ 2%', current: '1.3%', status: 'green' },
    { metric: 'Revenue from productized systems', target: '≥ 15%', current: '12%', status: 'yellow' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-gray-400" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'pending':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Implementation Plan
              </h1>
              <p className="text-gray-600 mt-2">
                3-Sprint Rollout: 8-12 Week Deployment Timeline
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                <Calendar className="h-3 w-3 mr-1" />
                Week 7 of 12
              </Badge>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <FileText className="h-4 w-4 mr-2" />
                Export Plan
              </Button>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Overall Implementation Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Total Progress</span>
                <span className="text-sm text-gray-600">55% Complete</span>
              </div>
              <Progress value={55} className="h-3" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-900">1</div>
                  <div className="text-sm text-green-700">Sprints Completed</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-900">1</div>
                  <div className="text-sm text-blue-700">Sprint In Progress</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">1</div>
                  <div className="text-sm text-gray-700">Sprints Remaining</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sprint Details */}
        <div className="space-y-6">
          {sprints.map((sprint, index) => (
            <Card key={sprint.id} className={`${
              sprint.status === 'in-progress' ? 'ring-2 ring-blue-200' : ''
            }`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(sprint.status)}
                    <div>
                      <CardTitle className="text-lg">{sprint.name}</CardTitle>
                      <p className="text-sm text-gray-600">{sprint.duration}</p>
                    </div>
                  </div>
                  <Badge className={getStatusColor(sprint.status)}>
                    {sprint.status.replace('-', ' ')}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Sprint Progress</span>
                    <span className="text-sm text-gray-600">{sprint.progress}%</span>
                  </div>
                  <Progress value={sprint.progress} className="h-2" />
                </div>

                {/* Deliverables and Success Criteria */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-sm mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-1" />
                      Key Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {sprint.deliverables.map((deliverable, delIndex) => (
                        <li key={delIndex} className="text-sm flex items-center">
                          <CheckCircle className={`h-3 w-3 mr-2 ${
                            sprint.status === 'completed' ? 'text-green-600' : 'text-gray-400'
                          }`} />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-3 flex items-center">
                      <Target className="h-4 w-4 mr-1" />
                      Success Criteria
                    </h4>
                    <ul className="space-y-2">
                      {sprint.successCriteria.map((criteria, critIndex) => (
                        <li key={critIndex} className="text-sm flex items-center">
                          <Target className={`h-3 w-3 mr-2 ${
                            sprint.status === 'completed' ? 'text-green-600' : 'text-gray-400'
                          }`} />
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Weekly Milestones */}
                <div>
                  <h4 className="font-medium text-sm mb-3 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Weekly Milestones
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {sprint.keyMilestones.map((milestone, milIndex) => (
                      <div key={milIndex} className={`p-3 rounded-lg border ${
                        milestone.status === 'completed' ? 'bg-green-50 border-green-200' :
                        milestone.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                        'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium">Week {milestone.week}</span>
                          {getStatusIcon(milestone.status)}
                        </div>
                        <p className="text-xs text-gray-600">{milestone.task}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  {sprint.status === 'in-progress' && (
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      View Details
                    </Button>
                  )}
                  {sprint.status === 'pending' && (
                    <Button size="sm" variant="outline">
                      Start Sprint
                    </Button>
                  )}
                  {sprint.status === 'completed' && (
                    <Button size="sm" variant="outline">
                      View Report
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* KPI Validation Targets */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              KPI Validation Targets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {kpiTargets.map((kpi, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium text-sm">{kpi.metric}</div>
                    <div className="text-xs text-gray-600">Target: {kpi.target}</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-sm">{kpi.current}</span>
                    <Badge className={
                      kpi.status === 'green' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }>
                      {kpi.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ArrowRight className="h-5 w-5 mr-2" />
              Immediate Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium text-sm">Complete Agent Evaluation Framework</div>
                  <div className="text-xs text-gray-600">Due: End of Week 7 • Owner: Systems Team</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-yellow-50 rounded-lg">
                <div className="p-2 bg-yellow-100 rounded-full mr-3">
                  <Users className="h-4 w-4 text-yellow-600" />
                </div>
                <div>
                  <div className="font-medium text-sm">Stakeholder Review Meeting</div>
                  <div className="text-xs text-gray-600">Scheduled: Friday • Sprint B Progress Review</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-green-50 rounded-lg">
                <div className="p-2 bg-green-100 rounded-full mr-3">
                  <FileText className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <div className="font-medium text-sm">Prepare Sprint C Planning</div>
                  <div className="text-xs text-gray-600">Next Week • Define Sprint C requirements and resources</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}