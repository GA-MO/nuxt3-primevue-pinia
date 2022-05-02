import { defineStore } from 'pinia'
import actions from './actions'

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useAppData = defineStore('appData', {
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
  actions,
})
