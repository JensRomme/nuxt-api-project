<script setup>
import { useApiComponents } from '@/composables/useApiDocs'
// api componenten ophalen

const { apiComponents, error } = useApiComponents()
</script>

<template>
  <div>
    <h1>API Componenten van Intractief betaalverzoek</h1> <!-- Titel, hoofdpagina -->

    <div v-if="error" class="error">
      <p>Fout: {{ error }}</p>
    </div>

    <div v-else-if="apiComponents">
      <ul>
        <li v-for="(component, name) in apiComponents" :key="name"> <!-- Loopt door de componenten heen en toont de naam en inhoud -->
          <strong>{{ name }}</strong>:
          <pre>{{ component }}</pre>
        </li>
      </ul>
    </div>

    <div v-else>
      <p>Componenten worden geladen, even geduld :p</p>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
