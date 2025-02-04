import { ref, onMounted, useRuntimeConfig } from 'vue'
import axios from 'axios'

export function useApiDocs() {
  const apiDocs = ref(null)
  const error = ref(null)
  const config = useRuntimeConfig()

  onMounted(async () => {
    try {
      const response = await axios.get(`${config.public.apiBase}/api-docs`)
      apiDocs.value = response.data
    } catch (err) {
      error.value = err.message
    }
  })

  return { apiDocs, error }
}

//test test