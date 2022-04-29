import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputText'
import RadioButton from 'primevue/radioButton'
import Calendar from 'primevue/calendar'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import Skeleton from 'primevue/skeleton'
import Password from 'primevue/password'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true })
  nuxtApp.vueApp.component('Dialog', Dialog)
  nuxtApp.vueApp.component('Button', Button)
  nuxtApp.vueApp.component('InputText', InputText)
  nuxtApp.vueApp.component('RadioButton', RadioButton)
  nuxtApp.vueApp.component('Calendar', Calendar)
  nuxtApp.vueApp.component('Card', Card)
  nuxtApp.vueApp.component('Skeleton', Skeleton)
  nuxtApp.vueApp.component('Password', Password)
  //other components that you need
})
