<template>
  
  <div class="scroll-indicator"></div>

  
  <div class="bg-gradient-to-b from-blue-50 to-white relative">
    
    <div class="absolute inset-0">
      <DotPattern />
    </div>

    
    
    <div class="container mx-auto px-4 py-20">
      <div class="relative z-10 text-center max-w-4xl mx-auto">
        <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200 rounded-full px-4 py-2">
          <Icon name="lucide:zap" class="w-4 h-4 mr-1" /> Nuxt 3 + Supabase + Shadcn
        </Badge>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 text-navy-900">
          Modern AI Development<br />
          <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Starter Kit</span>
        </h1>
        
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Jump-start your AI applications with this powerful starter kit featuring Nuxt 3, Supabase, 
          Shadcn UI components, and stunning visual effects.
        </p>

        <div class="mb-12">
          <GlowButton size="lg" class="mr-4 rounded-full" @click="showWelcomeToast">
            <Icon name="lucide:download" class="w-5 h-5 mr-2" />
            Get Started
          </GlowButton>
          <Button size="lg" variant="outline" class="bg-white/50 backdrop-blur-sm rounded-full border border-white/30" @click="showDocToast">
            <Icon name="lucide:book-open" class="w-5 h-5 mr-2" />
            Documentation
          </Button>
        </div>

        <div class="text-center">
          <p class="text-sm text-gray-500 uppercase tracking-wider mb-4">Powered By</p>
          <div class="flex flex-wrap justify-center items-center gap-8">
            <div class="flex items-center justify-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm opacity-70 hover:opacity-100 transition-all duration-300">
              <Icon name="logos:nuxt-icon" class="w-5 h-5 mr-2" />
              <span class="font-medium text-gray-800">Nuxt</span>
            </div>
            <div class="flex items-center justify-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm opacity-70 hover:opacity-100 transition-all duration-300">
              <Icon name="logos:vue" class="w-5 h-5 mr-2" />
              <span class="font-medium text-gray-800">Vue</span>
            </div>
            <div class="flex items-center justify-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm opacity-70 hover:opacity-100 transition-all duration-300">
              <Icon name="logos:supabase-icon" class="w-5 h-5 mr-2" />
              <span class="font-medium text-gray-800">Supabase</span>
            </div>
            <div class="flex items-center justify-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm opacity-70 hover:opacity-100 transition-all duration-300">
              <Icon name="simple-icons:shadcnui" class="w-5 h-5 mr-2" />
              <span class="font-medium text-gray-800">Shadcn</span>
            </div>
            <div class="flex items-center justify-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm opacity-70 hover:opacity-100 transition-all duration-300">
              <Icon name="logos:tailwindcss-icon" class="w-5 h-5 mr-2" />
              <span class="font-medium text-gray-800">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200 rounded-full px-4 py-2">
            <Icon name="lucide:rocket" class="w-4 h-4 mr-1" /> FEATURES
          </Badge>
          <h2 class="text-4xl font-bold text-navy-900">
            Everything You Need<br/>
            <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">For Modern AI Development</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 flex flex-col">
            <div class="mb-6">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                <Icon name="lucide:database" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-navy-900 mt-4 mb-3">Supabase Integration</h3>
              <p class="text-gray-600">
                Built-in authentication, database, and storage capabilities with Supabase, ready to use out of the box.
              </p>
            </div>
          </div>

          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 flex flex-col">
            <div class="mb-6">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                <Icon name="lucide:layout" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-navy-900 mt-4 mb-3">Shadcn UI Components</h3>
              <p class="text-gray-600">
                Beautiful, accessible UI components built with Radix UI and styled with Tailwind CSS.
              </p>
            </div>
          </div>

          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 flex flex-col">
            <div class="mb-6">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                <Icon name="lucide:sparkles" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-navy-900 mt-4 mb-3">Stunning Visual Effects</h3>
              <p class="text-gray-600">
                Impressive visual components like particle effects, tyndall effects, and animated backgrounds.
              </p>
            </div>
          </div>

          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 flex flex-col">
            <div class="mb-6">
              <div class="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center">
                <Icon name="lucide:code" class="w-8 h-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-bold text-navy-900 mt-4 mb-3">Modern Development Stack</h3>
              <p class="text-gray-600">
                Nuxt 3, Vue 3 Composition API, TypeScript, and Tailwind CSS for a powerful developer experience.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-3xl">
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <h4 class="text-3xl font-bold mb-2">50+</h4>
              <p class="text-sm opacity-90">UI Components</p>
            </div>
            <div class="text-center">
              <h4 class="text-3xl font-bold mb-2">10+</h4>
              <p class="text-sm opacity-90">Stunning Effects</p>
            </div>
            <div class="text-center">
              <h4 class="text-3xl font-bold mb-2">100%</h4>
              <p class="text-sm opacity-90">Open Source</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <section id="ui-components" class="py-24 bg-gradient-to-b from-white to-blue-50">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200 rounded-full px-4 py-2">
            <Icon name="lucide:layout" class="w-4 h-4 mr-1" /> UI COMPONENTS
          </Badge>
          <h2 class="text-4xl font-bold text-navy-900">
            Beautiful <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">UI Components</span>
          </h2>
          <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Over 50 accessible and customizable UI components built with Radix Vue and Tailwind CSS
          </p>
        </div>

        
        <div class="space-y-16">
          
          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl">
            <h3 class="text-xl font-bold text-navy-900 mb-4">Buttons</h3>
            <div class="flex flex-wrap gap-4">
              <Button class="rounded-full">Default</Button>
              <Button variant="secondary" class="rounded-full">Secondary</Button>
              <Button variant="destructive" class="rounded-full">Destructive</Button>
              <Button variant="outline" class="rounded-full">Outline</Button>
              <Button variant="ghost" class="rounded-full">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          
          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl">
            <h3 class="text-xl font-bold text-navy-900 mb-6">Form Controls</h3>
            <div class="grid sm:grid-cols-2 gap-8">
              <div class="space-y-4">
                <div>
                  <Label for="email">Email</Label>
                  <Input id="email" placeholder="example@email.com" class="rounded-full" />
                </div>
                <div>
                  <Label for="option">Select an option</Label>
                  <Select class="rounded-full">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </div>
              </div>
              <div class="space-y-6">
                <div class="space-y-2">
                  <Label>Checkbox example</Label>
                  <div class="flex items-center space-x-2">
                    <Checkbox id="terms" class="rounded-md" />
                    <label for="terms" class="text-sm text-gray-600">Accept terms and conditions</label>
                  </div>
                </div>
                <div class="space-y-2">
                  <Label>Switch example</Label>
                  <div class="flex items-center space-x-2">
                    <Switch id="notifications" />
                    <label for="notifications" class="text-sm text-gray-600">Enable notifications</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl">
            <h3 class="text-xl font-bold text-navy-900 mb-6">Dialog Component</h3>
            <div class="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button class="rounded-full">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent class="rounded-3xl bg-white/90 backdrop-blur-md border border-white/30">
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div class="py-4">
                    <div class="space-y-4">
                      <div class="space-y-2">
                        <Label for="name">Name</Label>
                        <Input id="name" placeholder="Your name" class="rounded-full" />
                      </div>
                      <div class="space-y-2">
                        <Label for="username">Username</Label>
                        <Input id="username" placeholder="@username" class="rounded-full" />
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" class="rounded-full">Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          
          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl">
            <h3 class="text-xl font-bold text-navy-900 mb-6">Accordion</h3>
            <Accordion type="single" collapsible class="w-full">
              <AccordionItem value="item-1" class="border-b border-blue-100/50">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" class="border-b border-blue-100/50">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other components.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" class="border-b border-blue-100/50">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          
          <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl">
            <h3 class="text-xl font-bold text-navy-900 mb-6">Tabs</h3>
            <Tabs default-value="account" class="w-full">
              <TabsList class="grid w-full grid-cols-3 rounded-full p-1 bg-blue-100/30">
                <TabsTrigger value="account" class="rounded-full">Account</TabsTrigger>
                <TabsTrigger value="password" class="rounded-full">Password</TabsTrigger>
                <TabsTrigger value="settings" class="rounded-full">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" class="p-4 mt-4 rounded-3xl bg-white/50 backdrop-blur-sm">
                <h4 class="text-lg font-medium mb-2">Account Settings</h4>
                <p class="text-gray-600">Manage your account settings and preferences.</p>
              </TabsContent>
              <TabsContent value="password" class="p-4 mt-4 rounded-3xl bg-white/50 backdrop-blur-sm">
                <h4 class="text-lg font-medium mb-2">Password</h4>
                <p class="text-gray-600">Change your password and security settings.</p>
              </TabsContent>
              <TabsContent value="settings" class="p-4 mt-4 rounded-3xl bg-white/50 backdrop-blur-sm">
                <h4 class="text-lg font-medium mb-2">Settings</h4>
                <p class="text-gray-600">Manage app settings and preferences.</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div class="mt-12 text-center">
          <Button size="lg" variant="outline" class="bg-white bg-opacity-80 backdrop-blur-sm rounded-full" @click="showComponentsToast">
            <Icon name="lucide:plus" class="w-5 h-5 mr-2" />
            View All Components
          </Button>
        </div>
      </div>
    </div>
  </section>

  
  <section id="stunning-effects" class="py-24 bg-gradient-to-b from-blue-50 to-white">
    <div class="container mx-auto px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200 rounded-full px-4 py-2">
            <Icon name="lucide:sparkles" class="w-4 h-4 mr-1" /> STUNNING EFFECTS
          </Badge>
          <h2 class="text-4xl font-bold text-navy-900">
            Impressive <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Visual Effects</span>
          </h2>
          <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Make your application stand out with these stunning visual components
          </p>
        </div>

        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl mb-12">
          <h3 class="text-xl font-bold text-navy-900 mb-6">Tyndall Effect</h3>
          <div class="relative aspect-video bg-gradient-to-br from-blue-900 to-indigo-800 rounded-2xl overflow-hidden">
            <TyndallEffect streakColor="rgb(255, 255, 255)" />
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-2xl font-bold text-white">Beautiful Light Rays</span>
            </div>
          </div>
          <p class="mt-4 text-gray-600">Volumetric light effect that creates stunning atmosphere on your landing pages</p>
        </div>

        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl mb-12">
          <h3 class="text-xl font-bold text-navy-900 mb-6">Glow Button</h3>
          <div class="flex justify-center py-8 bg-gray-900 rounded-2xl">
            <GlowButton size="lg" class="rounded-full">
              <Icon name="lucide:sparkles" class="mr-2 h-5 w-5" />
              Animated Glow Effect
            </GlowButton>
          </div>
          <p class="mt-4 text-gray-600">Eye-catching animated buttons that stand out on your page</p>
        </div>

        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl mb-12">
          <h3 class="text-xl font-bold text-navy-900 mb-6">Marquee</h3>
          <div class="py-6 bg-gray-100 rounded-2xl">
            <Marquee class="py-4">
              <div class="flex space-x-12">
                <div v-for="i in 6" :key="i" class="flex items-center px-8">
                  <Icon name="lucide:star" class="h-6 w-6 text-blue-600 mr-2" />
                  <span class="text-lg font-medium">Smooth Scrolling Text</span>
                </div>
              </div>
            </Marquee>
          </div>
          <p class="mt-4 text-gray-600">Smooth scrolling text perfect for showcasing partners, testimonials, or features</p>
        </div>

        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl mb-12">
          <h3 class="text-xl font-bold text-navy-900 mb-6">Dot Pattern</h3>
          <div class="relative h-48 bg-blue-50 rounded-2xl overflow-hidden">
            <DotPattern />
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-xl font-medium text-blue-800">Subtle Background Pattern</span>
            </div>
          </div>
          <p class="mt-4 text-gray-600">Subtle dot patterns to add texture and depth to your backgrounds</p>
        </div>

        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 rounded-3xl mb-12">
          <h3 class="text-xl font-bold text-navy-900 mb-6">Light Bar</h3>
          <div class="relative h-64 bg-gray-900 rounded-2xl overflow-hidden">
            <LightBar />
            <div class="absolute inset-0 flex items-center justify-center text-center">
              <span class="text-xl font-medium text-white px-8">Dynamic animated light bars create movement and energy</span>
            </div>
          </div>
          <p class="mt-4 text-gray-600">Add motion and energy to your sections with animated light effects</p>
        </div>
      </div>
    </div>
  </section>

  
  <section id="getting-started" class="py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <Badge variant="secondary" class="mb-6 animate-float bg-blue-100/50 text-blue-700 border-blue-200 rounded-full px-4 py-2">
            <Icon name="lucide:code" class="w-4 h-4 mr-1" /> GETTING STARTED
          </Badge>
          <h2 class="text-4xl font-bold text-navy-900">
            Quick <span class="bg-gradient-to-r from-blue-600 to-blue-400 text-transparent bg-clip-text">Setup</span>
          </h2>
          <p class="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Get up and running in minutes with these simple steps
          </p>
        </div>
        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 mb-8 rounded-3xl">
          <h3 class="text-xl font-bold text-navy-900 mb-6">1. Clone the repository</h3>
          <div class="bg-gray-900/90 text-gray-200 p-4 rounded-xl overflow-x-auto">
            <code>git clone https://github.com/yourusername/ai-starter.git</code>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 mb-8 rounded-3xl">
          <h3 class="text-xl font-bold text-navy-900 mb-6">2. Install dependencies</h3>
          <div class="bg-gray-900/90 text-gray-200 p-4 rounded-xl overflow-x-auto">
            <code>cd ai-starter<br />npm install</code>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 mb-8 rounded-3xl">
          <h3 class="text-xl font-bold text-navy-900 mb-6">3. Set up Supabase</h3>
          <p class="text-gray-600 mb-4">Create a new Supabase project and update the credentials in your .env file:</p>
          <div class="bg-gray-900/90 text-gray-200 p-4 rounded-xl overflow-x-auto">
            <code>
              SUPABASE_URL=your-supabase-url<br />
              SUPABASE_KEY=your-supabase-key<br />
              SUPABASE_SERVICE_KEY=your-supabase-service-key
            </code>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 mb-8 rounded-3xl">
          <h3 class="text-xl font-bold text-navy-900 mb-6">4. Run the development server</h3>
          <div class="bg-gray-900/90 text-gray-200 p-4 rounded-xl overflow-x-auto">
            <code>npm run dev</code>
          </div>
        </div>
        
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.07)] p-8 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center rounded-3xl border border-white/20">
          <Icon name="lucide:rocket" class="w-12 h-12 mx-auto mb-4" />
          <h3 class="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
          <p class="text-lg opacity-90 mb-8">
            This starter kit provides everything you need to build modern AI-powered applications
          </p>
          <div class="flex items-center justify-center space-x-4">
            <GlowButton size="lg" class="bg-white text-blue-600 hover:bg-blue-50 rounded-full" @click="showGithubToast">
              <Icon name="lucide:github" class="w-5 h-5 mr-2" />
              GitHub Repository
            </GlowButton>
            <Button size="lg" variant="outline" class="bg-blue-700 text-white hover:bg-blue-800 border-white/20 rounded-full" @click="showPromiseToast">
              <Icon name="lucide:book-open" class="w-5 h-5 mr-2" />
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
// import DotPattern from '~/components/stunning/DotPattern.vue'
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Toast notification examples
function showWelcomeToast() {
  toast.success('Welcome!', {
    description: 'Thanks for checking out our AI Starter Kit',
    duration: 3000
  })
}

