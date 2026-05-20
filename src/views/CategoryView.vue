<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import ArticleCard from '@/components/ArticleCard.vue'
import { useContentStore } from '@/stores/content'

const route = useRoute()
const router = useRouter()
const content = useContentStore()

const category = computed(() => content.getCategoryById(String(route.params.id)))
const articles = computed(() => content.getArticlesByCategory(String(route.params.id)))

if (!category.value) {
  router.replace({ name: 'not-found' })
}
</script>

<template>
  <main v-if="category" class="page-shell">
    <section class="channel-head" aria-labelledby="channel-title">
      <p>Channel</p>
      <h1 id="channel-title">{{ category.name }}</h1>
      <span>{{ category.summary }}</span>
    </section>

    <section class="feed-grid wide" aria-label="频道文章">
      <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
    </section>
  </main>
</template>
