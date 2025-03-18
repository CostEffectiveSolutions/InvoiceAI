export default defineNuxtRouteMiddleware(async (to) => {
  console.log('auth.global.js')
  const supabaseUser = useSupabaseUser()
  const supabase = useSupabaseClient()
  const user = useState('user', () => null)

  console.log('supabaseUser', supabaseUser.value)
  if (supabaseUser.value) {
    // Only fetch profile if not already in state
    if (!user.value) {
      const { data: profile, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', supabaseUser.value.id)
        .single()
      
      if (!error) {
        user.value = profile
      }
    }
  } else {
    // Clear user profile if user is not logged in
    user.value = null
  }

  // Skip middleware for public routes
  if (
    to.path === '/login' ||
    to.path === '/confirm'
  ) {
    return
  }

  // if (!supabaseUser.value) {
  //   const redirectTo = to.fullPath
  //   return navigateTo(`/login?redirect=${encodeURIComponent(redirectTo)}`)
  // }
}) 