import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Monitor, 
  Globe, 
  DollarSign, 
  Link, 
  FileText,
  Clock,
  Users,
  Zap,
  ChevronDown,
  Calculator,
  CheckCircle,
  ArrowRight,
  Anchor,
  Truck,
  Ship,
  CreditCard,
  Mail,
  Phone
} from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2220%22%20height=%2220%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id=%22grid%22%20width=%2220%22%20height=%2220%22%20patternUnits=%22userSpaceOnUse%22%3E%3Cpath%20d=%22M%2020%200%20L%200%200%200%2020%22%20fill=%22none%22%20stroke=%22%23ffffff10%22%20stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20fill=%22url(%23grid)%22%20/%3E%3C/svg%3E')] animate-pulse"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-xl opacity-50 animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <Ship className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Revolutionary Vehicle Shipping Platform</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-fade-in-up delay-300">
          AutoShip
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-300 animate-fade-in-up delay-500">
          Complete Vehicle Shipping Management Solution
        </p>
        
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-yellow-400 mb-8 animate-fade-in-up delay-700">
          Investment: $28,000 - $30,000
        </div>
        
        <button 
          onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up delay-1000"
        >
          Explore Solution
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

const StatsSection = () => {
  const [counters, setCounters] = useState({ weeks: 0, platforms: 0, pages: 0, integrations: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    });

    const statsElement = document.getElementById('stats');
    if (statsElement) observer.observe(statsElement);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const targets = { weeks: 12, platforms: 3, pages: 10, integrations: 6 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach((key) => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  return (
    <section id="overview" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Project Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive vehicle shipping management platform with native mobile apps, 
            web admin portal, and customer-facing website with advanced integrations.
          </p>
        </div>

        <div id="stats" className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">{counters.weeks}</div>
              <div className="text-gray-600 font-medium">Weeks Timeline</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">{counters.platforms}</div>
              <div className="text-gray-600 font-medium">Platforms</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-teal-600 mb-2">{counters.pages}</div>
              <div className="text-gray-600 font-medium">Website Pages</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white rounded-2xl p-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-indigo-600 mb-2">{counters.integrations}</div>
              <div className="text-gray-600 font-medium">API Integrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Applications",
      color: "from-purple-500 to-pink-500",
      phase: "Phase 1",
      features: [
        "Native iOS & Android apps",
        "RoRo & Container booking workflow",
        "IAAI & Copart auction integration",
        "Self-service payments with restrictions",
        "Document access (BoL, receipts, media)",
        "Multi-channel notifications"
      ]
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Admin Portal",
      color: "from-blue-500 to-teal-500",
      phase: "Phase 1",
      features: [
        "Operations dashboard",
        "Booking & dispatch management",
        "RoRo voyage scheduling",
        "3-layer vehicle accordion view",
        "Status chain monitoring",
        "Invoice & payment workflow"
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Customer Website",
      color: "from-teal-500 to-green-500",
      phase: "Phase 1",
      features: [
        "Homepage with live calculator",
        "Services & about pages",
        "Interactive quote system",
        "Signup/login flow",
        "SEO-optimized blog",
        "Contact & FAQ pages"
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Financial Management",
      color: "from-green-500 to-yellow-500",
      phase: "Phase 1",
      features: [
        "Account balance tracking",
        "Invoice search & filtering",
        "Payment proof workflow",
        "Basic financial reporting",
        "Auto-generated documents"
      ]
    },
    {
      icon: <Link className="w-12 h-12" />,
      title: "API Integrations",
      color: "from-yellow-500 to-orange-500",
      phase: "Phase 1",
      features: [
        "IAAI & Copart APIs",
        "VIN decoder services",
        "WhatsApp notifications",
        "SendGrid email service",
        "Payment processing"
      ]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Document System",
      color: "from-orange-500 to-red-500",
      phase: "Phase 1",
      features: [
        "Auto-generated dock receipts",
        "Bill of Lading management",
        "Media upload/distribution",
        "In-app document access",
        "Proof of payment handling"
      ]
    }
  ];

  const phase2Features = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Advanced Tracking",
      color: "from-red-500 to-pink-500",
      phase: "Phase 2",
      features: [
        "Real-time GPS tracking",
        "Carrier performance analytics",
        "Automated dispatch matching",
        "Route optimization",
        "Delivery predictions"
      ]
    },
    {
      icon: <Anchor className="w-12 h-12" />,
      title: "Yard Management",
      color: "from-pink-500 to-purple-500",
      phase: "Phase 2",
      features: [
        "Vehicle inventory tracking",
        "Repair workflow management",
        "Port-ready allocation",
        "Space optimization",
        "Damage documentation"
      ]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Analytics & Reporting",
      color: "from-indigo-500 to-blue-500",
      phase: "Phase 2",
      features: [
        "Predictive analytics",
        "Profitability metrics",
        "Customer behavior insights",
        "Operational efficiency reports",
        "Custom dashboards"
      ]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "AI-Powered Features",
      color: "from-cyan-500 to-teal-500",
      phase: "Phase 2",
      features: [
        "Smart quote recommendations",
        "Anomaly detection",
        "OCR data extraction",
        "Fraud prevention",
        "Support automation"
      ]
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Customer Portal",
      color: "from-emerald-500 to-green-500",
      phase: "Phase 2",
      features: [
        "Full web portal (PWA)",
        "Advanced self-service",
        "Real-time tracking",
        "Document management",
        "Communication center"
      ]
    },
    {
      icon: <CreditCard className="w-12 h-12" />,
      title: "Advanced Financials",
      color: "from-yellow-500 to-orange-500",
      phase: "Phase 2",
      features: [
        "Automated fund allocation",
        "Refund & credit workflows",
        "Advanced reporting",
        "Forecasting & budgeting",
        "Multi-currency support"
      ]
    }
  ];

  const allFeatures = [...features, ...phase2Features];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Core Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive functionality delivered across two phases for maximum value
          </p>
        </div>

        {/* Phase 1 Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-2 text-gray-800">Phase 1 - MVP Features</h3>
          <p className="text-center text-gray-600 mb-8">Essential functionality to launch your platform</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.phase}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 Features */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-2 text-gray-800">Phase 2 - Advanced Features</h3>
          <p className="text-center text-gray-600 mb-8">Enhanced capabilities for enterprise-grade operations</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phase2Features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-2 border-dashed border-gray-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {feature.phase}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                
                <ul className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineSection = () => {
  const timelineItems = [
    {
      title: "Planning & Architecture",
      duration: "1-2 weeks",
      description: "Technical architecture, database schema design, UI/UX wireframes, and development environment setup.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Admin Portal Development",
      duration: "3-4 weeks",
      description: "Dashboard creation, booking workflows, voyage scheduling, vehicle management, and invoice systems.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Mobile Applications",
      duration: "3-4 weeks",
      description: "Native iOS & Android development with booking workflows, payments, notifications, and document center.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
      title: "Website Development",
      duration: "2 weeks",
      description: "Marketing website with calculator, services pages, SEO setup, and signup/login flows.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Integration & Testing",
      duration: "1-2 weeks",
      description: "API integrations, comprehensive QA testing, data migration from legacy system.",
      icon: <Link className="w-6 h-6" />
    },
    {
      title: "Deployment & Launch",
      duration: "1 week",
      description: "App store submissions, production deployment, go-live support, and final handover.",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setVisibleItems(prev => new Set([...prev, index]));
        }
      });
    }, { threshold: 0.5 });

    const timelineElements = document.querySelectorAll('.timeline-item');
    timelineElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Development Timeline
          </h2>
          <p className="text-xl text-gray-600">
            Structured approach delivering your platform in 10-12 weeks
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-blue-600"></div>

          {timelineItems.map((item, index) => (
            <div 
              key={index}
              data-index={index}
              className={`timeline-item relative flex items-start mb-12 transition-all duration-700 ${
                visibleItems.has(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="text-purple-600 font-semibold">{item.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuoteCalculator = () => {
  const [quote, setQuote] = useState({
    shippingMethod: 'roro',
    originPort: 'los_angeles',
    destinationPort: 'lagos',
    vehicleType: 'sedan'
  });
  const [calculatedPrice, setCalculatedPrice] = useState(1200);

  const calculateQuote = () => {
    let basePrice = quote.shippingMethod === 'roro' ? 1200 : 1800;
    
    const portMultipliers: Record<string, number> = {
      'los_angeles': 1.1,
      'savannah': 1.0,
      'houston': 1.05,
      'newark': 1.15
    };

    const vehicleMultipliers: Record<string, number> = {
      'sedan': 1.0,
      'suv': 1.2,
      'truck': 1.3,
      'luxury': 1.5
    };

    const totalPrice = Math.round(
      basePrice * 
      portMultipliers[quote.originPort] * 
      vehicleMultipliers[quote.vehicleType]
    );
    
    setCalculatedPrice(totalPrice);
  };

  useEffect(() => {
    calculateQuote();
  }, [quote]);

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Interactive Demo
          </h2>
          <p className="text-xl text-gray-600">
            Try our quote calculator to see instant pricing
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center mb-8">
            <Calculator className="w-8 h-8 text-purple-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">AutoShip Quote Calculator</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Shipping Method
              </label>
              <select 
                value={quote.shippingMethod}
                onChange={(e) => setQuote(prev => ({ ...prev, shippingMethod: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="roro">RoRo (Roll-on/Roll-off)</option>
                <option value="container">Container</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Type
              </label>
              <select 
                value={quote.vehicleType}
                onChange={(e) => setQuote(prev => ({ ...prev, vehicleType: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Pickup Truck</option>
                <option value="luxury">Luxury Vehicle</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Origin Port
              </label>
              <select 
                value={quote.originPort}
                onChange={(e) => setQuote(prev => ({ ...prev, originPort: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="los_angeles">Los Angeles, CA</option>
                <option value="savannah">Savannah, GA</option>
                <option value="houston">Houston, TX</option>
                <option value="newark">Newark, NJ</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Destination Port
              </label>
              <select 
                value={quote.destinationPort}
                onChange={(e) => setQuote(prev => ({ ...prev, destinationPort: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              >
                <option value="lagos">Lagos, Nigeria</option>
                <option value="tema">Tema, Ghana</option>
                <option value="abidjan">Abidjan, Ivory Coast</option>
                <option value="durban">Durban, South Africa</option>
              </select>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold mb-2">
              ${calculatedPrice.toLocaleString()}
            </div>
            <div className="text-purple-100">
              Estimated Shipping Cost
            </div>
            <p className="text-sm text-purple-100 mt-2">
              Final pricing may vary based on specific requirements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const InvestmentSection = () => {
  const [progressValues, setProgressValues] = useState({ mobile: 0, admin: 0, website: 0 });
  const [phase2ProgressValues, setPhase2ProgressValues] = useState({ advanced: 0, analytics: 0, ai: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          setProgressValues({ mobile: 40, admin: 33, website: 27 });
          setPhase2ProgressValues({ advanced: 35, analytics: 30, ai: 35 });
        }, 500);
      }
    });

    const investmentElement = document.getElementById('investment');
    if (investmentElement) observer.observe(investmentElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="investment" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Investment Breakdown
          </h2>
          <p className="text-xl text-gray-300">
            Transparent pricing for your complete platform
          </p>
        </div>

        <div id="investment" className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
          <h3 className="text-3xl font-bold text-center mb-8">Phase 1 (MVP) - Complete Solution</h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Smartphone className="w-8 h-8 text-purple-400 mr-3" />
                <div>
                  <h4 className="font-semibold">Mobile Applications</h4>
                  <p className="text-sm text-gray-300">iOS & Android Development</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-4">$12,000</div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-2000 ease-out"
                  style={{ width: `${progressValues.mobile}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Monitor className="w-8 h-8 text-blue-400 mr-3" />
                <div>
                  <h4 className="font-semibold">Admin Portal</h4>
                  <p className="text-sm text-gray-300">Web-based Management System</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-4">$10,000</div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-teal-500 h-full transition-all duration-2000 ease-out delay-300"
                  style={{ width: `${progressValues.admin}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-teal-400 mr-3" />
                <div>
                  <h4 className="font-semibold">Website & Integrations</h4>
                  <p className="text-sm text-gray-300">Customer Website & APIs</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-yellow-400 mb-4">$8,000</div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-teal-500 to-green-500 h-full transition-all duration-2000 ease-out delay-600"
                  style={{ width: `${progressValues.website}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              Total Investment: $28,000 - $30,000
            </div>
            <p className="text-xl text-gray-300">10-12 weeks delivery timeline</p>
          </div>
        </div>

        {/* Phase 2 Section */}
        <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm rounded-3xl p-8 border border-indigo-500/20 mb-12">
          <h3 className="text-3xl font-bold text-center mb-4">Phase 2 - Advanced Features</h3>
          <p className="text-center text-gray-300 mb-8">Enhanced automation, analytics, and AI-powered capabilities</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-orange-400 mr-3" />
                <div>
                  <h4 className="font-semibold">Advanced Features</h4>
                  <p className="text-sm text-gray-300">GPS Tracking & Yard Management</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-4">$15,000</div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-2000 ease-out delay-800"
                  style={{ width: `${phase2ProgressValues.advanced}%` }}
                ></div>
              </div>
              <ul className="text-sm text-gray-300 mt-4 space-y-1">
                <li>• Real-time GPS tracking</li>
                <li>• Yard management system</li>
                <li>• PWA customer portal</li>
                <li>• Advanced notifications</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-cyan-400 mr-3" />
                <div>
                  <h4 className="font-semibold">Analytics & Reporting</h4>
                  <p className="text-sm text-gray-300">Performance & Financial Analytics</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$12,000</div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-2000 ease-out delay-1000"
                  style={{ width: `${phase2ProgressValues.analytics}%` }}
                ></div>
              </div>
              <ul className="text-sm text-gray-300 mt-4 space-y-1">
                <li>• Carrier performance analytics</li>
                <li>• Advanced financial reports</li>
                <li>• Predictive analytics</li>
                <li>• Profitability metrics</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-emerald-400 mr-3" />
                <div>
                  <h4 className="font-semibold">AI & Automation</h4>
                  <p className="text-sm text-gray-300">Smart Recommendations & Detection</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-4">$15,000</div>
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-emerald-500 to-green-500 h-full transition-all duration-2000 ease-out delay-1200"
                  style={{ width: `${phase2ProgressValues.ai}%` }}
                ></div>
              </div>
              <ul className="text-sm text-gray-300 mt-4 space-y-1">
                <li>• AI-powered quote recommendations</li>
                <li>• Anomaly detection</li>
                <li>• Automatic dispatch matching</li>
                <li>• OCR & data extraction</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-4xl font-bold text-emerald-400 mb-2">
              Phase 2 Total: $40,000 - $42,000
            </div>
            <p className="text-xl text-gray-300">8-10 weeks additional development</p>
          </div>
        </div>

        {/* Combined Investment Summary */}
        <div className="bg-gradient-to-r from-yellow-900/50 to-orange-900/50 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20 mb-8">
          <h3 className="text-3xl font-bold text-center mb-6">Complete Platform Investment</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-semibold text-yellow-400 mb-2">Phase 1 (MVP)</div>
              <div className="text-4xl font-bold text-white mb-2">$28,000 - $30,000</div>
              <div className="text-gray-300">Core functionality & launch</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-orange-400 mb-2">Phase 2 (Advanced)</div>
              <div className="text-4xl font-bold text-white mb-2">$40,000 - $42,000</div>
              <div className="text-gray-300">AI, analytics & automation</div>
            </div>
          </div>
          
          <div className="text-center border-t border-white/20 pt-6">
            <div className="text-2xl font-semibold text-gray-300 mb-2">Total Investment</div>
            <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
              $68,000 - $72,000
            </div>
            <div className="text-xl text-gray-300">Complete enterprise-grade platform</div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h4>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start with Phase 1 MVP to launch your platform, then scale with Phase 2 advanced features. Let's discuss how AutoShip Platform can revolutionize your vehicle shipping operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105">
                <Mail className="w-5 h-5 mr-2" />
                Start Phase 1
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Try Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'demo', label: 'Demo' },
    { id: 'investment', label: 'Investment' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(scrolled);

      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
        offsetTop: document.getElementById(section.id)?.offsetTop || 0
      }));

      const currentSection = sectionElements.reduce((current, section) => {
        if (section.element && window.pageYOffset >= section.offsetTop - 100) {
          return section.id;
        }
        return current;
      }, 'hero');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Floating navigation */}
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/20 shadow-2xl">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`block w-3 h-3 rounded-full my-3 transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-purple-600 scale-150' 
                  : 'bg-gray-400 hover:bg-purple-400 hover:scale-125'
              }`}
              title={section.label}
            ></button>
          ))}
        </div>
      </nav>
    </>
  );
};

const App = () => {
  return (
    <div className="relative">
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .delay-300 { animation-delay: 0.3s; animation-fill-mode: both; }
        .delay-500 { animation-delay: 0.5s; animation-fill-mode: both; }
        .delay-700 { animation-delay: 0.7s; animation-fill-mode: both; }
        .delay-1000 { animation-delay: 1s; animation-fill-mode: both; }
        
        .duration-2000 { transition-duration: 2000ms; }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <FloatingNavigation />
      <Hero />
      <StatsSection />
      <FeaturesSection />
      <TimelineSection />
      <QuoteCalculator />
      <InvestmentSection />
    </div>
  );
};

export default App;