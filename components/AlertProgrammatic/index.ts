import { ComponentPublicInstance } from 'nuxt/dist/app/compat/capi'
import { createVNode, render } from 'vue'

import Alert from './Alert.vue'

interface AlertOptions {
  type: 'error' | 'warning' | 'success'
  title: String
  content: String
  onClose?: Function
}

function alertProgrammatic(options: AlertOptions): ComponentPublicInstance {
  const nuxt = useNuxtApp()
  const vnode = createVNode(Alert, { ...options })
  vnode.appContext = nuxt.vueApp._context
  render(vnode, document.createElement('div'))
  return vnode.component.proxy
}

export default alertProgrammatic
