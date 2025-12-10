import React from 'react';
import {
  Users, Briefcase, Calendar, Award, TrendingUp,
  DollarSign, Clock, Shield, ChevronRight,
  CheckCircle, Star, Building, Heart
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    { icon: Users, title: 'Employee Management', description: 'Manage all employee profiles, roles, and information in one place' },
    { icon: Calendar, title: 'Attendance Tracking', description: 'Real-time attendance tracking with automated reporting' },
    { icon: DollarSign, title: 'Payroll Processing', description: 'Automated payroll calculations and salary distribution' },
    { icon: Award, title: 'Performance Reviews', description: 'Track and evaluate employee performance metrics' },
    { icon: Briefcase, title: 'Leave Management', description: 'Streamlined leave requests and approvals workflow' },
    { icon: Shield, title: 'Security & Compliance', description: 'Enterprise-grade security with compliance management' },
  ];

  const testimonials = [
    { name: 'Sarah Johnson', role: 'HR Director, TechCorp', content: 'Our HR team efficiency increased by 60% after implementing EMS Pro.', avatar: 'SJ' },
    { name: 'Michael Chen', role: 'Operations Manager, Innovate Inc', content: 'The attendance tracking system saved us 20 hours weekly.', avatar: 'MC' },
    { name: 'Emma Wilson', role: 'CEO, StartupScale', content: 'Best investment we made for scaling our workforce management.', avatar: 'EW' },
  ];

  const stats = [
    { value: '500+', label: 'Companies Trust Us' },
    { value: '50K+', label: 'Employees Managed' },
    { value: '99.9%', label: 'System Uptime' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <nav className="bg-white shadow-sm py-4 px-6">
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
            <Link className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-blue-600 font-medium">Features</Link>
            <Link to="/price" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/adminDashboard" className="text-gray-700 hover:text-blue-600 font-medium">Admin</Link>
            <Link to="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-20 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                <Star className="mr-2" size={16} />
                Trusted by 500+ companies worldwide
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Streamline Your
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Workforce Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                EMS Pro helps you manage employees, track attendance, process payroll, 
                and boost productivity with our all-in-one employee management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-lg flex items-center justify-center">
                  Start Free Trial
                  <ChevronRight className="ml-2" size={20} />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold">
                  Book a Demo
                </button>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <CheckCircle className="text-green-500 mr-2" size={16} />
                <span>No credit card required</span>
                <span className="mx-2">•</span>
                <CheckCircle className="text-green-500 mr-2" size={16} />
                <span>Free 14-day trial</span>
                <span className="mx-2">•</span>
                <CheckCircle className="text-green-500 mr-2" size={16} />
                <span>Cancel anytime</span>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">Today's Overview</h3>
                    <span className="text-sm text-gray-500">Jan 15, 2024</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <div className="flex items-center">
                        <Users className="text-blue-600 mr-3" size={24} />
                        <div>
                          <p className="text-2xl font-bold">218</p>
                          <p className="text-sm text-gray-600">Present Today</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl">
                      <div className="flex items-center">
                        <TrendingUp className="text-green-600 mr-3" size={24} />
                        <div>
                          <p className="text-2xl font-bold">94.5%</p>
                          <p className="text-sm text-gray-600">Attend. Rate</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <Clock className="mx-auto text-blue-600 mb-2" size={20} />
                    <p className="font-bold">8.2 hrs</p>
                    <p className="text-xs text-gray-500">Avg. Hours</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <Building className="mx-auto text-purple-600 mb-2" size={20} />
                    <p className="font-bold">6</p>
                    <p className="text-xs text-gray-500">Departments</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <Heart className="mx-auto text-pink-600 mb-2" size={20} />
                    <p className="font-bold">92%</p>
                    <p className="text-xs text-gray-500">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Manage Your Workforce
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive tools designed to simplify HR operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <button className="mt-6 text-blue-600 hover:text-blue-800 font-medium flex items-center">
                  Learn more
                  <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              See what our customers say about EMS Pro
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your HR Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of companies who trust EMS Pro for their workforce management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 font-semibold text-lg">
                Schedule a Demo
              </button>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              No setup fees • No long-term contracts • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-white" size={28} />
                <span className="text-2xl font-bold">EMS Pro</span>
              </div>
              <p className="text-gray-400">
                The complete employee management solution for modern businesses.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white">GDPR</a></li>
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

export default Home;