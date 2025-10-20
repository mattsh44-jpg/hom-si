import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Clock,
  Activity,
  Zap,
  Shield,
  Database
} from 'lucide-react';

interface SystemStatusProps {
  className?: string;
}

export function SystemStatus({ className }: SystemStatusProps) {
  const systemComponents = [
    {
      name: 'Workflow Engine',
      status: 'operational',
      uptime: '99.2%',
      icon: <Activity className="h-4 w-4" />,
      description: 'n8n automation platform'
    },
    {
      name: 'Data Fabric',
      status: 'operational',
      uptime: '99.8%',
      icon: <Database className="h-4 w-4" />,
      description: 'Supabase data layer'
    },
    {
      name: 'AI Agents',
      status: 'degraded',
      uptime: '97.5%',
      icon: <Zap className="h-4 w-4" />,
      description: 'OpenAI/Anthropic services'
    },
    {
      name: 'Security Layer',
      status: 'operational',
      uptime: '100%',
      icon: <Shield className="h-4 w-4" />,
      description: 'Auth & access controls'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'degraded':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'outage':
        return <XCircle className="h-4 w-4 text-red-600" />;
      case 'maintenance':
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'outage':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'maintenance':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const overallStatus = systemComponents.every(c => c.status === 'operational') 
    ? 'operational' 
    : systemComponents.some(c => c.status === 'outage')
    ? 'outage'
    : 'degraded';

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">System Status</CardTitle>
          <div className="flex items-center space-x-2">
            {getStatusIcon(overallStatus)}
            <Badge className={getStatusColor(overallStatus)}>
              {overallStatus.charAt(0).toUpperCase() + overallStatus.slice(1)}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {systemComponents.map((component, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-white">
                {component.icon}
              </div>
              <div>
                <div className="font-medium text-sm">{component.name}</div>
                <div className="text-xs text-gray-500">{component.description}</div>
              </div>
            </div>
            
            <div className="text-right space-y-1">
              <div className="flex items-center space-x-2">
                {getStatusIcon(component.status)}
                <Badge variant="outline" className={getStatusColor(component.status)}>
                  {component.status}
                </Badge>
              </div>
              <div className="text-xs text-gray-500">
                Uptime: {component.uptime}
              </div>
            </div>
          </div>
        ))}
        
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="text-sm font-medium text-blue-900 mb-1">
            Next Maintenance Window
          </div>
          <div className="text-xs text-blue-700">
            Sunday, January 26, 2025 at 2:00 AM EST (4 hours)
          </div>
        </div>
      </CardContent>
    </Card>
  );
}