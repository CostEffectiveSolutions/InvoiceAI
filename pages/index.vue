<template>
  <main class="min-h-screen bg-white relative">
    <!-- Light Bar -->
    <div class="absolute inset-0 w-full overflow-hidden pointer-events-none -translate-y-5">
      <!-- <LightBar /> -->
    </div>

    <!-- Navigation -->
    <div class="fixed top-3 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock
        :items="[
          { title: 'Статистика', icon: 'lucide:chart-bar', href: '#stats' },
          { title: 'Проблеми', icon: 'lucide:alert-circle', href: '#problems' },
          { title: 'Решения', icon: 'lucide:lightbulb', href: '#solutions' },
          { title: 'Примери', icon: 'lucide:folder', href: '#case-studies' },
          { title: 'Процес', icon: 'lucide:git-branch', href: '#process' },
          { title: 'Заявете Разговор', icon: 'lucide:phone-call', href: '#consultation' }
        ]"
        desktop-class-name="w-full"
        mobile-class-name="fixed bottom-4 right-4"
      />
    </div>

    <!-- Hero and Video Combined Section -->
    <section class="relative z-10 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 w-full h-full">
        <DotPattern :width="18" :height="18" :cy="1.5" :cr="1.5" class="opacity-[0.2] fill-zinc-400" />
        <div class="absolute inset-0 h-[100%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.95)_40%,rgba(255,255,255,0)_80%)]"></div>
      </div>

      <!-- Hero Content -->
      <div class="pt-44 pb-20">
        <div class="container mx-auto px-4 relative">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="bg-gradient-to-br from-zinc-600 via-zinc-800 to-zinc-400 bg-clip-text text-center text-5xl md:text-7xl font-medium mb-6 leading-tight tracking-tight text-transparent">
              Автоматизирайте бизнес процесите си с AI
            </h1>
            <p class="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed max-w-2xl mx-auto">
              Помагаме на бизнесите да спестят време и да намалят разходите чрез автоматизиране на повтарящи се задачи с персонализирани AI решения.
            </p>
            <GlowButton 
              color="#silver" 
              class="hover:scale-105 transition-transform duration-300"
              @click.prevent="scrollToSection('consultation')"
            >
              <a href="#consultation" class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="lucide:calendar" class="h-3 w-3" />
                </div>
                <span class="text-sm font-medium">Запазете Безплатна Консултация</span>
              </a>
            </GlowButton>
          </div>
        </div>
      </div>

      <ParticlesEffectSlim id="particles" />
      <!-- Trusted By Section -->
      <div class="py-12">
        <div class="container mx-auto px-4">
          <div class="max-w-6xl mx-auto">
            <Marquee :pause-on-hover="true" class="py-4">
              <img src="/images/logos/mercedes-benz-9-logo-svgrepo-com.svg" alt="Mercedes Benz" class="h-10 mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="/images/logos/google-icon-logo-svgrepo-com.svg" alt="Google" class="h-10 mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="/images/logos/apple-black-logo-svgrepo-com.svg" alt="Apple" class="h-10 mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="/images/logos/linkedin-icon-logo-svgrepo-com.svg" alt="LinkedIn" class="h-10 mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="/images/logos/youtube-icon-logo-svgrepo-com.svg" alt="YouTube" class="h-10 mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="/images/logos/gmail-icon-logo-svgrepo-com.svg" alt="Gmail" class="h-10 mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
              <img src="/images/logos/tiktok-icon-white-1-logo-svgrepo-com.svg" alt="TikTok" class="h-10 mx-12 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
            </Marquee>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section id="stats" ref="statsRef" class="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-8 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-black dark:via-neutral-900/50 dark:to-neutral-900 rounded-xl shadow-lg card-hover" @mousemove="cardHover">
              <div class="flex items-start justify-between mb-4">
                <Icon name="lucide:clock" class="h-8 w-8 text-neutral-600" />
                <h3 class="text-4xl font-bold">38%</h3>
              </div>
              <h4 class="font-medium mb-2 text-lg">Спестено време от повтарящи се задачи</h4>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm">Автоматизирайте рутинните работни процеси и освободете времето на екипа си за работа с висока стойност</p>
            </div>
            <div class="p-8 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-black dark:via-neutral-900/50 dark:to-neutral-900 rounded-xl shadow-lg card-hover" @mousemove="cardHover">
              <div class="flex items-start justify-between mb-4">
                <Icon name="lucide:trending-up" class="h-8 w-8 text-neutral-600" />
                <h3 class="text-4xl font-bold">23%</h3>
              </div>
              <h4 class="font-medium mb-2 text-lg">Подобрения в капацитета на екипа</h4>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm">Управлявайте повече приходи със същия размер екип чрез интелигентна автоматизация</p>
            </div>
            <div class="p-8 bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-black dark:via-neutral-900/50 dark:to-neutral-900 rounded-xl shadow-lg card-hover" @mousemove="cardHover">
              <div class="flex items-start justify-between mb-4">
                <Icon name="lucide:piggy-bank" class="h-8 w-8 text-neutral-600" />
                <h3 class="text-4xl font-bold">19%</h3>
              </div>
              <h4 class="font-medium mb-2 text-lg">Спестени разходи</h4>
              <p class="text-neutral-600 dark:text-neutral-400 text-sm">Намалете разходите чрез екипна ефективност и консолидирани разходи за софтуер</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section id="problems" ref="problemRef" class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-8 text-center">Вашият бизнес расте, но системите ви изостават.</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="p-6 rounded-xl border border-neutral-200 dark:border-white/10 card-hover" @mousemove="cardHover">
              <Icon name="lucide:users" class="h-8 w-8 mb-4" />
              <h3 class="text-xl font-bold mb-2">Ограничения от хора за растеж</h3>
              <p class="text-neutral-600 dark:text-neutral-400">Вашият екип е претоварен и клиентите се изплъзват между пръстите ви.</p>
            </div>
            <div class="p-6 rounded-xl border border-neutral-200 dark:border-white/10 card-hover" @mousemove="cardHover">
              <Icon name="lucide:eye-off" class="h-8 w-8 mb-4" />
              <h3 class="text-xl font-bold mb-2">Липса на видимост</h3>
              <p class="text-neutral-600 dark:text-neutral-400">Проектите спират, крайните срокове се пропускат и винаги сте на тъмно.</p>
            </div>
            <div class="p-6 rounded-xl border border-neutral-200 dark:border-white/10 card-hover" @mousemove="cardHover">
              <Icon name="lucide:repeat" class="h-8 w-8 mb-4" />
              <h3 class="text-xl font-bold mb-2">Повтарящи се ръчни задачи</h3>
              <p class="text-neutral-600 dark:text-neutral-400">Рутинната административна работа отнема часове, които трябва да бъдат прекарани в обслужване на клиенти.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Solution Section -->
    <section id="solutions">
      <ServicesSection />
    </section>

    <!-- Case Studies Section -->
    <section id="case-studies" ref="caseStudiesRef" class="py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-12 text-center">Резултати на клиенти</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-black p-6 rounded-xl shadow-lg card-hover" @mousemove="cardHover">
              <h3 class="text-2xl font-bold mb-2">Humi</h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4">HR платформа, която управлява заплати и бонуси.</p>
              <div class="text-3xl font-bold text-primary-500 mb-4">50%</div>
              <p class="font-medium">По-малко разходи за SR&ED претенцAI</p>
              <NuxtLink to="/case-studies/humi">
                <Button variant="link" class="mt-4">
                  <span class="flex items-center gap-1.5">
                    Прочетете казуса
                    <Icon name="lucide:arrow-right" class="h-4 w-4" />
                  </span>
                </Button>
              </NuxtLink>
            </div>
            
            <div class="bg-white dark:bg-black p-6 rounded-xl shadow-lg card-hover" @mousemove="cardHover">
              <h3 class="text-2xl font-bold mb-2">Голяма стрийминг услуга</h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4">Инструмент за ID на кампанAI за UTM генериране и проследяване.</p>
              <div class="text-3xl font-bold text-primary-500 mb-4">100%</div>
              <p class="font-medium">Премахнати грешки от отчетите</p>
              <NuxtLink to="/case-studies/streaming-service">
                <Button variant="link" class="mt-4">
                  <span class="flex items-center gap-1.5">
                    Прочетете казуса
                    <Icon name="lucide:arrow-right" class="h-4 w-4" />
                  </span>
                </Button>
              </NuxtLink>
            </div>
            
            <div class="bg-white dark:bg-black p-6 rounded-xl shadow-lg card-hover" @mousemove="cardHover">
              <h3 class="text-2xl font-bold mb-2">Launch Pop</h3>
              <p class="text-neutral-600 dark:text-neutral-400 mb-4">Агенция за тестване на сигнали за различни марки и продукти.</p>
              <div class="text-3xl font-bold text-primary-500 mb-4">267%</div>
              <p class="font-medium">Повишаване на продуктивността за проектни мениджъри</p>
              <NuxtLink to="/case-studies/launch-pop">
                <Button variant="link" class="mt-4">
                  <span class="flex items-center gap-1.5">
                    Прочетете казуса
                    <Icon name="lucide:arrow-right" class="h-4 w-4" />
                  </span>
                </Button>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section id="process" ref="processRef" class="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-12 text-center">Как работим</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="relative">
              <div class="p-6 bg-white dark:bg-black rounded-xl shadow-lg card-hover" @mousemove="cardHover">
                <div class="text-3xl font-bold mb-4">01</div>
                <h3 class="text-xl font-bold mb-2">Одит</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Одит на ключовите области за подобрения</p>
              </div>
            </div>
            
            <div class="relative">
              <div class="p-6 bg-white dark:bg-black rounded-xl shadow-lg card-hover" @mousemove="cardHover">
                <div class="text-3xl font-bold mb-4">02</div>
                <h3 class="text-xl font-bold mb-2">Изграждане</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Изграждане на първоначален продукт за започване на измерване</p>
              </div>
            </div>
            
            <div class="relative">
              <div class="p-6 bg-white dark:bg-black rounded-xl shadow-lg card-hover" @mousemove="cardHover">
                <div class="text-3xl font-bold mb-4">03</div>
                <h3 class="text-xl font-bold mb-2">Проследяване</h3>
                <p class="text-neutral-600 dark:text-neutral-400">Внедряване и проследяване на нашето решение във вашия екип</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section id="consultation" class="py-24">
      <div class="container mx-auto px-5 md:px-10">
        <div class="max-w-4xl mx-auto mb-16">
          <Badge variant="secondary" class="mb-4">ЗАПОЧНЕТЕ</Badge>
          <h2 class="text-4xl md:text-5xl font-bold text-black mb-4 text-center">
            Трансформирайте бизнеса си с интелигентна автоматизация
          </h2>
          <p class="text-xl text-center text-neutral-700">
            Растете по-бързо с AI решения от корпоративен клас, които ви спестяват време и пари.
          </p>
        </div>
        
        <div class="max-w-5xl mx-auto">
          <div class="bg-white rounded-3xl overflow-hidden">
            <ClientOnly>
              <iframe
                src="https://calendly.com/gkkirilov/30?embed_domain=microsass&embed_type=Inline&hide_gdpr_banner=1&background_color=ffffff&text_color=000000&primary_color=2563eb"
                width="100%"
                height="700"
                frameborder="0"
                title="Изберете дата и час - Empower Studio"
                data-ready="true"
              ></iframe>
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useLenis } from 'lenis/vue'

