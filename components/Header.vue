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

        <!-- Desktop navigation -->
        <nav class="hidden items-center space-x-8 md:flex">
          <NuxtLink 
            v-for="item in navigationItems" 
            :key="item.name" 
            :to="item.href"
            class="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            @click="(e) => handleClick(e, item.href)"
          >
            {{ item.name }}
          </NuxtLink>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
          <!-- Desktop buttons -->
          <div class="hidden md:flex md:items-center md:gap-3">
            <!-- Show login button if user is not logged in -->
            <template v-if="!user">
              <NuxtLink to="/login">
                <Button 
                  variant="ghost" 
                  class="text-gray-700 hover:text-blue-600 hover:bg-white/20 transition-all rounded-full"
                >
                  <Icon name="lucide:log-in" class="w-4 h-4 mr-2" />
                  Login
                </Button>
              </NuxtLink>
              <NuxtLink to="#contact">
                <Button 
                  class="bg-blue-600/90 backdrop-blur-sm text-white hover:bg-blue-700 transition-all border border-blue-500/20 shadow-sm rounded-full"
                  @click="(e) => handleClick(e, '#contact')"
                >
                  <Icon name="lucide:sparkles" class="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </NuxtLink>
            </template>

            <!-- Show profile dropdown if user is logged in -->
            <div v-else class="relative">
              <Button 
                variant="ghost" 
                class="flex items-center space-x-2 text-gray-700 hover:text-blue-600 hover:bg-white/20 transition-all rounded-full"
                @click.stop="toggleProfileMenu"
                data-profile-button
              >
                <div class="bg-blue-100 p-1 rounded-full">
                  <Icon v-if="!user.avatar_url" name="lucide:user" class="w-5 h-5 text-blue-600" />
                  <img v-else :src="user.avatar_url" class="w-6 h-6 rounded-full" alt="Profile" />
                </div>
                <span class="text-sm font-medium">{{ user.username || user.email || 'Profile' }}</span>
                <Icon 
                  :name="isProfileMenuOpen ? 'lucide:chevron-up' : 'lucide:chevron-down'" 
                  class="w-4 h-4"
                />
              </Button>

              <!-- Profile dropdown menu -->
              <Transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div 
                  v-if="isProfileMenuOpen" 
                  class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm transition-all duration-300 shadow-[0_8px_32px_rgba(31,38,135,0.07)] absolute right-0 mt-2 w-48 rounded-2xl shadow-lg z-50"
                  v-click-outside="closeProfileMenu"
                  @click.stop
                  data-profile-menu
                >
                  <div class="py-1">
                    <NuxtLink 
                      to="/profile" 
                      class="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-white/20 transition-all"
                      @click="closeProfileMenu"
                    >
                      <div class="flex items-center">
                        <Icon name="lucide:user" class="w-4 h-4 mr-2" />
                        <span>Profile</span>
                      </div>
                    </NuxtLink>
                    <div class="border-t border-gray-200 my-1"></div>
                    <button 
                      @click="logout" 
                      class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:text-red-700 hover:bg-red-50/30 transition-all"
                    >
                      <div class="flex items-center">
                        <Icon name="lucide:log-out" class="w-4 h-4 mr-2" />
                        <span>Logout</span>
                      </div>
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>

          <!-- Mobile menu button -->
          <Button 
            ref="menuButtonRef"
            variant="ghost" 
            size="icon"
            class="md:hidden text-gray-700 hover:text-blue-600 hover:bg-white/20 rounded-full"
            @click="toggleMenu"
            data-menu-button
          >
            <Icon 
              :name="isOpen ? 'lucide:x' : 'lucide:menu'" 
              class="h-5 w-5"
            />
          </Button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div 
        v-if="isOpen" 
        class="md:hidden absolute top-full left-0 right-0"
        v-click-outside="closeMenu"
      >
        <div class="bg-white/80 backdrop-blur-lg border border-white/50 shadow-sm transition-all duration-300 shadow-[0_8px_32px_rgba(31,38,135,0.07)] m-2 rounded-3xl shadow-lg">
          <div class="space-y-1 px-4 py-5">
            <NuxtLink
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.href"
              class="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-white/20 rounded-full transition-all"
              @click="(e) => handleClick(e, item.href)"
            >
              {{ item.name }}
            </NuxtLink>
            
            <!-- User is not logged in - show login buttons -->
            <div v-if="!user" class="mt-4 space-y-2">
              <NuxtLink 
                to="/login"
                class="flex items-center w-full justify-center text-gray-700 hover:text-blue-600 hover:bg-white/20 px-3 py-2.5 text-sm font-medium rounded-full transition-all"
              >
                <Icon name="lucide:log-in" class="w-4 h-4 mr-2" />
                Login
              </NuxtLink>
              <NuxtLink 
                to="#contact"
                class="flex items-center w-full justify-center bg-blue-600/90 text-white hover:bg-blue-700 px-3 py-2.5 text-sm font-medium rounded-full text-center border border-blue-500/20 shadow-sm transition-all"
                @click="(e) => handleClick(e, '#contact')"
              >
                <Icon name="lucide:sparkles" class="w-4 h-4 mr-2" />
                Get Started
              </NuxtLink>
            </div>
            
            <!-- User is logged in - show profile options -->
            <div v-else class="mt-4 space-y-2">
              <NuxtLink 
                to="/profile"
                class="flex items-center w-full justify-center text-gray-700 hover:text-blue-600 hover:bg-white/20 px-3 py-2.5 text-sm font-medium rounded-full transition-all"
              >
                <Icon name="lucide:user" class="w-4 h-4 mr-2" />
                Profile
              </NuxtLink>
              <button 
                @click="logout"
                class="flex items-center w-full justify-center text-red-600 hover:text-red-700 hover:bg-red-50/30 px-3 py-2.5 text-sm font-medium rounded-full transition-all"
              >
                <Icon name="lucide:log-out" class="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const isOpen = ref(false)
