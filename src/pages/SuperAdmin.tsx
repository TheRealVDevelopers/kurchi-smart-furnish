
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Users, 
  Database, 
  Activity, 
  Settings, 
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Server,
  UserCheck,
  UserX,
  Key
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SuperAdmin = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const admins = [
    { id: 'ADM001', name: 'John Admin', email: 'john.admin@kurchi.com', role: 'Admin', status: 'active', lastLogin: '2024-01-15 10:30' },
    { id: 'ADM002', name: 'Jane Manager', email: 'jane.manager@kurchi.com', role: 'Manager', status: 'active', lastLogin: '2024-01-14 15:45' },
    { id: 'ADM003', name: 'Bob Support', email: 'bob.support@kurchi.com', role: 'Support', status: 'inactive', lastLogin: '2024-01-10 09:15' },
  ];

  const systemLogs = [
    { id: 'LOG001', timestamp: '2024-01-15 10:30:15', user: 'john.admin@kurchi.com', action: 'Product Updated', resource: 'PRD001', status: 'success' },
    { id: 'LOG002', timestamp: '2024-01-15 10:25:30', user: 'jane.manager@kurchi.com', action: 'Order Processed', resource: 'ORD156', status: 'success' },
    { id: 'LOG003', timestamp: '2024-01-15 10:20:45', user: 'system', action: 'Database Backup', resource: 'DB_MAIN', status: 'success' },
    { id: 'LOG004', timestamp: '2024-01-15 10:15:00', user: 'unknown', action: 'Failed Login', resource: 'AUTH', status: 'error' },
  ];

  const systemStats = [
    { name: 'Database Size', value: '2.4 GB', status: 'normal' },
    { name: 'Active Sessions', value: '23', status: 'normal' },
    { name: 'Server Load', value: '45%', status: 'normal' },
    { name: 'Memory Usage', value: '78%', status: 'warning' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800 border-green-300"><CheckCircle className="w-3 h-3 mr-1" />Active</Badge>;
      case 'inactive':
        return <Badge className="bg-red-100 text-red-800 border-red-300"><XCircle className="w-3 h-3 mr-1" />Inactive</Badge>;
      case 'success':
        return <Badge className="bg-green-100 text-green-800 border-green-300">Success</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800 border-red-300">Error</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">Warning</Badge>;
      case 'normal':
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300">Normal</Badge>;
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
            <div className="flex items-center mb-2">
              <Shield className="h-8 w-8 text-red-600 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Super Admin Dashboard</h1>
            </div>
            <p className="text-gray-600">System administration and oversight</p>
          </div>

          {/* System Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">System Status</p>
                  <p className="text-2xl font-bold text-green-600">Healthy</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Admins</p>
                  <p className="text-2xl font-bold text-gray-900">8</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Database</p>
                  <p className="text-2xl font-bold text-gray-900">Online</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Activity className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Uptime</p>
                  <p className="text-2xl font-bold text-gray-900">99.9%</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="admins" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="admins">Admin Users</TabsTrigger>
              <TabsTrigger value="system">System Monitor</TabsTrigger>
              <TabsTrigger value="logs">Activity Logs</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="settings">System Settings</TabsTrigger>
            </TabsList>

            {/* Admin Users Tab */}
            <TabsContent value="admins" className="space-y-4">
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Admin User Management</h3>
                    <div className="flex space-x-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          placeholder="Search admins..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Add Admin
                      </Button>
                    </div>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Admin ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Last Login</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {admins.map((admin) => (
                        <TableRow key={admin.id}>
                          <TableCell className="font-medium">{admin.id}</TableCell>
                          <TableCell>{admin.name}</TableCell>
                          <TableCell>{admin.email}</TableCell>
                          <TableCell>{admin.role}</TableCell>
                          <TableCell>{getStatusBadge(admin.status)}</TableCell>
                          <TableCell>{admin.lastLogin}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <UserCheck className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <UserX className="h-4 w-4" />
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

            {/* System Monitor Tab */}
            <TabsContent value="system" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">System Resources</h3>
                    <div className="space-y-4">
                      {systemStats.map((stat, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600">{stat.name}</span>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-bold">{stat.value}</span>
                            {getStatusBadge(stat.status)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button className="w-full justify-start" variant="outline">
                        <Database className="h-4 w-4 mr-2" />
                        Backup Database
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Server className="h-4 w-4 mr-2" />
                        Restart Server
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Activity className="h-4 w-4 mr-2" />
                        View System Logs
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Settings className="h-4 w-4 mr-2" />
                        System Configuration
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>

            {/* Activity Logs Tab */}
            <TabsContent value="logs" className="space-y-4">
              <Card>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">System Activity Logs</h3>
                    <Button variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      Export Logs
                    </Button>
                  </div>
                  
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Log ID</TableHead>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Action</TableHead>
                        <TableHead>Resource</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {systemLogs.map((log) => (
                        <TableRow key={log.id}>
                          <TableCell className="font-medium">{log.id}</TableCell>
                          <TableCell>{log.timestamp}</TableCell>
                          <TableCell>{log.user}</TableCell>
                          <TableCell>{log.action}</TableCell>
                          <TableCell>{log.resource}</TableCell>
                          <TableCell>{getStatusBadge(log.status)}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </TabsContent>

            {/* Security Tab */}
            <TabsContent value="security" className="space-y-4">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium mb-2">Password Policies</h4>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm">Require strong passwords</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" defaultChecked />
                          <span className="text-sm">Two-factor authentication</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Session timeout (30 minutes)</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">API Security</h4>
                      <div className="space-y-3">
                        <Button variant="outline" className="w-full justify-start">
                          <Key className="h-4 w-4 mr-2" />
                          Regenerate API Keys
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="h-4 w-4 mr-2" />
                          Update Security Certificates
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* System Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">System Configuration</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">System Name</label>
                      <Input defaultValue="Kurchi Admin System" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Admin Email</label>
                      <Input defaultValue="superadmin@kurchi.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Backup Schedule</label>
                      <Input defaultValue="Daily at 2:00 AM" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Maintenance Window</label>
                      <Input defaultValue="Sunday 1:00 AM - 3:00 AM" />
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      Save System Settings
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
