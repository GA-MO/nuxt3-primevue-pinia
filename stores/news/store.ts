import { defineStore } from 'pinia'
import { NewsState } from './models'
import actions from './actions'

export const useNewsStore = defineStore('news', {
  state: function (): NewsState {
    return {
      newsList: [],
    }
  },
  actions,
})
