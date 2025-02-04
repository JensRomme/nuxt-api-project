<script setup>
import { useApiDocs } from '@/composables/useApiDocs'

const { apiDocs, error } = useApiDocs()
</script>

<template>
  <div>
    <h1>API Documentatie</h1>
    <div v-if="error" class="error">
      <p>Fout: {{ error }}</p>
    </div>
    <div v-else-if="apiDocs">
      <pre>{{ JSON.stringify(apiDocs, null, 2) }}</pre>
    </div>
    <div v-else>
      <p>API-documentatie wordt geladen...</p>
    </div>
  </div>
</template>
