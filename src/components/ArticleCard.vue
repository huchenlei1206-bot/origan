<script setup lang="ts">
import { Flame, Timer } from '@lucide/vue'
import { RouterLink } from 'vue-router'

import type { Article } from '@/stores/content'

defineProps<{
  article: Article
  variant?: 'feature' | 'compact'
}>()
</script>

<template>
  <article :class="['article-card', variant]">
    <RouterLink :to="{ name: 'article', params: { id: article.id } }" class="cover-link">
      <img :src="article.cover" :alt="article.title" loading="lazy" />
    </RouterLink>
    <div class="article-card-body">
      <div class="meta-row">
        <span>{{ article.tone }}</span>
        <span class="meta-icon">
          <Flame :size="15" aria-hidden="true" />
          {{ article.heat }}
        </span>
      </div>
      <h2>
        <RouterLink :to="{ name: 'article', params: { id: article.id } }">
          {{ article.title }}
        </RouterLink>
      </h2>
      <p>{{ article.dek }}</p>
      <div class="card-footer">
        <span>{{ article.author }}</span>
        <span class="meta-icon">
          <Timer :size="15" aria-hidden="true" />
          {{ article.readMinutes }} 分钟
        </span>
      </div>
    </div>
  </article>
</template>