function showDocToast() {
  toast('Documentation', {
    description: 'Comprehensive guides and API references',
    action: {
      label: 'Open',
      onClick: () => toast('Opening documentation...')
    }
  })
}

function showComponentsToast() {
  toast({
    title: 'UI Components',
    description: '50+ accessible and customizable UI components',
    icon: '📚'
  })
}

function showGithubToast() {
  toast({
    title: 'GitHub Repository',
    description: 'View source code and contribute to the project',
    icon: '🚀'
  })
}

function showPromiseToast() {
  toast.promise(
    new Promise((resolve) => {
      setTimeout(() => resolve({ name: 'docs.pdf' }), 2000)
    }),
    {
      loading: 'Downloading documentation...',
      success: (data) => `Downloaded ${data.name} successfully!`,
      error: 'Download failed. Please try again.'
    }
  )
}

// UI components list based on the ui folder
const uiComponents = [
  'Accordion', 'Alert', 'Alert Dialog', 'Aspect Ratio', 'Avatar', 'Badge',
  'Breadcrumb', 'Button', 'Calendar', 'Carousel', 'Checkbox', 'Collapsible',
  'Combobox', 'Command', 'Context Menu', 'Dialog', 'Drawer', 'Dropdown Menu',
  'Hover Card', 'Input', 'Label', 'Menubar', 'Navigation Menu', 'Number Field',
  'Pagination', 'Pin Input', 'Popover', 'Progress', 'Radio Group', 'Range Calendar',
  'Resizable', 'Scroll Area', 'Select', 'Separator', 'Sheet', 'Sidebar',
  'Skeleton', 'Slider', 'Sonner', 'Stepper', 'Switch', 'Table',
  'Tabs', 'Tags Input', 'Textarea', 'Toggle', 'Toggle Group', 'Tooltip'
];

// Stunning effects components list based on the stunning folder
const stunningEffects = [
  'BusinessProblemsCarousel', 'FloatingDock', 'ServicesSection', 'GlowButton',
  'Marquee', 'TyndallEffect', 'ParticlesEffect', 'DotPattern',
  'LightBar', 'BackgroundAnimation', 'BackgroundScene'
];
</script>

<style scoped>
.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.scroll-indicator {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(to right, #3b82f6, #60a5fa);
  z-index: 100;
  width: var(--scroll-width, 0%);
}
</style>
