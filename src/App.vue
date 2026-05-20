<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'

import AppHeader from '@/components/AppHeader.vue'
import { useThemeStore } from '@/stores/theme'

const theme = useThemeStore()

onMounted(() => {
  theme.applyTheme()
})

watch(
  () => theme.mode,
  () => theme.applyTheme(),
)
</script>

<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>
