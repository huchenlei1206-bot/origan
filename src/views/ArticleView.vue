<script setup lang="ts">
import { ArrowLeft, CalendarDays, Flame, Timer } from '@lucide/vue'
import { computed } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'

import ArticleCard from '@/components/ArticleCard.vue'
import { useContentStore } from '@/stores/content'

const route = useRoute()
const router = useRouter()
const content = useContentStore()

const article = computed(() => content.getArticleById(String(route.params.id)))
const related = computed(() =>
  article.value
    ? content.articles
        .filter((item) => item.category === article.value?.category && item.id !== article.value.id)
        .slice(0, 3)
    : [],
)

if (!article.value) {
  router.replace({ name: 'not-found' })
}
</script>

<template>
  <main v-if="article" class="article-page">
    <RouterLink class="back-link" to="/">
      <ArrowLeft :size="18" aria-hidden="true" />
      返回首页
    </RouterLink>

    <article class="article-detail">
      <header class="article-hero">
        <div class="article-hero-copy">
          <p>{{ article.tone }}</p>
          <h1>{{ article.title }}</h1>
          <span>{{ article.dek }}</span>
          <div class="article-stats" aria-label="文章信息">
            <span>
              <CalendarDays :size="16" aria-hidden="true" />
              {{ article.publishedAt }}
            </span>
            <span>
              <Timer :size="16" aria-hidden="true" />
              {{ article.readMinutes }} 分钟
            </span>
            <span>
              <Flame :size="16" aria-hidden="true" />
              {{ article.heat }}
            </span>
          </div>
        </div>
        <img :src="article.cover" :alt="article.title" />
      </header>

      <div class="article-body">
        <p v-for="paragraph in article.body" :key="paragraph">{{ paragraph }}</p>
      </div>

      <footer class="article-tags" aria-label="文章标签">
        <RouterLink
          v-for="tag in article.tags"
          :key="tag"
          to="/"
          @click="content.setActiveTag(tag)"
        >
          {{ tag }}
        </RouterLink>
      </footer>
    </article>

    <section v-if="related.length" class="related-section" aria-labelledby="related-title">
      <h2 id="related-title">同频道继续看</h2>
      <div class="feed-grid wide">
        <ArticleCard v-for="item in related" :key="item.id" :article="item" />
      </div>
    </section>
  </main>
</template>
