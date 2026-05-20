<script setup lang="ts">
import { Menu, Moon, Sun, X } from '@lucide/vue'
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

import { useContentStore } from '@/stores/content'
import { useThemeStore } from '@/stores/theme'

const content = useContentStore()
const theme = useThemeStore()
const route = useRoute()
const menuOpen = ref(false)

const themeIcon = computed(() => (theme.isDark ? Sun : Moon))
</script>

<template>
  <header class="app-header">
    <RouterLink class="brand" to="/" aria-label="回到夜光橘子首页" @click="menuOpen = false">
      <span class="brand-mark" aria-hidden="true">N</span>
      <span>
        <strong>夜光橘子</strong>
        <small>Nocturne Zest</small>
      </span>
    </RouterLink>

    <nav :class="['main-nav', { 'is-open': menuOpen }]" aria-label="主要频道">
      <RouterLink to="/" @click="menuOpen = false">首页</RouterLink>
      <RouterLink
        v-for="category in content.categories"
        :key="category.id"
        :to="{ name: 'category', params: { id: category.id } }"
        :aria-current="route.params.id === category.id ? 'page' : undefined"
        @click="menuOpen = false"
      >
        {{ category.name }}
      </RouterLink>
    </nav>

    <div class="header-actions">
      <button class="icon-button" type="button" aria-label="切换明暗主题" @click="theme.toggleTheme">
        <component :is="themeIcon" :size="19" aria-hidden="true" />
      </button>
      <button class="icon-button menu-button" type="button" aria-label="打开频道菜单" @click="menuOpen = !menuOpen">
        <X v-if="menuOpen" :size="20" aria-hidden="true" />
        <Menu v-else :size="20" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>
