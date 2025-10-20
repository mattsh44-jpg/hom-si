import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  Clock, 
  AlertTriangle, 
  Settings, 
  Play, 
  Pause,
  Users,
  Bot
} from 'lucide-react';
import { Workflow } from '@/data/workflows';

interface WorkflowCardProps {
  workflow: Workflow;
}

export function WorkflowCard({ workflow }: WorkflowCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      default:
        return <Settings className="h-4 w-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'error':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg font-semibold">
              {workflow.name}
            </CardTitle>
            <div className="text-sm text-gray-500">
              {workflow.category}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusIcon(workflow.status)}
            <Badge className={getStatusColor(workflow.status)}>
              {workflow.status}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-3">
          {workflow.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-500">Automation Rate</span>
            <span className="font-medium">{workflow.automationRate}%</span>
          </div>
          <Progress value={workflow.automationRate} className="h-2" />
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="font-medium text-gray-700 mb-1 flex items-center">
              <Bot className="h-3 w-3 mr-1" />
              Autonomous Steps
            </div>
            <div className="text-gray-500">
              {workflow.autonomousSteps.length} steps
            </div>
          </div>
          <div>
            <div className="font-medium text-gray-700 mb-1 flex items-center">
              <Users className="h-3 w-3 mr-1" />
              Human Gates
            </div>
            <div className="text-gray-500">
              {workflow.humanApprovalPoints.length} gates
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-xs font-medium text-gray-700">Tools Used</div>
          <div className="flex flex-wrap gap-1">
            {workflow.tools.slice(0, 3).map((tool, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tool}
              </Badge>
            ))}
            {workflow.tools.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{workflow.tools.length - 3} more
              </Badge>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="text-xs font-medium text-gray-700">KPIs</div>
          <div className="text-xs text-gray-500">
            {workflow.kpis.join(' • ')}
          </div>
        </div>
        
        <div className="text-xs text-gray-400">
          SLO: {workflow.slo}
        </div>
        
        <div className="flex space-x-2 pt-2">
          <Button size="sm" variant="outline" className="flex-1">
            <Settings className="h-3 w-3 mr-1" />
            Configure
          </Button>
          <Button size="sm" variant="outline">
            {workflow.status === 'active' ? (
              <Pause className="h-3 w-3" />
            ) : (
              <Play className="h-3 w-3" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}