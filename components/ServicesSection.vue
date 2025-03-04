<template>
  <section class="relative py-24 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-grid-neutral-100/25 dark:bg-grid-neutral-900/25 bg-neutral-50 dark:bg-neutral-950" />
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-50 via-neutral-50/80 to-neutral-50/0 dark:from-neutral-950 dark:via-neutral-950/80 dark:to-neutral-950/0" />
    
    <div class="container relative mx-auto px-4 max-w-6xl">
      <!-- Section Header -->
      <div class="max-w-3xl mx-auto text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-950 to-neutral-500 dark:from-white dark:to-neutral-400">
          Our Services
        </h2>
        <p class="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          We build custom solutions that help your business scale efficiently and effectively.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- AI Workflows -->
        <div 
          class="group relative p-8 rounded-2xl bg-white dark:bg-black border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
          @mousemove="cardHover"
        >
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-neutral-100/50 to-neutral-50/50 dark:from-neutral-800/10 dark:to-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div class="relative">
            <div class="mb-6 inline-block p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800">
              <Icon name="lucide:cpu" class="h-8 w-8 text-neutral-900 dark:text-white" />
            </div>
            
            <h3 class="text-2xl font-bold mb-4">AI Workflows</h3>
            <p class="text-neutral-600 dark:text-neutral-400 mb-6">
              Automate repetitive tasks and streamline your processes with AI-powered workflows.
            </p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Process Automation
              </li>
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Smart Integrations
              </li>
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Custom AI Models
              </li>
            </ul>
            
            <!-- <Button variant="link" class="group/btn">
              Learn More
              <Icon name="lucide:arrow-right" class="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button> -->
          </div>
        </div>
        
        <!-- Frontend Development -->
        <div 
          class="group relative p-8 rounded-2xl bg-white dark:bg-black border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
          @mousemove="cardHover"
        >
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-neutral-100/50 to-neutral-50/50 dark:from-neutral-800/10 dark:to-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div class="relative">
            <div class="mb-6 inline-block p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800">
              <Icon name="lucide:layout" class="h-8 w-8 text-neutral-900 dark:text-white" />
            </div>
            
            <h3 class="text-2xl font-bold mb-4">Frontend Development</h3>
            <p class="text-neutral-600 dark:text-neutral-400 mb-6">
              Beautiful, responsive interfaces that your users will love. Built with modern frameworks and best practices.
            </p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Responsive Design
              </li>
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Modern Frameworks
              </li>
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Performance Optimized
              </li>
            </ul>
            
            <!-- <Button variant="link" class="group/btn">
              Learn More
              <Icon name="lucide:arrow-right" class="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button> -->
          </div>
        </div>


        <!-- Data Analytics -->
        <div 
          class="group relative p-8 rounded-2xl bg-white dark:bg-black border border-neutral-200/50 dark:border-neutral-800/50 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
          @mousemove="cardHover"
        >
          <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-neutral-100/50 to-neutral-50/50 dark:from-neutral-800/10 dark:to-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div class="relative">
            <div class="mb-6 inline-block p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800">
              <Icon name="lucide:bar-chart" class="h-8 w-8 text-neutral-900 dark:text-white" />
            </div>
            
            <h3 class="text-2xl font-bold mb-4">Data Analytics</h3>
            <p class="text-neutral-600 dark:text-neutral-400 mb-6">
              Turn your data into actionable insights with powerful analytics and visualization tools.
            </p>
            
            <ul class="space-y-3 mb-8">
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Real-time Dashboards
              </li>
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Custom Reports
              </li>
              <li class="flex items-center text-sm text-neutral-600 dark:text-neutral-400">
                <Icon name="lucide:check" class="h-5 w-5 mr-2 text-emerald-500" />
                Predictive Analytics
              </li>
            </ul>
            
            <!-- <Button variant="link" class="group/btn">
              Learn More
              <Icon name="lucide:arrow-right" class="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Button> -->
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center">
        <Button size="lg" variant="default" class="group rounded-full">
          Schedule a Consultation
          <Icon name="lucide:arrow-right" class="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Card hover effect
const cardHover = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}
</script>

<style scoped>
.bg-grid-neutral-100\/25 {
  background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.bg-grid-neutral-900\/25 {
  background-image: linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 24px 24px;
}

.card-hover {
  position: relative;
  overflow: hidden;
}

.card-hover::before {
  content: '';
  position: absolute;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.card-hover:hover::before {
  opacity: 1;
  left: var(--mouse-x);
  top: var(--mouse-y);
}
</style> 