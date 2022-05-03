import { defineStore } from 'pinia'
import actions from './actions'
import { DemoState } from './models'

export const useDemoStore = defineStore('demo', {
  state: (): DemoState => {
    return {
      name: '',
    }
  },
  actions,
})
