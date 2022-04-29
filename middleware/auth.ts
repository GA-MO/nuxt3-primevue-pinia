export default defineNuxtRouteMiddleware((to) => {
  const config = useRuntimeConfig()
  const token = localStorage.getItem(config.public.TOKEN_KEY)

  if (!token) {
    return navigateTo('/login')
  }
})