const isProfileMenuOpen = ref(false)
const menuButtonRef = ref(null)
const { scrollTo } = useScrollTo()
const user = useState('user')
const supabase = useSupabaseClient()
const router = useRouter()

const toggleMenu = (e) => {
  e.stopPropagation()
  isOpen.value = !isOpen.value
}

const toggleProfileMenu = (e) => {
  e.stopPropagation()
  isProfileMenuOpen.value = !isProfileMenuOpen.value
}

const closeProfileMenu = () => {
  isProfileMenuOpen.value = false
}

const handleClickOutside = (event) => {
  const profileButton = document.querySelector('[data-profile-button]')
  const profileMenu = document.querySelector('[data-profile-menu]')
  
  // Don't close if clicking on the profile button or inside the menu
  if (profileButton && (profileButton === event.target || profileButton.contains(event.target))) {
    return
  }
  
  if (profileMenu && (profileMenu === event.target || profileMenu.contains(event.target))) {
    return
  }
  
  // Close the profile menu if clicking outside
  if (isProfileMenuOpen.value) {
    isProfileMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClick = (e, hash) => {
  if (hash.startsWith('#')) {
    e.preventDefault()
    scrollTo(hash)
    isOpen.value = false
  }
}

const navigationItems = [
  { name: 'Features', href: '#features' },
  { name: 'UI Components', href: '#ui-components' },
  { name: 'Visual Effects', href: '#stunning-effects' },
  { name: 'Get Started', href: '#getting-started' },
]

// Mobile menu
const closeMenu = () => {
  isOpen.value = false
}

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
    isOpen.value = false
  } catch (error) {
    console.error('Error logging out:', error)
  }
}

// Click outside directive
const clickOutside = {
  beforeMount: (el, binding) => {
    el._clickOutside = (event) => {
      // Ignore clicks on the menu button
      const menuButton = document.querySelector('[data-menu-button]')
      const profileButton = document.querySelector('[data-profile-button]')
      
      if ((menuButton && (menuButton === event.target || menuButton.contains(event.target))) ||
          (profileButton && (profileButton === event.target || profileButton.contains(event.target)))) {
        return
      }
      
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event)
      }
    }
    document.addEventListener('click', el._clickOutside)
  },
  unmounted: (el) => {
    document.removeEventListener('click', el._clickOutside)
  }
}

// Register directive
const vClickOutside = clickOutside
</script>

<style scoped>
</style>