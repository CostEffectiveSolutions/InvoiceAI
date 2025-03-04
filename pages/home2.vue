<template>
  <!-- Combined Header and Hero Background -->
  <div class="bg-gradient-to-b from-blue-50 to-white relative">
    <!-- Dot pattern background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0" style="background-image: radial-gradient(#e5e7eb 1px, transparent 1px); background-size: 16px 16px;"></div>
    </div>

    <!-- Navigation -->
    <header class="bg-transparent py-6 relative z-10">
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-center">
          <img src="/logo.png" alt="Empower Studio" class="h-12 w-auto rounded-xl" />
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div class="container mx-auto px-4 py-20">
        <div class="relative z-10 text-center max-w-4xl mx-auto">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200 rounded-full px-6">
            <Icon name="lucide:zap" class="w-4 h-4 mr-1" /> ENTERPRISE AI SOLUTIONS
          </Badge>
          
          <h1 class="text-5xl md:text-6xl font-bold mb-6 text-navy-900">
            The Future of<br />
            Business Starts with<br />
            AI & Automation
            <Icon name="sparkles" class="inline-block w-8 h-8 text-blue-500 ml-2" />
          </h1>
          
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Save time, improve efficiency, and make smarter decisions<br />
            with AI solutions customized for your business
          </p>

          <div class="mb-20">
            <Button size="lg" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full" @click="scrollToSection('book-consultation')">
              Schedule Enterprise Consultation
            </Button>
          </div>

          <div class="text-center">
            <p class="text-sm text-gray-500 uppercase tracking-wider mb-8">TRUSTED BY INDUSTRY LEADERS</p>
            <div class="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <img src="/images/snowflake.svg" alt="Snowflake" class="h-6 rounded-lg" />
              <img src="/images/cactus.svg" alt="Cactus" class="h-6 rounded-lg" />
              <img src="/images/vision.svg" alt="Vision" class="h-6 rounded-lg" />
              <img src="/images/luminous.svg" alt="Luminous" class="h-6 rounded-lg" />
              <img src="/images/pronature.svg" alt="ProNature" class="h-6 rounded-lg" />
              <img src="/images/recharge.svg" alt="Recharge" class="h-6 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Why Empower Studio Section -->
  <section class="py-24 bg-gradient-to-b from-white to-blue-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200">
            <Icon name="lucide:rocket" class="w-4 h-4 mr-1" /> ACCELERATED DEVELOPMENT
          </Badge>
          <h2 class="text-4xl font-bold text-navy-900">
            Why Empower Studio?<br/>
            <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Unmatched Speed & Precision</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="glass-card p-8 flex flex-col">
            <div class="mb-6">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                <Icon name="lucide:timer" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-navy-900 mb-3">Accelerated Development</h3>
              <p class="text-gray-600">
                Our advanced AI-powered development process delivers enterprise solutions at unprecedented speeds, setting new standards in the industry.
              </p>
            </div>
            <div class="mt-auto">
              <div class="flex items-center text-sm text-blue-600">
                <Icon name="lucide:trending-up" class="w-4 h-4 mr-2" />
                <span>Traditional: Months | Us: Weeks</span>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 flex flex-col">
            <div class="mb-6">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                <Icon name="lucide:target" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-navy-900 mb-3">Enterprise Precision</h3>
              <p class="text-gray-600">
                AI-enhanced development ensures both speed and quality, delivering solutions that meet the highest enterprise standards.
              </p>
            </div>
            <div class="mt-auto">
              <div class="flex items-center text-sm text-blue-600">
                <Icon name="lucide:shield-check" class="w-4 h-4 mr-2" />
                <span>Enterprise-Grade Quality</span>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <h4 class="text-3xl font-bold mb-2">2x</h4>
              <p class="text-sm opacity-90">Development Velocity</p>
            </div>
            <div class="text-center">
              <h4 class="text-3xl font-bold mb-2">50%</h4>
              <p class="text-sm opacity-90">Resource Optimization</p>
            </div>
            <div class="text-center">
              <h4 class="text-3xl font-bold mb-2">24/7</h4>
              <p class="text-sm opacity-90">Enterprise Support</p>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-lg font-medium text-gray-600 mb-6">
            Ready to accelerate your digital transformation?
          </p>
          <Button size="lg" class="bg-black text-white hover:bg-gray-900" @click="scrollToSection('book-consultation')">
            Schedule Enterprise Consultation
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- What We Do Section -->
  <section class="py-24 bg-white" id="services">
    <div class="container mx-auto px-4">
      <div class="relative z-10 text-center max-w-4xl mx-auto">
        <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200">
          <Icon name="lucide:boxes" class="w-4 h-4 mr-1" /> ENTERPRISE SOLUTIONS
        </Badge>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
          Strategic AI Implementation<br/>
          <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">For Enterprise Excellence</span>
        </h2>
        
        <p class="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Transform your business operations with our enterprise-grade AI solutions,<br/>
          engineered for seamless integration and maximum efficiency
        </p>

        <div class="grid gap-8">
          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                  <Icon name="lucide:workflow" class="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div class="ml-6 text-left">
                <h3 class="text-2xl font-bold text-navy-900 mb-2">AI-Powered Workflow Automation</h3>
                <p class="text-gray-600">Transform business processes with intelligent automation systems.</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                  <Icon name="lucide:code-2" class="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div class="ml-6 text-left">
                <h3 class="text-2xl font-bold text-navy-900 mb-2">Custom Software Development</h3>
                <p class="text-gray-600">Enterprise-grade solutions engineered for your specific needs.</p>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                  <Icon name="lucide:git-merge" class="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <div class="ml-6 text-left">
                <h3 class="text-2xl font-bold text-navy-900 mb-2">System Integration</h3>
                <p class="text-gray-600">Seamless integration with your existing enterprise infrastructure.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-20">
          <div class="glass-card p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <div class="flex items-center justify-center mb-8">
              <Icon name="lucide:clock" class="w-8 h-8 mr-3" />
              <h3 class="text-2xl font-bold">Rapid Enterprise Deployment</h3>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center flex flex-col items-center">
                <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="lucide:clipboard-check" class="w-8 h-8" />
                </div>
                <h4 class="font-bold mb-2">Discovery Phase</h4>
                <p class="text-sm opacity-90">Strategic Analysis</p>
              </div>
              
              <div class="text-center flex flex-col items-center">
                <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="lucide:code-2" class="w-8 h-8" />
                </div>
                <h4 class="font-bold mb-2">Development</h4>
                <p class="text-sm opacity-90">Agile Implementation</p>
              </div>
              
              <div class="text-center flex flex-col items-center">
                <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="lucide:check-circle" class="w-8 h-8" />
                </div>
                <h4 class="font-bold mb-2">Deployment</h4>
                <p class="text-sm opacity-90">Enterprise Integration</p>
              </div>
            </div>
          </div>

          <div class="mt-12">
            <Button size="lg" class="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg rounded-full" @click="scrollToSection('book-consultation')">
              <Icon name="lucide:calendar" class="w-6 h-6 mr-2" />
              Schedule Enterprise Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- The Problem We Solve Section -->
  <section class="py-24 bg-gradient-to-b from-blue-50 to-white">
    <div class="container mx-auto px-4">
      <div class="relative z-10 text-center max-w-4xl mx-auto">
        <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200">
          <Icon name="lucide:lightbulb" class="w-4 h-4 mr-1" /> OPTIMIZATION OPPORTUNITIES
        </Badge>
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
          Transform Your Enterprise<br/>
          <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Maximize ROI with AI</span>
        </h2>
        
        <p class="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
          Legacy systems and manual processes are holding your business back.<br/>
          It's time to embrace the future of enterprise automation.
        </p>

        <div class="glass-card p-8 mb-12 hover:scale-[1.02] transition-transform duration-300">
          <div class="grid md:grid-cols-2 gap-12">
            <div class="text-left">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl mb-6 flex items-center justify-center">
                <Icon name="lucide:alert-circle" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-2xl font-bold text-navy-900 mb-6">Current Challenges</h3>
              <ul class="space-y-4">
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:x-circle" class="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span>Resource-intensive manual processes reducing productivity</span>
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:x-circle" class="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span>Inefficient data management and processing systems</span>
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:x-circle" class="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span>Limited scalability with current infrastructure</span>
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:x-circle" class="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                  <span>Operational bottlenecks affecting business growth</span>
                </li>
              </ul>
            </div>

            <div class="text-left">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl mb-6 flex items-center justify-center">
                <Icon name="lucide:sparkles" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-2xl font-bold text-navy-900 mb-6">Our Solution</h3>
              <ul class="space-y-4">
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span>AI-powered automation of repetitive tasks</span>
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span>Intelligent data processing and analytics</span>
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span>Cloud-native scalable architecture</span>
                </li>
                <li class="flex items-center text-gray-700">
                  <Icon name="lucide:check-circle" class="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span>Streamlined workflows and processes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Icon name="lucide:alert-circle" class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="text-3xl font-bold mb-2">50%</h4>
              <p class="text-sm opacity-90">Cost Reduction</p>
            </div>
            <div class="text-center flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Icon name="lucide:zap" class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="text-3xl font-bold mb-2">10x</h4>
              <p class="text-sm opacity-90">Faster Processing</p>
            </div>
            <div class="text-center flex flex-col items-center">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Icon name="lucide:clock" class="w-8 h-8 text-blue-600" />
              </div>
              <h4 class="text-3xl font-bold mb-2">24/7</h4>
              <p class="text-sm opacity-90">AI Support</p>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <Button size="lg" class="bg-black text-white hover:bg-gray-900 px-8 py-4 text-lg rounded-full" @click="scrollToSection('book-consultation')">
            <Icon name="lucide:calendar" class="w-6 h-6 mr-2" />
            Transform Your Enterprise Today
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- How It Works Section -->
  <section class="py-24 bg-white" id="how-it-works">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200">
            <Icon name="lucide:git-branch" class="w-4 h-4 mr-1" /> IMPLEMENTATION PROCESS
          </Badge>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Enterprise Implementation<br/>
            <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Streamlined for Success</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven methodology ensures rapid deployment while maintaining enterprise-grade quality standards
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                  <Icon name="lucide:search" class="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-navy-900 mb-3">Strategic Assessment</h3>
                <p class="text-gray-600">Comprehensive analysis of your enterprise requirements and existing infrastructure.</p>
                <div class="mt-4 flex items-center text-sm text-blue-600">
                  <Icon name="lucide:clock" class="w-4 h-4 mr-2" />
                  <span>Duration: 2-3 Days</span>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                  <Icon name="lucide:clipboard-list" class="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-navy-900 mb-3">Solution Architecture</h3>
                <p class="text-gray-600">Detailed technical planning and system design optimized for your needs.</p>
                <div class="mt-4 flex items-center text-sm text-blue-600">
                  <Icon name="lucide:clock" class="w-4 h-4 mr-2" />
                  <span>Duration: 2-3 Days</span>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100/50 rounded-xl flex items-center justify-center">
                  <Icon name="lucide:code-2" class="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-navy-900 mb-3">Development & Testing</h3>
                <p class="text-gray-600">Rapid development with continuous testing and quality assurance.</p>
                <div class="mt-4 flex items-center text-sm text-blue-600">
                  <Icon name="lucide:clock" class="w-4 h-4 mr-2" />
                  <span>Duration: 5-7 Days</span>
                </div>
              </div>
            </div>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 bg-blue-100/50 rounded-xl flex items-center justify-center">
                  <Icon name="lucide:rocket" class="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div class="ml-6">
                <h3 class="text-xl font-bold text-navy-900 mb-3">Deployment & Integration</h3>
                <p class="text-gray-600">Seamless implementation with comprehensive system optimization.</p>
                <div class="mt-4 flex items-center text-sm text-blue-600">
                  <Icon name="lucide:clock" class="w-4 h-4 mr-2" />
                  <span>Duration: 2-3 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="glass-card p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
          <div class="flex items-center justify-center mb-6">
            <Icon name="lucide:clock-3" class="w-8 h-8 mr-3" />
            <h3 class="text-2xl font-bold">Enterprise Implementation Timeline</h3>
          </div>
          <p class="text-lg mb-8 opacity-90">From initial assessment to full deployment in just 2 weeks</p>
          <Button size="lg" class="bg-white text-blue-600 hover:bg-blue-50" @click="scrollToSection('book-consultation')">
            <Icon name="lucide:calendar" class="w-5 h-5 mr-2" />
            Schedule Implementation Call
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Who Can Benefit Section -->
  <section class="py-24 bg-gradient-to-b from-white to-blue-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200">
            <Icon name="lucide:users" class="w-4 h-4 mr-1" /> INDUSTRY SOLUTIONS
          </Badge>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Enterprise Solutions<br/>
            <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Across All Industries</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored AI solutions designed for enterprise-scale implementation across diverse sectors
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-16">
          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="inline-block p-3 bg-blue-100/50 rounded-xl mb-6">
              <Icon name="lucide:shopping-cart" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-4">E-commerce & Retail</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Automated inventory management
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Order processing optimization
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Customer service automation
              </li>
            </ul>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="inline-block p-3 bg-blue-100/50 rounded-xl mb-6">
              <Icon name="lucide:landmark" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-4">Financial Services</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Risk assessment automation
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Transaction processing
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Compliance monitoring
              </li>
            </ul>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="inline-block p-3 bg-blue-100/50 rounded-xl mb-6">
              <Icon name="lucide:heart-pulse" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-4">Healthcare</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Patient data management
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Administrative automation
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                HIPAA compliance
              </li>
            </ul>
          </div>

          <div class="glass-card p-8 hover:scale-[1.02] transition-transform duration-300">
            <div class="inline-block p-3 bg-blue-100/50 rounded-xl mb-6">
              <Icon name="lucide:factory" class="w-8 h-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-bold text-navy-900 mb-4">Manufacturing</h3>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Production optimization
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Supply chain management
              </li>
              <li class="flex items-center text-gray-600">
                <Icon name="lucide:check" class="w-5 h-5 text-green-500 mr-3" />
                Quality control automation
              </li>
            </ul>
          </div>
        </div>

        <div class="glass-card p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
          <div class="text-center mb-8">
            <Icon name="lucide:zap" class="w-12 h-12 mx-auto mb-4" />
            <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Industry?</h3>
            <p class="text-lg opacity-90 mb-8">Get started with enterprise-grade AI solutions tailored for your sector</p>
            <Button size="lg" class="bg-white text-blue-600 hover:bg-blue-50" @click="scrollToSection('book-consultation')">
              <Icon name="lucide:calendar" class="w-5 h-5 mr-2" />
              Schedule Industry Consultation
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-24 bg-white" id="faq">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200">
            <Icon name="lucide:help-circle" class="w-4 h-4 mr-1" /> ENTERPRISE FAQ
          </Badge>
          <h2 class="text-4xl md:text-5xl font-bold mb-6 text-navy-900">
            Common Questions<br/>
            <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">About Enterprise AI</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to frequently asked questions about our enterprise AI solutions
          </p>
        </div>

        <div class="space-y-6 mb-16">
          <div class="glass-card">
            <Accordion type="single" collapsible class="divide-y divide-gray-100">
              <AccordionItem value="item-1" class="px-8 py-6">
                <AccordionTrigger class="hover:no-underline">
                  <div class="flex items-center text-left">
                    <div class="w-10 h-10 bg-blue-100/50 rounded-xl flex items-center justify-center mr-4">
                      <Icon name="lucide:git-merge" class="w-5 h-5 text-blue-600" />
                    </div>
                    <span class="text-lg font-semibold text-navy-900">Integration Process</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent class="pt-4 pl-14">
                  <p class="text-gray-600">Our solutions seamlessly integrate with your existing enterprise infrastructure through our proven integration framework. We handle all aspects of the integration process, from initial assessment to final deployment, ensuring minimal disruption to your operations.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" class="px-8 py-6">
                <AccordionTrigger class="hover:no-underline">
                  <div class="flex items-center text-left">
                    <div class="w-10 h-10 bg-blue-100/50 rounded-xl flex items-center justify-center mr-4">
                      <Icon name="lucide:clock" class="w-5 h-5 text-blue-600" />
                    </div>
                    <span class="text-lg font-semibold text-navy-900">Implementation Timeline</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent class="pt-4 pl-14">
                  <p class="text-gray-600">Enterprise implementation is typically completed within 2 weeks, following our streamlined methodology. This includes assessment, development, testing, and deployment phases, with clear milestones and deliverables at each stage.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" class="px-8 py-6">
                <AccordionTrigger class="hover:no-underline">
                  <div class="flex items-center text-left">
                    <div class="w-10 h-10 bg-blue-100/50 rounded-xl flex items-center justify-center mr-4">
                      <Icon name="lucide:trending-up" class="w-5 h-5 text-blue-600" />
                    </div>
                    <span class="text-lg font-semibold text-navy-900">ROI & Performance</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent class="pt-4 pl-14">
                  <p class="text-gray-600">Our enterprise clients typically see ROI within the first quarter through increased efficiency and reduced operational costs. We provide detailed analytics and reporting to track performance improvements and cost savings.</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" class="px-8 py-6">
                <AccordionTrigger class="hover:no-underline">
                  <div class="flex items-center text-left">
                    <div class="w-10 h-10 bg-blue-100/50 rounded-xl flex items-center justify-center mr-4">
                      <Icon name="lucide:shield" class="w-5 h-5 text-blue-600" />
                    </div>
                    <span class="text-lg font-semibold text-navy-900">Security & Compliance</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent class="pt-4 pl-14">
                  <p class="text-gray-600">We maintain the highest security standards with enterprise-grade protection measures. Our solutions are fully compliant with industry regulations including GDPR, HIPAA, and SOC 2, ensuring your data remains secure and protected.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div class="glass-card p-8 text-center">
          <div class="flex items-center justify-center mb-6">
            <Icon name="lucide:message-circle" class="w-8 h-8 text-blue-600 mr-3" />
            <h3 class="text-2xl font-bold text-navy-900">Still Have Questions?</h3>
          </div>
          <p class="text-lg text-gray-600 mb-8">Our enterprise solutions team is here to help</p>
          <Button size="lg" class="bg-gradient-to-r from-blue-600 to-blue-400 text-white" @click="scrollToSection('book-consultation')">
            <Icon name="lucide:calendar" class="w-5 h-5 mr-2" />
            Schedule Consultation
          </Button>
        </div>
      </div>
    </div>
  </section>

  <!-- Final CTA Section -->
  <section class="py-24 bg-gradient-to-b from-blue-50 to-white" id="book-consultation">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto text-center">
        <div class="mb-12">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200">
            <Icon name="lucide:rocket" class="w-4 h-4 mr-1" /> GET STARTED
          </Badge>
          <h2 class="text-4xl font-bold text-navy-900">
            Transform Your Enterprise<br/>
            <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">With Intelligent Automation</span>
          </h2>
        </div>
        
        <p class="text-xl mb-12 flex items-center justify-center">
          <Icon name="lucide:trending-up" class="w-6 h-6 text-blue-600 mr-2" />
          Accelerate growth with enterprise-grade AI solutions
        </p>

        <div class="glass-card">
          <iframe
            src="https://calendly.com/gkkirilov/30?embed_domain=microsass&embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=2563eb"
            width="100%"
            height="700"
            frameborder="0"
            title="Schedule Enterprise Consultation - Empower Studio"
            data-ready="true"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- Floating Bottom Navigation -->
  <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 hover:-translate-y-1">
    <div class="bg-white/80 backdrop-blur-lg shadow-lg rounded-full py-3 px-4 flex items-center space-x-2">
      <div class="flex items-center">
        <NuxtLink to="#" class="hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Empower Studio" class="h-6 w-auto mr-2" />
        </NuxtLink>
      </div>

      <div class="h-4 w-px bg-gray-300 mx-2"></div>

      <nav class="flex items-center space-x-6">
        <button @click="scrollToSection('services')" class="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors">SERVICES</button>
        <button @click="scrollToSection('how-it-works')" class="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors">HOW WE WORK</button>
        <button @click="scrollToSection('faq')" class="text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors">FAQ</button>
      </nav>

      <div class="h-4 w-px bg-gray-300 mx-2"></div>

      <Button variant="default" class="bg-black text-white hover:bg-gray-900 text-xs px-4 py-2 transition-all duration-300 hover:scale-105" @click="scrollToSection('book-consultation')">
        <Icon name="lucide:calendar" class="w-4 h-4 mr-1" />
        Let's talk
      </Button>
    </div>
  </div>
</template>

<script setup>
// Initialize smooth scroll
</script>

<style>
/* Move scroll-behavior from html to body for better compatibility */
body {
  scroll-behavior: smooth;
  overflow-y: scroll; /* Ensure scrollbar is always present to prevent layout shifts */
}

.text-navy-900 {
  color: #0A2540;
}

.glass-card {
  @apply bg-white/50 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-3xl;
}

Badge {
  @apply rounded-full;
}

Button {
  @apply rounded-full;
}

.bg-blue-100\/50 {
  @apply rounded-2xl;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

.animate-float {
  animation: float 3s infinite ease-in-out;
}

/* Add responsive styles */
@screen sm {
  .container {
    @apply px-6;
  }
}

@screen md {
  .container {
    @apply px-8;
  }
}

@screen lg {
  .container {
    @apply px-0;
  }
}

/* Hide floating navigation when footer is in view */
@media (max-height: 800px) {
  .floating-nav {
    display: none;
  }
}

/* Floating navbar animations */
.floating-nav {
  transition: all 0.3s ease-in-out;
}

.floating-nav:hover {
  transform: translateY(-4px);
}

@keyframes slideIn {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.fixed.bottom-8 {
  animation: slideIn 0.5s ease-out;
}
</style>