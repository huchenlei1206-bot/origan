import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import ArticleView from '@/views/ArticleView.vue'
import CategoryView from '@/views/CategoryView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import { useContentStore } from '@/stores/content'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '夜光橘子 - 娱乐生活方式媒体',
      description: '聚焦娱乐八卦、生活方式、城市玩乐和剧综观察的动态媒体产品。',
    },
  },
  {
    path: '/category/:id',
    name: 'category',
    component: CategoryView,
  },
  {
    path: '/article/:id',
    name: 'article',
    component: ArticleView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
    meta: {
      title: '页面未找到 - 夜光橘子',
      description: '这个内容暂时不存在。',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const content = useContentStore()
  const description = document.querySelector('meta[name="description"]')
  let title = String(to.meta.title ?? '夜光橘子')
  let metaDescription = String(to.meta.description ?? '娱乐生活方式媒体')

  if (to.name === 'category') {
    const category = content.getCategoryById(String(to.params.id))
    title = category ? `${category.name} - 夜光橘子` : '频道未找到 - 夜光橘子'
    metaDescription = category?.summary ?? '探索夜光橘子的内容频道。'
  }

  if (to.name === 'article') {
    const article = content.getArticleById(String(to.params.id))
    title = article ? `${article.title} - 夜光橘子` : '文章未找到 - 夜光橘子'
    metaDescription = article?.dek ?? '阅读夜光橘子的精选内容。'
  }

  document.title = title
  description?.setAttribute('content', metaDescription)
})

export default router
