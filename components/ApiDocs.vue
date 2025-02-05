<script setup>
import { useApiComponents } from '@/composables/useApiDocs'

const { apiComponents, error } = useApiComponents()
</script>

<template>
  <div>
    <h1>API Componenten, Intractief betaalverzoek</h1>

    <div v-if="error" class="error">
      <p>Fout: {{ error }}</p>
    </div>

    <div v-else-if="apiComponents">
      <ul>
        <li v-for="(component, name) in apiComponents" :key="name">
          <strong>{{ name }}</strong>:
          <pre>{{ component }}</pre>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>Componenten worden geladen...</p>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
