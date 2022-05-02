import { defineStore } from 'pinia'
import actions from './actions'
import { DemoState } from './models'

export const useDemoState = defineStore('demo', {
  state: (): DemoState => {
    return {
      name: '',
    }
  },
  actions,
})
