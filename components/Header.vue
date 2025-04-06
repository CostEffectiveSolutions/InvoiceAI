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
            <span class="text-xl font-bold text-blue-600 ml-2">JoroAI</span>
          </div>
          <span class="text-lg font-semibold text-navy-900">AI Starter Kit</span>
        </NuxtLink>

        <!-- Desktop navigation - simplified -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- Navigation links -->
          <NuxtLink 
            v-for="(item, index) in navigationItems" 
            :key="index"
            :to="item.href"
            class="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            @click="(e) => handleClick(e, item.href)"
          >
            {{ item.name }}
          </NuxtLink>
          
          <!-- Login link -->
          <NuxtLink 
            v-if="!user" 
            to="/login" 
            class="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            <div class="flex items-center">
              <Icon name="lucide:log-in" class="w-4 h-4 mr-2" />
              <span>Login</span>
            </div>
          </NuxtLink>
          
          <!-- Profile dropdown when logged in -->
          <div v-else class="relative">
            <ClientOnly>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    <div class="bg-blue-100 p-1 rounded-full mr-2">
                      <Icon v-if="!user.avatar_url" name="lucide:user" class="w-5 h-5 text-blue-600" />
                      <img v-else :src="user.avatar_url" class="w-6 h-6 rounded-full" alt="Profile" />
                    </div>
                    <span>{{ user.username || user.email || 'Profile' }}</span>
                    <Icon name="lucide:chevron-down" class="w-4 h-4 ml-1" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <NuxtLink to="/profile" class="flex items-center cursor-pointer">
                      <Icon name="lucide:user" class="w-4 h-4 mr-2" />
                      <span>Profile</span>
                    </NuxtLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    variant="destructive"
                    @click="logout"
                  >
                    <Icon name="lucide:log-out" class="w-4 h-4 mr-2" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ClientOnly>
          </div>
          
          <!-- Get Started button -->
          <NuxtLink 
            v-if="!user && !navigationItems.some(item => item.name === 'Get Started')" 
            to="#contact" 
            @click="(e) => handleClick(e, '#contact')"
          >
            <Button class="bg-blue-600/90 backdrop-blur-sm text-white hover:bg-blue-700 rounded-full">
              <Icon name="lucide:sparkles" class="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon"
              class="md:hidden text-gray-700 hover:text-blue-600 hover:bg-white/20 rounded-full"
            >
              <Icon name="lucide:menu" class="h-5 w-5" />
            </Button>
          </SheetTrigger>
          
          <SheetContent side="right" class="bg-white shadow-md border-l border-gray-200">
            <SheetHeader>
              <SheetTitle class="text-xl text-blue-600 flex items-center">
                <div class="bg-blue-100 p-1 rounded-full mr-2">
                  <Icon name="lucide:zap" class="h-5 w-5 text-blue-600" />
                </div>
                JoroAI
              </SheetTitle>
            </SheetHeader>
            
            <div class="mt-6">
              <!-- Navigation links -->
              <div class="space-y-1">
                <NuxtLink
                  v-for="(item, index) in navigationItems"
                  :key="index"
                  :to="item.href"
                  class="flex items-center px-3 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
                  @click="(e) => handleClick(e, item.href)"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
              
              <hr class="my-4 border-gray-100" />
              
              <!-- Auth links -->
              <div class="space-y-2">
                <NuxtLink 
                  v-if="!user"
                  to="/login"
                  class="flex items-center px-3 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
                >
                  <Icon name="lucide:log-in" class="w-4 h-4 mr-2" />
                  Login
                </NuxtLink>
                
                <NuxtLink 
                  v-if="!user"
                  to="#contact"
                  class="flex items-center px-3 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg mt-2"
                  @click="(e) => handleClick(e, '#contact')"
                >
                  <Icon name="lucide:sparkles" class="w-4 h-4 mr-2" />
                  Get Started
                </NuxtLink>
                
                <NuxtLink 
                  v-if="user"
                  to="/profile"
                  class="flex items-center px-3 py-3 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
                >
                  <Icon name="lucide:user" class="w-4 h-4 mr-2" />
                  Profile
                </NuxtLink>
                
                <button 
                  v-if="user"
                  @click="logout"
                  class="flex items-center w-full text-left px-3 py-3 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50/30 rounded-lg"
                >
                  <Icon name="lucide:log-out" class="w-4 h-4 mr-2" />
                  Logout
                </button>
              </div>
            </div>
            
            <SheetFooter class="mt-auto pt-4">
              <SheetClose asChild>
                <Button class="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                  <Icon name="lucide:x" class="w-4 h-4 mr-2" />
                  Close Menu
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Sheet, SheetContent, SheetHeader, SheetFooter, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

const { scrollTo } = useScrollTo()
const user = useState('user')
const supabase = useSupabaseClient()
const router = useRouter()

const handleClick = (e, hash) => {
  if (hash.startsWith('#')) {
    e.preventDefault()
    scrollTo(hash)
  }
}

const navigationItems = [
  { name: 'UI Components', href: '#ui-components' },
  { name: 'Visual Effects', href: '#stunning-effects' },
]

// Logout function
const logout = async () => {
  try {
    await supabase.auth.signOut()
    // Reset the user state
    user.value = null
    // Redirect to home page
    router.push('/')
  } catch (error) {
    console.error('Error logging out:', error)
    if (toast) {
      toast.error('Error logging out')
    }
  }
}
</script>