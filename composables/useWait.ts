export default function () {
  const state = ref<Array<string>>([])

  const is = (key: string) => {
    const isLoading = (loadingKey: string) => loadingKey === key
    return state.value.some(isLoading)
  }

  const start = async (key: string, func: Function) => {
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
    start,
  }
}
