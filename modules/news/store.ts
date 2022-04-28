import { defineStore } from 'pinia'
import { NewsState } from './models'

export const useNewsStore = defineStore('news', {
  state: function (): NewsState {
    return {
      newsList: [],
    }
  },
})
