import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KPIMetric } from '@/components/KPIMetric';
import { SystemStatus } from '@/components/SystemStatus';
import { ApprovalQueue } from '@/components/ApprovalQueue';
import { kpis, eosScorecard } from '@/data/kpis';
import { 
  Activity, 
  TrendingUp, 
  Users, 
  DollarSign,
  Bot,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export default function Dashboard() {
  const quickStats = [
    {
      title: 'Active Workflows',
      value: '47',
      change: '+3',
      trend: 'up',
      icon: <Activity className="h-5 w-5" />
    },
    {
      title: 'Automation Rate',
      value: '78%',
      change: '+5%',
      trend: 'up',
      icon: <Bot className="h-5 w-5" />
    },
    {
      title: 'System Uptime',
      value: '99.2%',
      change: '+0.1%',
      trend: 'up',
      icon: <CheckCircle className="h-5 w-5" />
    },
    {
      title: 'Pending Approvals',
      value: '4',
      change: '-2',
      trend: 'down',
      icon: <Clock className="h-5 w-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                HOM Systems Integrator Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                AI-First Operations Command Center
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-green-100 text-green-800 border-green-200">
                <CheckCircle className="h-3 w-3 mr-1" />
                All Systems Operational
              </Badge>
              <div className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} from last week
                    </p>
                  </div>
                  <div className="p-3 bg-gray-100 rounded-full">
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* EOS Company Scorecard */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                EOS Company Scorecard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {eosScorecard.companyScorecard.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium text-sm">{metric.metric}</div>
                    <div className="flex items-center space-x-3">
                      <div className="text-sm text-gray-600">
                        Target: {metric.target}
                      </div>
                      <div className="font-semibold">{metric.current}</div>
                      <Badge className={
                        metric.status === 'green' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }>
                        {metric.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Status */}
          <SystemStatus />
        </div>

        {/* KPIs and Approvals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Key KPIs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2" />
                Key Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {kpis.slice(0, 4).map((kpi) => (
                  <KPIMetric key={kpi.id} kpi={kpi} />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Approval Queue */}
          <ApprovalQueue />
        </div>

        {/* Role Scorecards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(eosScorecard.roleScorecard).map(([role, metrics]) => (
            <Card key={role}>
              <CardHeader>
                <CardTitle className="text-base capitalize">
                  {role.replace(/([A-Z])/g, ' $1').trim()} Scorecard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="font-medium text-gray-700">{metric.metric}</div>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-600">{metric.current}</span>
                        <Badge className={
                          metric.status === 'green' 
                            ? 'bg-green-100 text-green-800 text-xs' 
                            : 'bg-yellow-100 text-yellow-800 text-xs'
                        }>
                          {metric.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" />
              Recent System Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: '10:30 AM', action: 'Proposal generated for Client ABC', status: 'success' },
                { time: '10:25 AM', action: 'Deal approval granted with margin exception', status: 'warning' },
                { time: '10:20 AM', action: 'Lead qualified and routed to discovery', status: 'success' },
                { time: '10:15 AM', action: 'Data pipeline failure detected and resolved', status: 'error' },
                { time: '10:10 AM', action: 'Weekly EOS scorecard generated', status: 'success' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' :
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <span className="text-sm">{activity.action}</span>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}