// Navigation menu state
const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Mobile menu items with animation
const menuItems = [
  { label: 'Нашата работа', href: '/work' },
  { label: 'Цени', href: '/pricing' },
  { label: 'За нас', href: '/about' },
  { label: 'Блог', href: '/blog' },
  { label: 'Свържете се с нас', href: '/contact' },
]

// Get Lenis instance
const lenis = useLenis()

// Intersection observer for animations
const targetRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

useIntersectionObserver(targetRef, ([{ isIntersecting }]) => {
  isVisible.value = isIntersecting
  if (isIntersecting) {
    targetRef.value?.classList.add('animate-in')
  }
})

// Hover effects for cards
const cardHover = (event: MouseEvent) => {
  const card = event.currentTarget as HTMLElement
  const rect = card.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

// Scroll to section smoothly
const scrollToSection = (id: string) => {
  if (lenis.value) {
    lenis.value.scrollTo(`#${id}`, {
      offset: -100,
      duration: 1.2,
    })
  } else {
    // Fallback to standard scrollIntoView if lenis is not available
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
}

// Add intersection observer to elements
onMounted(() => {
  // Initialize scrolling functionality
  if (!lenis.value) {
    // If lenis isn't ready when component mounts, we can initialize it here if needed
    // or at least ensure the scrollToSection function will work with native scrolling
  }
  
  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    useIntersectionObserver(el as HTMLElement, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        (el as HTMLElement).classList.add('animate-in')
      }
    })
  })
})
</script>

<style>
/* Base styles */
:root {
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-sans);
  letter-spacing: -0.02em;
}

/* Animations */
.animate-in {
  animation: fadeIn 0.6s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button hover effects */
.button-hover {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.button-hover:hover {
  transform: translateY(-1px);
  opacity: 0.9;
}

/* Card hover effects */
.card-hover {
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-hover:hover {
  transform: translateY(-2px);
}

.card-hover::before {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
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

/* Link hover effects */
.link-hover {
  position: relative;
  transition: color 0.2s ease;
}

.link-hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.link-hover:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.dark ::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
}

/* Selection */
::selection {
  background: rgba(0, 0, 0, 0.1);
  color: inherit;
}

.dark ::selection {
  background: rgba(255, 255, 255, 0.1);
}
</style>