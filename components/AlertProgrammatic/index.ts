import { createVNode, render } from 'vue'

import Alert from './Alert.vue'

declare global {
  interface Window {
    $nuxt: any
  }
}

type AlertOptions = {
  type: 'error' | 'warning' | 'success'
  title: String
  content: String
  onClose?: Function
}

export default function alertProgrammatic(options: AlertOptions) {
  const vnode = createVNode(Alert, { ...options })
  vnode.appContext = window.$nuxt._context
  render(vnode, document.createElement('div'))
  return vnode.component.proxy
}
