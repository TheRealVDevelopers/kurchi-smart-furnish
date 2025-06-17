
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { 
  Shield, 
  Users, 
  Activity, 
  Server, 
  Database,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Eye,
  Edit,
  Trash2,
  UserCheck,
  UserX,
  Settings,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuperAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Enhanced chart data for SuperAdmin
  const systemMetrics = [
    { time: '00:00', cpu: 45, memory: 62, requests: 1200 },
    { time: '04:00', cpu: 52, memory: 58, requests: 980 },
    { time: '08:00', cpu: 78, memory: 74, requests: 2100 },
    { time: '12:00', cpu: 85, memory: 82, requests: 3200 },
    { time: '16:00', cpu: 92, memory: 88, requests: 3800 },
    { time: '20:00', cpu: 67, memory: 71, requests: 2400 },
  ];

  const userActivity = [
    { month: 'Jan', active: 450, new: 120, returning: 330 },
    { month: 'Feb', active: 520, new: 140, returning: 380 },
    { month: 'Mar', active: 680, new: 180, returning: 500 },
    { month: 'Apr', active: 750, new: 200, returning: 550 },
    { month: 'May', active: 820, new: 220, returning: 600 },
    { month: 'Jun', active: 890, new: 250, returning: 640 },
  ];

  const revenueByRegion = [
    { region: 'North America', value: 45000, color: '#8884d8' },
    { region: 'Europe', value: 35000, color: '#82ca9d' },
    { region: 'Asia', value: 28000, color: '#ffc658' },
    { region: 'Others', value: 12000, color: '#ff7c7c' },
  ];

  const errorLogs = [
    { time: '2024-01-20 14:30', level: 'error', message: 'Database connection timeout', count: 5 },
    { time: '2024-01-20 13:15', level: 'warning', message: 'High memory usage detected', count: 12 },
    { time: '2024-01-20 12:45', level: 'info', message: 'System backup completed', count: 1 },
    { time: '2024-01-20 11:20', level: 'error', message: 'Payment gateway failure', count: 3 },
  ];

  const adminUsers = [
    { id: 1, name: 'John Admin', email: 'john@kurchi.com', role: 'Admin', status: 'active', lastLogin: '2024-01-20' },
    { id: 2, name: 'Jane Manager', email: 'jane@kurchi.com', role: 'Manager', status: 'active', lastLogin: '2024-01-19' },
    { id: 3, name: 'Bob Support', email: 'bob@kurchi.com', role: 'Support', status: 'inactive', lastLogin: '2024-01-15' },
  ];

  const chartConfig = {
    cpu: { label: 'CPU %', color: '#8884d8' },
    memory: { label: 'Memory %', color: '#82ca9d' },
    requests: { label: 'Requests', color: '#ffc658' },
    active: { label: 'Active Users', color: '#8884d8' },
    new: { label: 'New Users', color: '#82ca9d' },
    returning: { label: 'Returning Users', color: '#ffc658' }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 border-green-300"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case 'inactive':
        return <Badge className="bg-gray-100 text-gray-800 border-gray-300"><UserX className="w-3 h-3 mr-1" />Inactive</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800 border-red-300"><AlertTriangle className="w-3 h-3 mr-1" />Error</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300"><AlertTriangle className="w-3 h-3 mr-1" />Warning</Badge>;
      case 'info':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300">Info</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16 pb-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <Shield className="h-8 w-8 text-red-600" />
              <h1 className="text-3xl font-bold text-gray-900">Super Admin Dashboard</h1>
            </div>
            <p className="text-gray-600">System-wide monitoring and administration</p>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-900">2,847</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +18% this month
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Activity className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">System Health</p>
                  <p className="text-2xl font-bold text-green-600">98.5%</p>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    All systems operational
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Server className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Server Load</p>
                  <p className="text-2xl font-bold text-gray-900">67%</p>
                  <p className="text-xs text-yellow-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Moderate load
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Database className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Storage Used</p>
                  <p className="text-2xl font-bold text-gray-900">1.2TB</p>
                  <p className="text-xs text-blue-600 flex items-center mt-1">
                    <BarChart3 className="h-3 w-3 mr-1" />
                    65% capacity
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Alerts</p>
                  <p className="text-2xl font-bold text-red-600">3</p>
                  <p className="text-xs text-red-600 flex items-center mt-1">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Needs attention
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Advanced Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">System Performance Metrics</h3>
              <ChartContainer config={chartConfig} className="h-[350px]">
                <AreaChart data={systemMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Area type="monotone" dataKey="cpu" stackId="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="memory" stackId="1" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                </AreaChart>
              </ChartContainer>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">User Activity Trends</h3>
              <ChartContainer config={chartConfig} className="h-[350px]">
                <BarChart data={userActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="new" fill="#82ca9d" />
                  <Bar dataKey="returning" fill="#8884d8" />
                  <Bar dataKey="active" fill="#ffc658" />
                </BarChart>
              </ChartContainer>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Revenue by Region</h3>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={revenueByRegion}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ region, percent }) => `${region.split(' ')[0]} ${(percent * 100).toFixed(0)}%`}
                  >
                    {revenueByRegion.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
                </PieChart>
              </ChartContainer>
            </Card>

            <Card className="p-6 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">API Request Volume</h3>
              <ChartContainer config={chartConfig} className="h-[300px]">
                <LineChart data={systemMetrics}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line type="monotone" dataKey="requests" stroke="#ffc658" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ChartContainer>
            </Card>
          </div>

          {/* Tabs for different admin functions */}
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="users">Admin Users</TabsTrigger>
              <TabsTrigger value="logs">System Logs</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">System Settings</TabsTrigger>
            </TabsList>

            {/* Admin Users Tab */}
            <TabsContent value="users" className="space-y-4">
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Admin Users Management</h3>
                    <Button>
                      <UserCheck className="h-4 w-4 mr-2" />
                      Add Admin
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {adminUsers.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{user.role}</Badge>
                          </TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell>{user.lastLogin}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            {/* System Logs Tab */}
            <TabsContent value="logs" className="space-y-4">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">System Error Logs</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Level</TableHead>
                        <TableHead>Message</TableHead>
                        <TableHead>Count</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {errorLogs.map((log, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-mono text-sm">{log.time}</TableCell>
                          <TableCell>{getStatusBadge(log.level)}</TableCell>
                          <TableCell>{log.message}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{log.count}</Badge>
                          </TableCell>
                          <TableCell>
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Page Views</h4>
                  <p className="text-3xl font-bold text-blue-600">1.2M</p>
                  <p className="text-sm text-gray-600">This month</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Conversion Rate</h4>
                  <p className="text-3xl font-bold text-green-600">3.4%</p>
                  <p className="text-sm text-gray-600">+0.2% from last month</p>
                </Card>
                <Card className="p-6">
                  <h4 className="font-semibold mb-2">Bounce Rate</h4>
                  <p className="text-3xl font-bold text-orange-600">42%</p>
                  <p className="text-sm text-gray-600">-2% improvement</p>
                </Card>
              </div>
            </TabsContent>

            {/* System Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">System Configuration</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
                        <Input defaultValue="Kurchi Management System" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Environment</label>
                        <Input defaultValue="Production" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">API Rate Limit</label>
                        <Input defaultValue="1000/hour" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Session Timeout</label>
                        <Input defaultValue="30 minutes" />
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <Settings className="h-4 w-4 mr-2" />
                      Update System Settings
                    </Button>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SuperAdmin;
