interface WaitFeatures {
  is: Function
  any: Function
  start: Function
  end: Function
}

function useWait(): WaitFeatures {
  const state = ref([])

  function is(key: string): boolean {
    const isLoading = (loadingKey: string) => loadingKey === key
    return state.value.some(isLoading)
  }

  function any(): boolean {
    return state.value.length !== 0
  }

  function end(key: string) {
    const removeLoading = (loadingKey: string) => loadingKey !== key
    state.value = state.value.filter(removeLoading)
  }

  async function start(key: string, func: Function) {
    try {
      state.value.push(key)
      await func()
    } finally {
      end(key)
    }
  }

  return {
    is,
    any,
    start,
    end,
  }
}

export default useWait
