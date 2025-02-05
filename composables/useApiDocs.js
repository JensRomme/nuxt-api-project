import { ref, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'
import axios from 'axios'

export function useApiComponents() {
  const apiComponents = ref(null)
  const error = ref(null)
  const config = useRuntimeConfig()

  onMounted(async () => {
    try {
      const response = await axios.get(`${config.public.apiBase}/api-docs`)
      apiComponents.value = response.data.components || {} // Haal alleen "components" op
    } catch (err) {
      error.value = err.message
    }
  })

  return { apiComponents, error }
}
