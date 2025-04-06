<template>
  <header class="w-full z-50">
    <div class="bg-white backdrop-blur-md shadow-sm transition-all duration-300 border-b border-white/10">
      <div class="container mx-auto flex h-20 items-center justify-between px-4">
        <!-- Logo -->
        <NuxtLink to="/" class="relative flex items-center space-x-2">
          <div class="flex items-center">
            <div class="bg-blue-100 p-2 rounded-full">
              <Icon name="lucide:zap" class="h-6 w-6 text-blue-600" />
            </div>
            <span class="text-xl font-bold text-blue-600 ml-2">znAI</span>
          </div>
          <span class="text-lg font-semibold text-navy-900">AI Starter Kit</span>
        </NuxtLink>

        <!-- Desktop navigation with Menubar -->
        <div class="hidden md:block">
          <Menubar class="border-none shadow-none bg-transparent">
            <MenubarMenu v-for="(item, index) in navigationItems" :key="index">
              <MenubarTrigger 
                class="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 cursor-pointer" 
                @click="(e) => handleClick(e, item.href)"
              >
                {{ item.name }}
              </MenubarTrigger>
            </MenubarMenu>
            
            <!-- Login/Profile in Menubar -->
            <MenubarMenu>
              <template v-if="!user">
                <MenubarTrigger>
                  <NuxtLink to="/login" class="flex items-center">
                    <Icon name="lucide:log-in" class="w-4 h-4 mr-2" />
                    <span>Login</span>
                  </NuxtLink>
                </MenubarTrigger>
              </template>
              <template v-else>
                <MenubarTrigger class="relative flex items-center space-x-2" @click="toggleProfileMenu">
                  <div class="bg-blue-100 p-1 rounded-full">
                    <Icon v-if="!user.avatar_url" name="lucide:user" class="w-5 h-5 text-blue-600" />
                    <img v-else :src="user.avatar_url" class="w-6 h-6 rounded-full" alt="Profile" />
                  </div>
                  <span class="text-sm font-medium">{{ user.username || user.email || 'Profile' }}</span>
                  <Icon :name="isProfileMenuOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'" class="w-4 h-4" />
                </MenubarTrigger>
                <MenubarContent v-if="isProfileMenuOpen">
                  <NuxtLink to="/profile" class="block w-full">
                    <MenubarItem>
                      <div class="flex items-center">
                        <Icon name="lucide:user" class="w-4 h-4 mr-2" />
                        <span>Profile</span>
                      </div>
                    </MenubarItem>
                  </NuxtLink>
                  <MenubarSeparator />
                  <MenubarItem class="text-red-600 hover:text-red-700 hover:bg-red-50/30 focus:text-red-700 focus:bg-red-50/30" @click="logout">
                    <div class="flex items-center">
                      <Icon name="lucide:log-out" class="w-4 h-4 mr-2" />
                      <span>Logout</span>
                    </div>
                  </MenubarItem>
                </MenubarContent>
              </template>
            </MenubarMenu>
            
            <!-- Get Started Button -->
            <MenubarMenu v-if="!user">
              <MenubarTrigger>
                <NuxtLink to="#contact" @click="(e) => handleClick(e, '#contact')">
                  <Button class="bg-blue-600/90 backdrop-blur-sm text-white hover:bg-blue-700 transition-all border border-blue-500/20 shadow-sm rounded-full">
                    <Icon name="lucide:sparkles" class="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </NuxtLink>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>

        <!-- Mobile menu button - Opens Sheet -->
        <Button 
          variant="ghost" 
          size="icon"
          class="md:hidden text-gray-700 hover:text-blue-600 hover:bg-white/20 rounded-full"
          @click="isOpen = true"
        >
          <Icon name="lucide:menu" class="h-5 w-5" />
        </Button>
      </div>
    </div>

    <!-- Mobile menu using Sheet -->
    <Sheet :open="isOpen" @update:open="isOpen = $event">
      <SheetContent side="right" class="bg-white/90 backdrop-blur-lg border-l border-white/50">
        <SheetHeader>
          <SheetTitle class="text-xl text-blue-600 flex items-center">
            <div class="bg-blue-100 p-1 rounded-full mr-2">
              <Icon name="lucide:zap" class="h-5 w-5 text-blue-600" />
            </div>
            znAI
          </SheetTitle>
          <SheetDescription>
            AI Starter Kit Navigation
          </SheetDescription>
        </SheetHeader>
        
        <div class="mt-6 space-y-1">
          <NuxtLink
            v-for="(item, index) in navigationItems"
            :key="index"
            :to="item.href"
            class="flex items-center px-3 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/20 rounded-lg transition-all"
            @click="(e) => { handleClick(e, item.href); isOpen = false; }"
          >
            {{ item.name }}
          </NuxtLink>
          
          <Separator class="my-4" />
          
          <!-- User is not logged in - show login buttons -->
          <div v-if="!user" class="space-y-3 mt-4">
            <NuxtLink 
              to="/login"
              class="flex items-center w-full text-gray-700 hover:text-blue-600 hover:bg-white/20 px-3 py-3 text-sm font-medium rounded-lg transition-all"
              @click="isOpen = false"
            >
              <Icon name="lucide:log-in" class="w-4 h-4 mr-2" />
              Login
            </NuxtLink>
            <NuxtLink 
              to="#contact"
              class="flex items-center w-full justify-center bg-blue-600/90 text-white hover:bg-blue-700 px-3 py-3 text-sm font-medium rounded-lg text-center border border-blue-500/20 shadow-sm transition-all"
              @click="(e) => { handleClick(e, '#contact'); isOpen = false; }"
            >
              <Icon name="lucide:sparkles" class="w-4 h-4 mr-2" />
              Get Started
            </NuxtLink>
          </div>
          
          <!-- User is logged in - show profile options -->
          <div v-else class="space-y-3 mt-4">
            <NuxtLink 
              to="/profile"
              class="flex items-center text-gray-700 hover:text-blue-600 hover:bg-white/20 px-3 py-3 text-sm font-medium rounded-lg transition-all"
              @click="isOpen = false"
            >
              <Icon name="lucide:user" class="w-4 h-4 mr-2" />
              Profile
            </NuxtLink>
            <button 
              @click="() => { logout(); isOpen = false; }"
              class="flex items-center w-full text-left text-red-600 hover:text-red-700 hover:bg-red-50/30 px-3 py-3 text-sm font-medium rounded-lg transition-all"
            >
              <Icon name="lucide:log-out" class="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </header>
</template>

<script setup>
const isOpen = ref(false)
const isProfileMenuOpen = ref(false)
const { scrollTo } = useScrollTo()
const user = useState('user')
const supabase = useSupabaseClient()
const router = useRouter()

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}

const handleClick = (e, hash) => {
  if (hash.startsWith('#')) {
    e.preventDefault()
    scrollTo(hash)
  }
}

const navigationItems = [
  { name: 'Features', href: '#features' },
  { name: 'UI Components', href: '#ui-components' },
  { name: 'Visual Effects', href: '#stunning-effects' },
  { name: 'Get Started', href: '#getting-started' },
]

// Logout function
const logout = async () => {
  try {
    await supabase.auth.signOut()
    // Reset the user state
    user.value = null
    // Redirect to home page
    router.push('/')
    // Close menus
    isProfileMenuOpen.value = false
  } catch (error) {
    console.error('Error logging out:', error)
    if (toast) {
      toast.error('Error logging out')
    }
  }
}
</script>