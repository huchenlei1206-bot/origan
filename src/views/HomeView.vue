<script setup lang="ts">
import { ChevronRight, Sparkles } from '@lucide/vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import ArticleCard from '@/components/ArticleCard.vue'
import { useContentStore } from '@/stores/content'

const content = useContentStore()
const lead = computed(() => content.featured)
const feed = computed(() => content.filteredArticles.filter((item) => item.id !== lead.value.id))
</script>

<template>
  <main class="page-shell">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-media">
        <img :src="lead.cover" :alt="lead.title" />
      </div>
      <div class="hero-copy">
        <div class="kicker">
          <Sparkles :size="18" aria-hidden="true" />
          {{ lead.tone }}
        </div>
        <h1 id="home-title">{{ lead.title }}</h1>
        <p>{{ lead.dek }}</p>
        <RouterLink class="primary-link" :to="{ name: 'article', params: { id: lead.id } }">
          阅读封面
          <ChevronRight :size="18" aria-hidden="true" />
        </RouterLink>
      </div>
    </section>

    <section class="tag-strip" aria-label="内容标签">
      <button
        v-for="tag in content.allTags"
        :key="tag"
        type="button"
        :class="{ active: content.activeTag === tag }"
        @click="content.setActiveTag(tag)"
      >
        {{ tag }}
      </button>
    </section>

    <section class="content-layout" aria-label="精选内容">
      <div class="feed-grid">
        <ArticleCard v-for="article in feed" :key="article.id" :article="article" />
      </div>

      <aside class="trend-panel" aria-labelledby="trend-title">
        <h2 id="trend-title">热度榜</h2>
        <ol>
          <li v-for="article in content.trending" :key="article.id">
            <RouterLink :to="{ name: 'article', params: { id: article.id } }">
              <span>{{ article.title }}</span>
              <strong>{{ article.heat }}</strong>
            </RouterLink>
          </li>
        </ol>
      </aside>
    </section>
  </main>
</template>
