import axios from 'axios'

const urlAuth: string = 'http://localhost:5000/api/Users/Verify'

interface loginData {
  username: string
  password: string | number
}

async function login(formState: loginData) {
  const config = useRuntimeConfig()
  const response = await axios.post(urlAuth, {
    data: {
      ...formState,
    },
  })
  localStorage.setItem(config.public.TOKEN_KEY, response.data.token)
  navigateTo('/')
}

function logout() {
  const config = useRuntimeConfig()
  localStorage.removeItem(config.public.TOKEN_KEY)
  navigateTo('/login')
}

const useAuth = () => ({ login, logout })

export default useAuth
