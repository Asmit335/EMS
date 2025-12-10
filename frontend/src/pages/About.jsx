import React from 'react';
import {
  Target, Users, TrendingUp, Heart, Award,
  Globe, Shield, Zap, Clock, CheckCircle,
  Star, Building, Heart as HeartIcon, Briefcase,
  ArrowRight, ChevronRight, Facebook, Twitter,
  Linkedin, Instagram, Mail, MapPin, Phone,
  MessageCircle, Calendar, BookOpen, Coffee
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', experience: '15+ years in HR Tech', avatar: 'SJ', bio: 'Former HR Director at Fortune 500 companies' },
    { name: 'Michael Chen', role: 'CTO', experience: '12+ years in Software', avatar: 'MC', bio: 'Ex-Google engineer, AI specialist' },
    { name: 'Emma Wilson', role: 'Head of Product', experience: '10+ years Product', avatar: 'EW', bio: 'Product management expert from Silicon Valley' },
    { name: 'David Park', role: 'HR Director', experience: '18+ years HR', avatar: 'DP', bio: 'HR consultant for 100+ companies worldwide' },
  ];

  const milestones = [
    { year: '2018', title: 'Company Founded', description: 'Started with a vision to revolutionize HR tech' },
    { year: '2019', title: 'First 100 Clients', description: 'Reached milestone of 100 happy customers' },
    { year: '2020', title: 'Series A Funding', description: 'Raised $5M to accelerate growth' },
    { year: '2021', title: 'Global Expansion', description: 'Expanded operations to 10+ countries' },
    { year: '2022', title: '500+ Companies', description: 'Trusted by over 500 companies worldwide' },
    { year: '2023', title: 'AI Integration', description: 'Launched AI-powered features suite' },
  ];

  const values = [
    { icon: Target, title: 'Innovation', description: 'Continuously pushing boundaries in HR technology' },
    { icon: Heart, title: 'Integrity', description: 'Transparent and ethical in everything we do' },
    { icon: Users, title: 'Customer First', description: 'Our customers success is our success' },
    { icon: Shield, title: 'Security', description: 'Top priority for protecting sensitive data' },
    { icon: Globe, title: 'Global Mindset', description: 'Building solutions for a global workforce' },
    { icon: TrendingUp, title: 'Excellence', description: 'Striving for excellence in every interaction' },
  ];

  const testimonials = [
    { company: 'TechCorp Inc.', quote: 'EMS Pro transformed how we manage our 500+ employees.', author: 'Lisa Rodriguez, HR Director' },
    { company: 'Innovate Solutions', quote: 'The best investment we made for our growing team.', author: 'James Wilson, CEO' },
    { company: 'Global Enterprises', quote: 'Seamless integration and exceptional support.', author: 'Maria Garcia, Operations Head' },
  ];

  const partners = [
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Google Cloud', logo: 'GC' },
    { name: 'AWS', logo: 'AWS' },
    { name: 'Salesforce', logo: 'SF' },
    { name: 'Slack', logo: 'SL' },
    { name: 'Zoom', logo: 'ZM' },
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
            <a href="/features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#" className="text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                <Star className="mr-2" size={16} />
                Our Story
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Revolutionizing
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Workforce Management
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Founded in 2018, EMS Pro has grown from a simple idea into a leading 
                employee management platform trusted by companies worldwide. Our mission 
                is to simplify HR operations and empower organizations to focus on what 
                matters most: their people.
              </p>
              <div className="flex items-center space-x-6">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:shadow-xl font-semibold flex items-center">
                  Meet Our Team
                  <ArrowRight className="ml-2" size={20} />
                </button>
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                  <PlayCircle className="mr-2" size={24} />
                  Watch Our Story
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <Users className="mx-auto text-blue-600 mb-2" size={24} />
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-sm text-gray-500">Companies</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <Globe className="mx-auto text-purple-600 mb-2" size={24} />
                    <p className="text-2xl font-bold">25+</p>
                    <p className="text-sm text-gray-500">Countries</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl text-center shadow">
                    <Award className="mx-auto text-yellow-600 mb-2" size={24} />
                    <p className="text-2xl font-bold">50K+</p>
                    <p className="text-sm text-gray-500">Employees</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      AD
                    </div>
                    <div className="ml-4">
                      <p className="font-bold">Alex Morgan</p>
                      <p className="text-gray-500 text-sm">CEO, Innovate Corp</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">
                    "EMS Pro transformed our HR operations completely. The team's dedication 
                    to innovation is unmatched."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6">
                To empower organizations with intelligent tools that simplify employee 
                management, enhance productivity, and foster positive workplace cultures.
              </p>
              <ul className="space-y-3">
                {['Simplify HR operations', 'Enhance employee experience', 'Drive organizational growth', 'Ensure data security'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-3" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg mb-6">
                To become the global standard for employee management, creating workplaces 
                where technology enables human potential to thrive.
              </p>
              <ul className="space-y-3">
                {['Global leadership in HR tech', 'AI-driven HR solutions', '10M+ users worldwide', 'Sustainable workplace innovation'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="text-yellow-500 mr-3" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at EMS Pro
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate experts dedicated to transforming HR technology
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
                <div className="bg-gray-50 p-4 border-t">
                  <div className="flex justify-center space-x-4">
                    <button className="text-gray-400 hover:text-blue-600">
                      <Linkedin size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600">
                      <Twitter size={20} />
                    </button>
                    <button className="text-gray-400 hover:text-blue-600">
                      <Mail size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl hover:bg-blue-50 font-semibold">
              View All Team Members
            </button>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones that define our growth and success
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 lg:left-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                      <div className="text-3xl font-bold text-blue-600 mb-3">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              We partner with the best to deliver exceptional value
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Building className="text-blue-600" size={24} />
                  </div>
                  <span className="font-bold text-gray-800">{partner.logo}</span>
                  <p className="text-gray-500 text-sm mt-1">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Success stories from companies we've helped transform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="border-t pt-6">
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <MessageCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-4xl font-bold mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Be part of the revolution in employee management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 font-semibold text-lg">
                Start Free Trial
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 font-semibold text-lg">
                Contact Sales
              </button>
            </div>
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
                Building better workplaces through innovative technology.
              </p>
              <div className="flex space-x-4 mt-6">
                <button className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </button>
                <button className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  123 Innovation Drive, San Francisco
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  hello@emspro.com
                </li>
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

// Helper component for Play icon
const PlayCircle = (props) => (
  <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default About;