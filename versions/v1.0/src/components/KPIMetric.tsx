import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { KPI } from '@/data/kpis';

interface KPIMetricProps {
  kpi: KPI;
}

export function KPIMetric({ kpi }: KPIMetricProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'yellow':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'red':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-600" />;
    }
  };

  const getProgressPercentage = () => {
    if (kpi.unit === '%') {
      return (kpi.current / kpi.target) * 100;
    }
    return kpi.target > 0 ? (kpi.current / kpi.target) * 100 : 0;
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-600">
            {kpi.name}
          </CardTitle>
          <Badge className={getStatusColor(kpi.status)}>
            {kpi.status.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              {kpi.current}{kpi.unit}
            </div>
            <div className="flex items-center space-x-1">
              {getTrendIcon(kpi.trend)}
            </div>
          </div>
          
          <div className="text-sm text-gray-500">
            Target: {kpi.target}{kpi.unit}
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                kpi.status === 'green' 
                  ? 'bg-green-500' 
                  : kpi.status === 'yellow' 
                  ? 'bg-yellow-500' 
                  : 'bg-red-500'
              }`}
              style={{ width: `${Math.min(getProgressPercentage(), 100)}%` }}
            />
          </div>
          
          <p className="text-xs text-gray-500 line-clamp-2">
            {kpi.description}
          </p>
          
          <div className="text-xs text-gray-400">
            Updated: {new Date(kpi.lastUpdated).toLocaleString()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}