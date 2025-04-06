<template>
  <header class="w-full z-50">
    <div class="bg-white backdrop-blur-md shadow-sm transition-all duration-300 border-b border-white/10">
      <div class="container mx-auto flex h-20 items-center justify-between px-4">
        <!-- Logo -->
        <NuxtLink to="/" class="relative flex items-center space-x-3">
          <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">JoroAI</span>
          <span class="text-base font-medium text-gray-700">AI Starter Kit</span>
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
            <span>Login</span>
          </NuxtLink>
          
          <!-- Profile dropdown when logged in -->
          <div v-else class="relative">
            <ClientOnly>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    class="flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                  >
                    <div class="relative mr-2">
                      <img v-if="user.avatar_url" :src="user.avatar_url" class="w-6 h-6 rounded-full" alt="Profile" />
                    </div>
                    <span>{{ user.username || user.email || 'Profile' }}</span>
                    <span class="ml-1">▼</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent class="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <NuxtLink to="/profile" class="flex items-center cursor-pointer">
                      <span>Profile</span>
                    </NuxtLink>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    variant="destructive"
                    @click="logout"
                  >
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ClientOnly>
          </div>
          
          <!-- Get Started button -->
          <NuxtLink 
            v-if="!user && !navigationItems.some(item => item.name === 'Get Started')" 
            to="https://aikit.lemonsqueezy.com/buy/19a29e38-031b-4c6f-9042-f8fb1c98b8e2?checkout[discount_code]=EARLY"
            target="_blank"
            rel="noopener"
          >
            <Button class="bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:bg-blue-700 rounded-full">
              Get Started - $200 OFF
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
          
          <SheetContent side="right" class="bg-white shadow-md border-l border-gray-200 p-8">
            <SheetHeader>
              <SheetTitle class="text-xl">
                <span class="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">JoroAI</span>
              </SheetTitle>
            </SheetHeader>
            
            <div class="mt-10">
              <!-- Navigation links -->
              <div class="space-y-4">
                <NuxtLink
                  v-for="(item, index) in navigationItems"
                  :key="index"
                  :to="item.href"
                  class="block px-2 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
                  @click="(e) => handleClick(e, item.href)"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
              
              <hr class="my-8 border-gray-100" />
              
              <!-- Auth links -->
              <div class="space-y-4">
                <NuxtLink 
                  v-if="!user"
                  to="/login"
                  class="block px-2 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
                >
                  Login
                </NuxtLink>
                
                <NuxtLink 
                  v-if="!user"
                  to="https://aikit.lemonsqueezy.com/buy/19a29e38-031b-4c6f-9042-f8fb1c98b8e2?checkout[discount_code]=EARLY"
                  target="_blank"
                  rel="noopener"
                  class="block text-center px-2 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg mt-4"
                >
                  Get Started - $200 OFF
                </NuxtLink>
                
                <NuxtLink 
                  v-if="user"
                  to="/profile"
                  class="block px-2 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg"
                >
                  Profile
                </NuxtLink>
                
                <button 
                  v-if="user"
                  @click="logout"
                  class="w-full text-left px-2 py-3 text-base font-medium text-red-600 hover:text-red-700 hover:bg-red-50/30 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>
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