<script setup lang="ts">
import { Home } from '@lucide/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="not-found">
    <p>404</p>
    <h1>这条灵感暂时走丢了</h1>
    <RouterLink class="primary-link" to="/">
      <Home :size="18" aria-hidden="true" />
      回到首页
    </RouterLink>
  </main>
</template>
