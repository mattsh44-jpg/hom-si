import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { WorkflowCard } from '@/components/WorkflowCard';
import { workflows, workflowCategories, humanApprovalGates } from '@/data/workflows';
import { 
  Search, 
  Filter, 
  Plus, 
  Users, 
  Bot,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function Workflows() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredWorkflows = workflows.filter(workflow => {
    const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || workflow.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const workflowStats = {
    total: workflows.length,
    active: workflows.filter(w => w.status === 'active').length,
    avgAutomation: Math.round(workflows.reduce((sum, w) => sum + w.automationRate, 0) / workflows.length),
    humanGates: humanApprovalGates.length
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Workflow Library
              </h1>
              <p className="text-gray-600 mt-2">
                Complete automation workflows from The Hann Protocol
              </p>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              New Workflow
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-600 font-medium">Total Workflows</p>
                  <p className="text-2xl font-bold text-blue-900">{workflowStats.total}</p>
                </div>
                <Bot className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-600 font-medium">Active</p>
                  <p className="text-2xl font-bold text-green-900">{workflowStats.active}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 font-medium">Avg Automation</p>
                  <p className="text-2xl font-bold text-purple-900">{workflowStats.avgAutomation}%</p>
                </div>
                <Bot className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-orange-600 font-medium">Human Gates</p>
                  <p className="text-2xl font-bold text-orange-900">{workflowStats.humanGates}</p>
                </div>
                <Users className="h-8 w-8 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="workflows" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="workflows">Workflow Catalog</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="approvals">Approval Gates</TabsTrigger>
          </TabsList>

          <TabsContent value="workflows" className="space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search workflows..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedCategory === 'all' ? 'default' : 'outline'}
                      onClick={() => setSelectedCategory('all')}
                      size="sm"
                    >
                      All Categories
                    </Button>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      More Filters
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {workflowCategories.slice(0, 8).map((category) => (
                    <Badge
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Workflow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorkflows.map((workflow) => (
                <WorkflowCard key={workflow.id} workflow={workflow} />
              ))}
            </div>

            {filteredWorkflows.length === 0 && (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bot className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No workflows found
                  </h3>
                  <p className="text-gray-500">
                    Try adjusting your search or filter criteria
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="categories" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workflowCategories.map((category) => {
                const categoryWorkflows = workflows.filter(w => w.category === category);
                const avgAutomation = categoryWorkflows.length > 0 
                  ? Math.round(categoryWorkflows.reduce((sum, w) => sum + w.automationRate, 0) / categoryWorkflows.length)
                  : 0;
                
                return (
                  <Card key={category} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Workflows</span>
                          <span className="font-medium">{categoryWorkflows.length}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Avg Automation</span>
                          <span className="font-medium">{avgAutomation}%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Active</span>
                          <span className="font-medium">
                            {categoryWorkflows.filter(w => w.status === 'active').length}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="approvals" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {humanApprovalGates.map((gate, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      {gate.category} Approvals
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Approver:</span>
                        <span className="font-medium">{gate.approver}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">SLA:</span>
                        <span className="font-medium">{gate.sla}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm mb-2">Approval Gates:</h4>
                        <ul className="space-y-1">
                          {gate.gates.map((gateItem, gateIndex) => (
                            <li key={gateIndex} className="text-sm text-gray-600 flex items-center">
                              <Clock className="h-3 w-3 mr-2" />
                              {gateItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}