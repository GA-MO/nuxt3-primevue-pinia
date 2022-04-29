interface WaitFeatures {
  is: Function
  any: Function
  start: Function
}

function useWait(): WaitFeatures {
  const state = ref<string[]>([])

  function is(key: string): boolean {
    const isLoading = (loadingKey: string) => loadingKey === key
    return state.value.some(isLoading)
  }

  function any(): boolean {
    return state.value.length !== 0
  }

  async function start(key: string, func: Function) {
    try {
      state.value.push(key)
      await func()
    } finally {
      const removeLoading = (loadingKey: string) => loadingKey !== key
      state.value = state.value.filter(removeLoading)
    }
  }

  return {
    is,
    any,
    start,
  }
}

export default useWait
