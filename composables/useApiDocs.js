import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'
import axios from 'axios'

export function useApiDocs() {
  const apiDocs = ref(null)
  const error = ref(null)
  const config = useRuntimeConfig() // Dit haalt de configuratie correct op

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
