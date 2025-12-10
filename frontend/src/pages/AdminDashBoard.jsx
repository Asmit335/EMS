import React, { useState } from 'react';
import {
  Menu, X, Search, Bell, User, Settings, LogOut,
  Users, Calendar, Briefcase, TrendingUp, Award,
  DollarSign, FileText, PieChart, Shield, Clock,
  CheckCircle, XCircle, MoreVertical, Download
} from 'lucide-react';

const EMSDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: 'Total Employees', value: '245', change: '+8', trend: 'up', icon: Users, color: 'bg-blue-500' },
    { title: 'Present Today', value: '218', change: '89%', trend: 'up', icon: CheckCircle, color: 'bg-green-500' },
    { title: 'On Leave', value: '12', change: '5%', trend: 'down', icon: Calendar, color: 'bg-yellow-500' },
    { title: 'Open Positions', value: '8', change: '3 new', trend: 'up', icon: Briefcase, color: 'bg-purple-500' },
    { title: 'Avg. Salary', value: '$4,850', change: '+5.2%', trend: 'up', icon: DollarSign, color: 'bg-indigo-500' },
    { title: 'Attend. Rate', value: '94.5%', change: '+2.1%', trend: 'up', icon: TrendingUp, color: 'bg-pink-500' },
  ];

  const recentActivities = [
    { employee: 'Sarah Johnson', action: 'Submitted leave request', time: '10 min ago', type: 'leave' },
    { employee: 'Mike Chen', action: 'Completed training module', time: '25 min ago', type: 'training' },
    { employee: 'Emma Wilson', action: 'Updated personal info', time: '1 hour ago', type: 'update' },
    { employee: 'David Park', action: 'Submitted timesheet', time: '2 hours ago', type: 'timesheet' },
    { employee: 'Lisa Brown', action: 'Promoted to Senior Dev', time: '3 hours ago', type: 'promotion' },
  ];

  const employeesOnLeave = [
    { name: 'Robert Smith', department: 'Engineering', leaveType: 'Sick Leave', days: 3, returnDate: 'Jan 18' },
    { name: 'Maria Garcia', department: 'Marketing', leaveType: 'Annual Leave', days: 7, returnDate: 'Jan 22' },
    { name: 'James Wilson', department: 'Sales', leaveType: 'Maternity', days: 90, returnDate: 'Apr 15' },
    { name: 'Sophia Lee', department: 'HR', leaveType: 'Personal', days: 2, returnDate: 'Jan 16' },
  ];

  const upcomingEvents = [
    { title: 'Team Building Workshop', date: 'Jan 20', time: '2:00 PM', type: 'workshop' },
    { title: 'Monthly Review Meeting', date: 'Jan 22', time: '10:00 AM', type: 'meeting' },
    { title: 'Payroll Processing', date: 'Jan 25', type: 'payroll' },
    { title: 'Training: New Compliance', date: 'Jan 28', time: '1:00 PM', type: 'training' },
  ];

  const departmentStats = [
    { department: 'Engineering', employees: 85, vacancies: 3, avgSalary: '$6,200' },
    { department: 'Sales', employees: 42, vacancies: 2, avgSalary: '$4,500' },
    { department: 'Marketing', employees: 28, vacancies: 1, avgSalary: '$4,800' },
    { department: 'HR & Admin', employees: 18, vacancies: 0, avgSalary: '$4,200' },
    { department: 'Finance', employees: 24, vacancies: 1, avgSalary: '$5,500' },
    { department: 'Operations', employees: 48, vacancies: 1, avgSalary: '$4,000' },
  ];

  const navigation = [
    { name: 'Dashboard', icon: PieChart, active: true },
    { name: 'Employees', icon: Users },
    { name: 'Attendance', icon: Clock },
    { name: 'Leave Management', icon: Calendar },
    { name: 'Payroll', icon: DollarSign },
    { name: 'Recruitment', icon: Briefcase },
    { name: 'Performance', icon: TrendingUp },
    { name: 'Reports', icon: FileText },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gradient-to-b from-blue-900 to-indigo-900 text-white transition-all duration-300`}>
        <div className="p-6 border-b border-blue-800">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <div>
                  <h1 className="text-xl font-bold">EMS Pro</h1>
                  <p className="text-blue-300 text-xs">Employee Management</p>
                </div>
              </div>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-blue-800"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <nav className="p-4">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name.toLowerCase())}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-start px-4' : 'justify-center'} py-3 my-1 rounded-lg transition-all ${activeTab === item.name.toLowerCase() ? 'bg-white/20 text-white' : 'text-blue-200 hover:bg-white/10'}`}
            >
              <item.icon size={20} />
              {sidebarOpen && <span className="ml-3 font-medium">{item.name}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="absolute bottom-0 w-64 p-6 border-t border-blue-800">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                AD
              </div>
              <div>
                <p className="font-semibold">Admin User</p>
                <p className="text-blue-300 text-sm">Super Admin</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search employees, documents, or reports..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
                <Download size={18} />
                <span>Export Report</span>
              </button>
              
              <div className="h-8 w-px bg-gray-300"></div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Settings size={20} />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full text-red-500">
                  <LogOut size={20} />
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white mb-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Employee Management Dashboard</h1>
                <p className="text-blue-100">Welcome back! Here's your workforce overview for today.</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-4xl font-bold">218</div>
                  <div className="text-blue-200">Present Today</div>
                </div>
                <Shield size={48} className="opacity-20" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-4 border hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <p className="text-xl font-bold mt-1">{stat.value}</p>
                    <div className="flex items-center mt-1">
                      <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {stat.change}
                      </span>
                      <span className="text-gray-400 text-xs ml-2">from last month</span>
                    </div>
                  </div>
                  <div className={`${stat.color} p-2 rounded-lg`}>
                    <stat.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Recent Activities</h2>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View All Activities
                  </button>
                </div>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start p-3 hover:bg-gray-50 rounded-lg">
                      <div className={`p-2 rounded-full mr-3 ${activity.type === 'leave' ? 'bg-yellow-100' : activity.type === 'promotion' ? 'bg-green-100' : 'bg-blue-100'}`}>
                        <User size={16} className={activity.type === 'leave' ? 'text-yellow-600' : activity.type === 'promotion' ? 'text-green-600' : 'text-blue-600'} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.employee}</p>
                        <p className="text-gray-600 text-sm">{activity.action}</p>
                      </div>
                      <span className="text-gray-400 text-sm">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-bold mb-6">Department Overview</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 text-sm border-b">
                        <th className="pb-3">Department</th>
                        <th className="pb-3">Employees</th>
                        <th className="pb-3">Vacancies</th>
                        <th className="pb-3">Avg. Salary</th>
                        <th className="pb-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {departmentStats.map((dept, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="py-4 font-medium">{dept.department}</td>
                          <td className="py-4">
                            <div className="flex items-center">
                              <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                                <div 
                                  className="bg-blue-500 h-2 rounded-full" 
                                  style={{ width: `${(dept.employees / 100) * 100}%` }}
                                ></div>
                              </div>
                              {dept.employees}
                            </div>
                          </td>
                          <td className="py-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${dept.vacancies > 0 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                              {dept.vacancies} position{dept.vacancies !== 1 ? 's' : ''}
                            </span>
                          </td>
                          <td className="py-4 font-bold">{dept.avgSalary}</td>
                          <td className="py-4">
                            <button className="text-blue-600 hover:text-blue-800">
                              <MoreVertical size={18} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Employees on Leave</h2>
                  <span className="text-sm text-gray-500">{employeesOnLeave.length} employees</span>
                </div>
                <div className="space-y-4">
                  {employeesOnLeave.map((employee, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{employee.name}</p>
                          <p className="text-gray-600 text-sm">{employee.department}</p>
                        </div>
                        <span className="text-xs font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          {employee.leaveType}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
                        <span>{employee.days} day{employee.days !== 1 ? 's' : ''}</span>
                        <span>Returns: {employee.returnDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border">
                <h2 className="text-xl font-bold mb-6">Upcoming Events</h2>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start p-3 border-l-4 border-blue-500 hover:bg-gray-50">
                      <div className="flex-1">
                        <p className="font-medium">{event.title}</p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar size={14} className="mr-1" />
                          {event.date}
                          {event.time && (
                            <>
                              <Clock size={14} className="ml-3 mr-1" />
                              {event.time}
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 text-center text-blue-600 hover:text-blue-800 font-medium py-2 border rounded-lg hover:bg-blue-50">
                  View Calendar
                </button>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm p-6 border border-blue-100">
                <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white p-3 rounded-lg border hover:shadow-sm text-center">
                    <User className="mx-auto mb-2 text-blue-600" size={20} />
                    <span className="text-sm font-medium">Add Employee</span>
                  </button>
                  <button className="bg-white p-3 rounded-lg border hover:shadow-sm text-center">
                    <FileText className="mx-auto mb-2 text-green-600" size={20} />
                    <span className="text-sm font-medium">Generate Payroll</span>
                  </button>
                  <button className="bg-white p-3 rounded-lg border hover:shadow-sm text-center">
                    <Calendar className="mx-auto mb-2 text-purple-600" size={20} />
                    <span className="text-sm font-medium">Approve Leave</span>
                  </button>
                  <button className="bg-white p-3 rounded-lg border hover:shadow-sm text-center">
                    <Award className="mx-auto mb-2 text-orange-600" size={20} />
                    <span className="text-sm font-medium">Performance Review</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EMSDashboard;