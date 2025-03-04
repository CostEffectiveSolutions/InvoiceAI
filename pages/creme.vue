<template>
  <VueLenis root>
    <main class="min-h-screen bg-[#f8f9fa] text-gray-800">
      <!-- Hero Section -->
      <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/40"/>
          <div class="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/30 rounded-full blur-3xl animate-blob"/>
          <div class="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"/>
        </div>

        <div class="container relative mx-auto px-4 py-20">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Build your software 10X faster
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We help service businesses build a scalable internal system to save them 200+ hours a month.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl soft-shadow transition-all duration-300 hover:scale-105">
                Schedule A Call
              </Button>
              <Button size="lg" variant="outline" class="border-gray-300 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl soft-shadow-sm transition-all duration-300 hover:scale-105">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Trusted by top-tier service businesses</h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <Card class="soft-shadow rounded-2xl p-8 text-center hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle class="text-4xl font-bold text-blue-600 mb-2">38%</CardTitle>
                <p class="text-lg font-semibold text-gray-700">Team Efficiency Gains</p>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">Time saved from doing repetitive tasks</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 text-center hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle class="text-4xl font-bold text-blue-600 mb-2">23%</CardTitle>
                <p class="text-lg font-semibold text-gray-700">Team Capacity Improvements</p>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">Ability to handle more revenue, with same team size</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 text-center hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle class="text-4xl font-bold text-blue-600 mb-2">19%</CardTitle>
                <p class="text-lg font-semibold text-gray-700">Cost Savings</p>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">Savings from team efficiency & other software costs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Problem Section -->
      <section class="py-20 bg-gray-50 relative overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-blob"/>
          <div class="absolute bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"/>
        </div>

        <div class="container relative mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Your business is scaling, but your systems aren't.</h2>
            <p class="text-xl text-gray-600">As you grow, bottlenecks appear. Teams feel stretched, clients feel neglected, and opportunities are lost.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:users" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Limited by people to scale</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">Your team is overwhelmed, and clients are slipping through the cracks. Adding more people isn't always a sustainable fix.</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:eye-off" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Lack of visibility within your team</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">Projects stall, deadlines are missed, and you're always in the dark about where things stand.</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:repeat" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Repetitive manual tasks slowing you down</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">Routine admin work is eating up hours that should be spent serving your clients and growing the business.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Solution Section -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Your own internal tool. Built uniquely for your business.</h2>
            <p class="text-xl text-gray-600">Your business is unique—your tools should be too. We create solutions that scale with you.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:layout" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Interface</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">The front-end your team interacts with daily. A seamless, intuitive experience designed for clarity and ease of use.</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:workflow" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">AI Workflows</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">The engine automating processes behind the scenes. AI-powered workflows that optimize tasks and eliminate inefficiencies.</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:database" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">The foundation that powers everything. Centralized, real-time data that informs decisions and drives insights.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-20 bg-gray-50 relative overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">How we work</h2>
            <p class="text-xl text-gray-600">An inside look into our framework to drive consistent results</p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:search" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">We audit key areas for improvements including scheduling conflicts, delayed payments, lost documents, and more.</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:code" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Build</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">We like to start small, scale fast. Launch a solution that adapts as your business evolves.</p>
              </CardContent>
            </Card>

            <Card class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardHeader>
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon name="lucide:activity" class="w-6 h-6 text-blue-600"/>
                </div>
                <CardTitle class="text-xl font-semibold mb-4">Track</CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-gray-600">Deploy your custom tool and track measurable improvements in your team's performance & business outcomes.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section class="py-20 bg-white relative overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold mb-4">Trusted by world-class companies.</h2>
            <p class="text-xl text-gray-600">Some words from our lovely customers.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card v-for="(testimonial, index) in testimonials" :key="index"
                  class="soft-shadow rounded-2xl p-8 hover:soft-shadow-lg transition-all duration-300">
              <CardContent>
                <p class="text-gray-600 mb-6">{{ testimonial.content }}</p>
                <div class="flex items-center">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span class="text-blue-600 font-semibold">{{ testimonial.name[0] }}</span>
                  </div>
                  <div>
                    <p class="font-semibold">{{ testimonial.name }}</p>
                    <p class="text-gray-500 text-sm">{{ testimonial.role }}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-gray-50 relative overflow-hidden">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to transform your business?</h2>
            <p class="text-xl text-gray-600 mb-8">Schedule a call with our team to discuss your needs and see how we can help.</p>
            <Button size="lg" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl soft-shadow transition-all duration-300 hover:scale-105">
              Schedule A Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  </VueLenis>
</template>

<script setup>
// Add custom styles for neumorphic effect
const style = `
.soft-shadow {
  box-shadow: 
    6px 6px 12px rgba(174, 174, 174, 0.2),
    -6px -6px 12px rgba(255, 255, 255, 0.7);
}
.soft-shadow-sm {
  box-shadow: 
    3px 3px 6px rgba(174, 174, 174, 0.15),
    -3px -3px 6px rgba(255, 255, 255, 0.65);
}
.soft-shadow-lg {
  box-shadow: 
    10px 10px 20px rgba(174, 174, 174, 0.3),
    -10px -10px 20px rgba(255, 255, 255, 0.8);
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
`

// Add the style to the document head
useHead({
  title: 'Creme Digital - Build Software 10X Faster',
  meta: [
    { 
      name: 'description', 
      content: 'We help service businesses build scalable internal systems to save them 200+ hours a month.' 
    }
  ],
  style: [{ children: style }]
})

// Testimonials data
const testimonials = [
  {
    name: "Eva Chan",
    role: "CEO & Founder @launchpop",
    content: "We wanted to find a partner to help us build an internal app to help us optimize our workflow. Our proprietary signal testing method generates a lot of data and requires a full team to build reports and insights. We now no longer need a team in place to do that, our strategists are enabled now to produce their own reports in minutes using our app generator."
  },
  {
    name: "Marie Bigham",
    role: "CEO & Co-Founder @aei",
    content: "I have just adored working with you all. From the first meeting, [there were] really clear cut directions and you guys pushed us when we were working too slow."
  },
  {
    name: "David Kreiger",
    role: "CEO & Co-Founder @onder",
    content: "Creme and Bubble were great in our very early launch phase. Low-code helped us launch and get started."
  }
]
</script> 