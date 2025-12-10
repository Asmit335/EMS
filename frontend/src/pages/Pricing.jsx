import React, { useState } from 'react';
import {
  Check, X, HelpCircle, ArrowRight, Zap,
  Users, Building, Globe, Shield, Star,
  Download, CreditCard, Calendar, Headphones,
  MessageCircle, Award, TrendingUp, Settings,
  Database, Cloud, Smartphone, FileText
} from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses',
      price: billingCycle === 'yearly' ? 29 : 39,
      billing: billingCycle === 'yearly' ? '/month billed yearly' : '/month billed monthly',
      savings: billingCycle === 'yearly' ? 'Save 25%' : '',
      color: 'from-blue-500 to-cyan-500',
      features: [
        { included: true, text: 'Up to 50 employees' },
        { included: true, text: 'Basic employee management' },
        { included: true, text: 'Attendance tracking' },
        { included: true, text: 'Leave management' },
        { included: false, text: 'Advanced analytics' },
        { included: false, text: 'Payroll processing' },
        { included: false, text: 'API access' },
        { included: false, text: 'Priority support' },
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Best for growing companies',
      price: billingCycle === 'yearly' ? 79 : 99,
      billing: billingCycle === 'yearly' ? '/month billed yearly' : '/month billed monthly',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      color: 'from-purple-500 to-pink-500',
      features: [
        { included: true, text: 'Up to 250 employees' },
        { included: true, text: 'Advanced employee management' },
        { included: true, text: 'Attendance & time tracking' },
        { included: true, text: 'Leave & shift management' },
        { included: true, text: 'Basic payroll processing' },
        { included: true, text: 'Performance reviews' },
        { included: true, text: 'API access' },
        { included: false, text: 'Dedicated support' },
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      billing: 'Tailored to your needs',
      savings: '',
      color: 'from-indigo-600 to-blue-600',
      features: [
        { included: true, text: 'Unlimited employees' },
        { included: true, text: 'Full employee lifecycle management' },
        { included: true, text: 'Advanced biometric integration' },
        { included: true, text: 'Complete payroll suite' },
        { included: true, text: 'Advanced analytics & reporting' },
        { included: true, text: 'Custom API integrations' },
        { included: true, text: 'Dedicated account manager' },
        { included: true, text: '24/7 priority support' },
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const featuresComparison = [
    { feature: 'Employee Limit', starter: 'Up to 50', pro: 'Up to 250', enterprise: 'Unlimited' },
    { feature: 'Attendance Tracking', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced + Biometric' },
    { feature: 'Payroll Processing', starter: '❌', pro: '✅ Basic', enterprise: '✅ Complete Suite' },
    { feature: 'Performance Reviews', starter: '❌', pro: '✅', enterprise: '✅ Advanced' },
    { feature: 'API Access', starter: '❌', pro: '✅', enterprise: '✅ Custom' },
    { feature: 'Support', starter: 'Email', pro: 'Email & Chat', enterprise: '24/7 Priority' },
    { feature: 'Data Export', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
    { feature: 'Custom Workflows', starter: '❌', pro: 'Limited', enterprise: '✅' },
  ];

  const faqs = [
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.'
    },
    {
      question: 'Is there a free trial?',
      answer: 'Yes! All paid plans include a 14-day free trial. No credit card required.'
    },
    {
      question: 'Do you offer discounts for non-profits?',
      answer: 'Yes, we offer special pricing for registered non-profit organizations. Contact our sales team.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. No long-term contracts required.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use enterprise-grade security with 256-bit encryption and regular backups.'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Users className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EMS Pro
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="/features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#" className="text-blue-600 font-medium">Pricing</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            <Award className="mr-2" size={16} />
            Simple, Transparent Pricing
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Plans That Grow
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              With Your Business
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choose the perfect plan for your team. All plans include our core features 
            with the flexibility to upgrade as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-16">
            <div className="bg-gray-100 rounded-2xl p-1 inline-flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${billingCycle === 'monthly' ? 'bg-white text-gray-900 shadow-lg' : 'text-gray-600'}`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center ${billingCycle === 'yearly' ? 'bg-white text-gray-900 shadow-lg' : 'text-gray-600'}`}
              >
                Yearly Billing
                <span className="ml-2 px-2 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden border-2 ${plan.popular ? 'border-purple-500 relative' : 'border-gray-100'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>

                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-baseline">
                      {plan.price === 'Custom' ? (
                        <span className="text-5xl font-bold text-gray-900">Custom</span>
                      ) : (
                        <>
                          <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                          <span className="text-gray-500 ml-2">{plan.billing}</span>
                        </>
                      )}
                    </div>
                    {plan.savings && (
                      <p className="text-green-600 font-medium mt-2">{plan.savings}</p>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedPlan(plan.name.toLowerCase())}
                    className={`w-full py-4 rounded-xl font-bold text-lg mb-8 transition-all ${plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:-translate-y-1'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4">
                    <p className="font-semibold text-gray-700 mb-4">What's included:</p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        {feature.included ? (
                          <Check className="text-green-500 mr-3 flex-shrink-0" size={20} />
                        ) : (
                          <X className="text-gray-300 mr-3 flex-shrink-0" size={20} />
                        )}
                        <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-6 border-t">
                  <div className="flex items-center text-gray-600">
                    <HelpCircle size={16} className="mr-2" />
                    <span className="text-sm">Need help choosing?</span>
                    <button className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                      Talk to sales
                      <ArrowRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-gray-600">
              Detailed breakdown of what each plan includes
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <tr>
                    <th className="text-left p-6 text-lg font-bold text-gray-900">Feature</th>
                    <th className="p-6 text-lg font-bold text-blue-600 text-center">Starter</th>
                    <th className="p-6 text-lg font-bold text-purple-600 text-center">Professional</th>
                    <th className="p-6 text-lg font-bold text-indigo-600 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featuresComparison.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-6 font-medium text-gray-900">{row.feature}</td>
                      <td className="p-6 text-center text-gray-700">{row.starter}</td>
                      <td className="p-6 text-center text-gray-700 font-medium">{row.pro}</td>
                      <td className="p-6 text-center text-gray-700 font-bold">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              <Download className="mr-2" size={20} />
              Download Full Feature Comparison PDF
            </button>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Building className="w-16 h-16 mb-6 opacity-80" />
                <h2 className="text-4xl font-bold mb-6">Enterprise Solutions</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Need custom pricing, dedicated support, or enterprise features? 
                  Our team will create a tailored solution for your organization.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="mr-3" size={20} />
                    Custom implementation & integration
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3" size={20} />
                    Dedicated account manager
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3" size={20} />
                    SLA with 99.9% uptime guarantee
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-3" size={20} />
                    On-premise deployment options
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Request Enterprise Demo</h3>
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Work Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <input
                    type="text"
                    placeholder="Number of Employees"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button className="w-full bg-white text-indigo-600 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-start">
                  <HelpCircle className="text-blue-600 mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center justify-center mx-auto">
              <MessageCircle className="mr-2" size={20} />
              Have more questions? Chat with our team
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl">
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of companies who trust EMS Pro for their employee management needs.
              Start your free trial today – no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-xl font-semibold text-lg">
                Start 14-Day Free Trial
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-500 font-semibold">
                Schedule a Demo
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
              <Shield className="mr-2" size={16} />
              <span>30-day money-back guarantee • No setup fees • Cancel anytime</span>
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
                <Users className="text-white" size={28} />
                <span className="text-2xl font-bold">EMS Pro</span>
              </div>
              <p className="text-gray-400">
                Simple, powerful employee management for businesses of all sizes.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/features" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
                <li><a href="#" className="hover:text-white">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 EMS Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;