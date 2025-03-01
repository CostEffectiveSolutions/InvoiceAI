<template>
    <Button>
        <NuxtLink to="/">
            Home
        </NuxtLink>
    </Button>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <!-- Background Pattern -->
      <div class="absolute inset-0 w-full h-full dark:opacity-50">
        <div class="absolute inset-0 bg-grid-white/10 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      </div>
      
      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div v-for="i in 3" :key="i" 
             class="absolute w-[40rem] h-[40rem] bg-primary/5 rounded-full mix-blend-multiply animate-blob"
             :style="{
               animation: `blob ${6 + i}s infinite`,
               left: `${-20 + i * 30}%`,
               top: `${-50 + i * 20}%`
             }" />
      </div>

      <div class="container relative px-4 md:px-6">
        <div class="flex flex-col items-center space-y-8 text-center">
          <div v-motion-slide-visible-once-bottom class="relative">
            <span class="absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Бъдещето на Бизнес Автоматизацията
            </span>
            <h1 class="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Empower Studio
            </h1>
          </div>
          <p v-motion-slide-visible-once-bottom class="mx-auto max-w-[700px] text-zinc-500 md:text-2xl dark:text-zinc-400 font-medium">
            Автоматизирайте. Оптимизирайте. Спестете.
          </p>
          <p v-motion-slide-visible-once-bottom class="mx-auto max-w-[800px] text-3xl font-bold text-primary md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Превърнете Вашия Бизнес в Машина за Печалба с AI и Автоматизация
          </p>
          <p v-motion-slide-visible-once-bottom class="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
            Ние създаваме AI-базирани и персонализирани софтуерни решения, които оптимизират операциите, намаляват разходите и увеличават ефективността—за да можете да се фокусирате върху това, което наистина има значение: растежа.
          </p>
          <div v-motion-slide-visible-once-bottom class="flex gap-4">
            <Button size="lg" class="mt-6 text-lg px-8 h-12 bg-gradient-to-r from-primary to-primary-foreground hover:opacity-90 transition-all duration-300">
              Започнете Безплатна Консултация
              <ArrowRight class="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" class="mt-6 text-lg px-8 h-12 border-primary/20 hover:bg-primary/5">
              Научете Повече
              <ChevronRight class="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-24 bg-background relative overflow-hidden">
      <div class="container px-4 md:px-6">
        <div v-motion-slide-visible-once-bottom class="text-center space-y-4 mb-16">
          <h2 class="text-4xl font-bold">
            Защо да Изберете Empower Studio?
          </h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Трансформирайте вашия бизнес с нашите иновативни решения
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div v-for="(card, index) in cards" :key="index"
               v-motion-slide-visible-once-bottom
               :style="{ '--motion-delay': `${index * 100}ms` }">
            <Card class="group relative overflow-hidden border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <CardHeader>
                <CardTitle class="flex items-center text-xl">
                  <component :is="card.icon" class="w-6 h-6 mr-3 text-primary" />
                  {{ card.title }}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p class="text-zinc-500 dark:text-zinc-400">
                  {{ card.content }}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Do It Section -->
    <section class="py-24 bg-gradient-to-br from-primary/5 via-background to-background relative">
      <div class="container px-4 md:px-6">
        <div v-motion-slide-visible-once-bottom class="text-center space-y-4 mb-16">
          <h2 class="text-4xl font-bold">
            Как го Правим
          </h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Нашият процес е проектиран за максимална ефективност
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <div v-for="(step, index) in steps" :key="index"
               v-motion-slide-visible-once-bottom
               :style="{ '--motion-delay': `${index * 100}ms` }"
               class="relative group">
            <div class="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <component :is="step.icon" class="w-16 h-16 mb-6 text-primary" />
              <h3 class="text-2xl font-semibold mb-4">{{ step.title }}</h3>
              <p class="text-zinc-500 dark:text-zinc-400">
                {{ step.content }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-primary relative overflow-hidden">
      <div class="absolute inset-0 bg-grid-white/[0.05] bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      <div class="container relative px-4 md:px-6">
        <div v-motion-slide-visible-once-bottom class="flex flex-col items-center text-center space-y-6 text-primary-foreground">
          <h2 class="text-4xl md:text-5xl font-bold">Готови ли сте да Автоматизирате и Спестите?</h2>
          <p class="max-w-[800px] text-xl text-primary-foreground/90">
            Получете Вашата Безплатна AI и Автоматизационна Стратегическа Консултация Днес!
          </p>
          <div class="flex gap-4 mt-8">
            <Button variant="secondary" size="lg" class="text-lg px-8 h-12 bg-white text-primary hover:bg-white/90">
              Запазете Безплатна Консултация
              <ArrowRight class="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" class="text-lg px-8 h-12 border-white text-white hover:bg-white/10">
              Вижте Демо
              <Play class="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-background">
      <div class="container px-4 md:px-6">
        <div v-motion-slide-visible-once-bottom class="text-center space-y-4 mb-16">
          <h2 class="text-4xl font-bold">
            Какво Казват Нашите Клиенти
          </h2>
          <p class="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реални резултати от реални клиенти
          </p>
        </div>
        <div class="grid gap-8 md:grid-cols-3">
          <div v-for="(testimonial, index) in testimonials" :key="index"
               v-motion-slide-visible-once-bottom
               :style="{ '--motion-delay': `${index * 100}ms` }">
            <Card class="group h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
              <CardContent class="p-8">
                <div class="mb-4 flex items-center">
                  <Star class="w-5 h-5 text-yellow-400" v-for="i in 5" :key="i" />
                </div>
                <blockquote class="space-y-4">
                  <p class="text-lg text-zinc-500 dark:text-zinc-400">
                    {{ testimonial.content }}
                  </p>
                  <footer class="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage :src="testimonial.avatar" />
                      <AvatarFallback>{{ testimonial.initials }}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div class="font-semibold">{{ testimonial.name }}</div>
                      <div class="text-sm text-zinc-500">{{ testimonial.role }}</div>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 bg-gradient-to-br from-primary/5 via-background to-background relative">
      <div class="container px-4 md:px-6">
        <div v-motion-slide-visible-once-bottom class="flex flex-col items-center text-center space-y-8">
          <h2 class="text-4xl font-bold">Свържете се с Нас</h2>
          <p class="text-xl text-muted-foreground max-w-2xl">
            Готови сме да отговорим на всички ваши въпроси
          </p>
          <div class="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Button variant="outline" size="lg" class="min-w-[200px] h-12 border-primary/20 hover:bg-primary/5">
              <Phone class="mr-2 h-5 w-5" />
              +359 888 123 456
            </Button>
            <Button variant="outline" size="lg" class="min-w-[200px] h-12 border-primary/20 hover:bg-primary/5">
              <Mail class="mr-2 h-5 w-5" />
              contact@empowerstudio.bg
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating Contact Button -->
    <Button class="fixed bottom-8 right-8 rounded-full w-16 h-16 shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 transition-all duration-300">
      <MessageSquare class="h-6 w-6" />
    </Button>
  </main>
</template>

<script setup>
const { 
  ArrowRight, Bot, Clock, Code2, Coins, Mail, Phone, 
  Rocket, Settings, TrendingUp, ChevronRight, Play,
  Star, MessageSquare 
} = await import('lucide-vue-next')

const cards = [
  {
    icon: Rocket,
    title: 'AI на Ваше Разположение',
    content: 'Създаваме интелигентна автоматизация, която поема вашето работно натоварване.'
  },
  {
    icon: Coins,
    title: 'Големи Спестявания',
    content: 'Намалете разходите чрез елиминиране на неефективността и ръчната работа.'
  },
  {
    icon: Clock,
    title: 'Ускорете Операциите',
    content: 'Изпълнявайте задачи за секунди, а не за часове.'
  },
  {
    icon: TrendingUp,
    title: 'Мащабируемост без Граници',
    content: 'Автоматизирайте процесите си и отключете огромни възможности за растеж.'
  }
]

const steps = [
  {
    icon: Bot,
    title: 'AI-Базирана Автоматизация',
    content: 'Автоматизирайте работни процеси, обслужване на клиенти и обработка на данни.'
  },
  {
    icon: Code2,
    title: 'Персонализирани Решения',
    content: 'Софтуер, създаден специално за нуждите на вашия бизнес.'
  },
  {
    icon: Settings,
    title: 'Оптимизация на Процеси',
    content: 'Идентифицираме и елиминираме неефективността за намаляване на разходите.'
  }
]

const testimonials = [
  {
    content: 'Empower Studio ни спести над 50 000 лева годишно чрез автоматизация на операциите. Най-добрата инвестиция!',
    name: 'Иван Петров',
    role: 'Изпълнителен Директор',
    avatar: '/avatars/georgi.png',
    initials: 'ИП'
  },
  {
    content: 'Увеличихме бизнеса си 3 пъти за една година—благодарение на AI системите, създадени от Empower Studio.',
    name: 'Мария Димитрова',
    role: 'Оперативен Директор',
    avatar: '/avatars/georgi.png',
    initials: 'МД'
  },
  {
    content: 'Не мога да си представя да управляваме компанията без инструментите за автоматизация, които създадоха.',
    name: 'Георги Иванов',
    role: 'Технически Директор',
    avatar: '/avatars/georgi.png',
    initials: 'ГИ'
  }
]
</script>

<style>
.bg-grid-pattern {
  background-size: 30px 30px;
  background-image: linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px);
}

@keyframes blob {
  0% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0, 0) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}
</style>