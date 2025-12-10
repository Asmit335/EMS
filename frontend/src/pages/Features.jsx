import React from 'react';
import {
  Users, Calendar, DollarSign, Award, Briefcase, Shield,
  Clock, FileText, TrendingUp, BarChart, Zap, Lock,
  CheckCircle, Globe, Cloud, Smartphone, Database,
  MessageCircle, Bell, Search, Download, Share2,
  Settings, Users as Team, FileCheck, PieChart,
  Target, Heart, BookOpen, Headphones
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: Users,
      title: 'Employee Management',
      description: 'Complete employee profiles with personal information, job details, and employment history.',
      features: [
        'Digital employee profiles',
        'Document management',
        'Role and permission assignment',
        'Organization chart',
        'Employment history tracking'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'Attendance & Time Tracking',
      description: 'Automated attendance tracking with biometric integration and detailed reporting.',
      features: [
        'Biometric integration',
        'Geo-fencing attendance',
        'Overtime calculation',
        'Leave balance tracking',
        'Real-time attendance dashboard'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: DollarSign,
      title: 'Payroll Management',
      description: 'Automated payroll processing with tax calculations and compliance management.',
      features: [
        'Automated salary calculations',
        'Tax compliance management',
        'Bonus and deduction handling',
        'Payslip generation',
        'Direct deposit integration'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Performance Management',
      description: 'Track employee performance with regular reviews and goal setting.',
      features: [
        '360-degree feedback',
        'KPI tracking',
        'Goal setting and tracking',
        'Performance reviews',
        'Skill gap analysis'
      ],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Briefcase,
      title: 'Recruitment & Onboarding',
      description: 'Streamlined hiring process from job posting to employee onboarding.',
      features: [
        'Applicant tracking system',
        'Automated screening',
        'Interview scheduling',
        'Digital onboarding',
        'Document collection'
      ],
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with compliance management and audit trails.',
      features: [
        'Role-based access control',
        'GDPR compliance',
        'Data encryption',
        'Audit trails',
        'Two-factor authentication'
      ],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const additionalFeatures = [
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Centralized storage for all employee documents with version control.'
    },
    {
      icon: Clock,
      title: 'Shift Management',
      description: 'Create and manage employee schedules with automated shift planning.'
    },
    {
      icon: Team,
      title: 'Team Collaboration',
      description: 'Integrated tools for team communication and project management.'
    },
    {
      icon: Bell,
      title: 'Notifications & Alerts',
      description: 'Automated notifications for important events and deadlines.'
    },
    {
      icon: Search,
      title: 'Advanced Analytics',
      description: 'Detailed reports and insights for data-driven decision making.'
    },
    {
      icon: Download,
      title: 'Data Export',
      description: 'Export any data in multiple formats for external processing.'
    }
  ];

  const platformFeatures = [
    {
      icon: Globe,
      title: 'Cloud Based',
      description: 'Access your data from anywhere with our secure cloud infrastructure.',
      stat: '99.9% uptime'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Full-featured mobile app for iOS and Android devices.',
      stat: '50K+ downloads'
    },
    {
      icon: Database,
      title: 'Data Security',
      description: 'Enterprise-grade security with regular backups and encryption.',
      stat: '256-bit encryption'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer support via multiple channels.',
      stat: '< 5 min response'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Briefcase className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EMS Pro
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-blue-600 font-medium">Features</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Try Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            <Zap className="mr-2" size={16} />
            All-in-One Solution
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern HR Teams
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover comprehensive tools designed to streamline every aspect of employee management, 
            from recruitment to retirement, all in one unified platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-xl font-semibold flex items-center">
              <CheckCircle className="mr-2" size={20} />
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl hover:border-blue-500 font-semibold">
              Watch Demo Video
            </button>
          </div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your workforce efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${feature.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={18} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn More
                    <Share2 className="ml-2" size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Performance
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade platform with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-b from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="text-2xl font-bold text-blue-600">{feature.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              And many more features to enhance your HR operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Feature Comparison
            </h2>
            <p className="text-xl text-gray-600">
              See how EMS Pro compares to traditional HR solutions
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="text-left p-6 text-lg">Feature</th>
                  <th className="p-6 text-lg">Traditional HR</th>
                  <th className="p-6 text-lg">EMS Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Automated Payroll', '❌ Manual', '✅ Automated'],
                  ['Real-time Analytics', '❌ Limited', '✅ Advanced'],
                  ['Mobile Access', '❌ Not Available', '✅ Full Access'],
                  ['Cloud Storage', '❌ Local Only', '✅ Secure Cloud'],
                  ['24/7 Support', '❌ Business Hours', '✅ 24/7 Available'],
                  ['Integration API', '❌ Not Available', '✅ Available'],
                  ['Compliance Updates', '❌ Manual Updates', '✅ Automatic'],
                  ['Scalability', '❌ Limited', '✅ Unlimited'],
                ].map(([feature, traditional, ems], index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="p-6 font-medium">{feature}</td>
                    <td className="p-6 text-center text-gray-600">{traditional}</td>
                    <td className="p-6 text-center text-green-600 font-bold">{ems}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <Lock className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of companies who have streamlined their employee management with EMS Pro
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 font-semibold text-lg">
                Start 14-Day Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 font-semibold text-lg">
                Request Enterprise Demo
              </button>
            </div>
            <p className="mt-8 text-blue-200">
              No credit card required • No setup fees • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-white" size={28} />
                <span className="text-2xl font-bold">EMS Pro</span>
              </div>
              <p className="text-gray-400">
                The future of employee management starts here.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Employee Management</a></li>
                <li><a href="#" className="hover:text-white">Attendance Tracking</a></li>
                <li><a href="#" className="hover:text-white">Payroll Processing</a></li>
                <li><a href="#" className="hover:text-white">Performance Reviews</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 EMS Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Features;