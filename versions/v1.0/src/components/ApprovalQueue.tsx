import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  DollarSign, 
  FileText, 
  Shield,
  AlertTriangle
} from 'lucide-react';

interface ApprovalItem {
  id: string;
  type: 'financial' | 'legal' | 'strategic' | 'technical';
  title: string;
  description: string;
  requestedBy: string;
  amount?: string;
  priority: 'high' | 'medium' | 'low';
  timeRemaining: string;
  details: string;
}

interface ApprovalQueueProps {
  className?: string;
}

export function ApprovalQueue({ className }: ApprovalQueueProps) {
  const approvalItems: ApprovalItem[] = [
    {
      id: 'app-001',
      type: 'financial',
      title: 'Pricing Exception Request',
      description: 'Client ABC requesting 15% discount on diagnostic package',
      requestedBy: 'Sales Agent',
      amount: '$21,250',
      priority: 'high',
      timeRemaining: '2h 15m',
      details: 'Strategic client, potential for $200K annual contract'
    },
    {
      id: 'app-002',
      type: 'legal',
      title: 'Custom Contract Terms',
      description: 'Non-standard IP ownership clause in SOW',
      requestedBy: 'Revenue Operator',
      priority: 'medium',
      timeRemaining: '18h 30m',
      details: 'Client wants to retain rights to custom automation scripts'
    },
    {
      id: 'app-003',
      type: 'technical',
      title: 'New AI Agent Deployment',
      description: 'Deploy customer service PBX agent to production',
      requestedBy: 'Systems Integrator',
      priority: 'medium',
      timeRemaining: '6h 45m',
      details: 'Passed all validation tests, ready for production deployment'
    },
    {
      id: 'app-004',
      type: 'strategic',
      title: 'Partnership Agreement',
      description: 'White-label distribution partnership with TechCorp',
      requestedBy: 'Business Development',
      priority: 'low',
      timeRemaining: '2d 12h',
      details: 'Revenue sharing model: 70/30 split on white-label products'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'financial':
        return <DollarSign className="h-4 w-4" />;
      case 'legal':
        return <FileText className="h-4 w-4" />;
      case 'technical':
        return <Shield className="h-4 w-4" />;
      case 'strategic':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'financial':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'legal':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'technical':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'strategic':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold">Approval Queue</CardTitle>
          <Badge variant="outline" className="bg-orange-100 text-orange-800">
            {approvalItems.length} Pending
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {approvalItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(item.type)}
                  <h4 className="font-medium text-sm">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <Badge className={getTypeColor(item.type)}>
                  {item.type}
                </Badge>
                <Badge className={getPriorityColor(item.priority)}>
                  {item.priority}
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
              <div>
                <span className="font-medium">Requested by:</span> {item.requestedBy}
              </div>
              <div>
                <span className="font-medium">Time remaining:</span> {item.timeRemaining}
              </div>
              {item.amount && (
                <div>
                  <span className="font-medium">Amount:</span> {item.amount}
                </div>
              )}
            </div>
            
            <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
              <span className="font-medium">Details:</span> {item.details}
            </div>
            
            <div className="flex space-x-2">
              <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                <CheckCircle className="h-3 w-3 mr-1" />
                Approve
              </Button>
              <Button size="sm" variant="outline" className="flex-1 text-red-600 border-red-200 hover:bg-red-50">
                <XCircle className="h-3 w-3 mr-1" />
                Reject
              </Button>
              <Button size="sm" variant="outline">
                Details
              </Button>
            </div>
          </div>
        ))}
        
        {approvalItems.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <CheckCircle className="h-12 w-12 mx-auto mb-3 text-green-500" />
            <p className="text-sm">All approvals processed</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}