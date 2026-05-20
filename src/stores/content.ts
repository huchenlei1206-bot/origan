import { defineStore } from 'pinia'

export type CategoryId = 'hot' | 'celebrity' | 'style' | 'city' | 'beauty' | 'watch'

export interface Category {
  id: CategoryId
  name: string
  summary: string
}

export interface Article {
  id: string
  category: CategoryId
  title: string
  dek: string
  author: string
  publishedAt: string
  readMinutes: number
  heat: number
  cover: string
  tone: string
  tags: string[]
  body: string[]
}

export const categories: Category[] = [
  { id: 'hot', name: '今日热议', summary: '高频讨论、社交平台热梗与话题追踪' },
  { id: 'celebrity', name: '星光茶话', summary: '红毯、综艺、剧组动态和明星造型拆解' },
  { id: 'style', name: '生活方式', summary: '居家、旅行、餐桌与周末灵感' },
  { id: 'city', name: '城市玩乐', summary: '展览、市集、新店和夜间目的地' },
  { id: 'beauty', name: '美妆衣橱', summary: '妆发趋势、穿搭公式和好物清单' },
  { id: 'watch', name: '剧影速递', summary: '剧集、电影、播客和短视频观察' },
]

const articles: Article[] = [
  {
    id: 'after-party-style',
    category: 'celebrity',
    title: '昨夜庆功宴的三套造型，真正赢在“松弛感”',
    dek: '从亮片短裙到低饱和西装，镜头外的轻盈细节反而成了今天的讨论焦点。',
    author: '栗子',
    publishedAt: '2026-05-20',
    readMinutes: 4,
    heat: 98,
    cover:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=82',
    tone: '红毯余温',
    tags: ['造型复盘', '红毯', '松弛感'],
    body: [
      '庆功宴没有把声量交给夸张廓形，而是让几处轻巧的质感成为重点：半湿发、薄纱叠穿、以及一只不抢戏的金属手包。',
      '最被转发的一套是低饱和灰蓝西装，肩线收得很干净，内搭换成带珠光的背心后，既保留了正式感，也更适合夜间社交场景。',
      '这类造型的可借鉴点在于控制亮点数量。只保留一处发光材质，再用中性色压住整体，比全身堆满流行元素更容易显贵。',
    ],
  },
  {
    id: 'weekend-balcony',
    category: 'style',
    title: '把阳台改成 2 平米小酒馆，周末氛围立刻上线',
    dek: '藤编椅、低照度灯带和三种不费力绿植，适合租房党照着抄。',
    author: '米白',
    publishedAt: '2026-05-19',
    readMinutes: 5,
    heat: 86,
    cover:
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82',
    tone: '家居灵感',
    tags: ['租房改造', '阳台', '周末'],
    body: [
      '小空间最怕堆满装饰。先把地面和垂直收纳处理好，再用一盏暖色户外灯把视觉重心拉下来，阳台会显得更安静。',
      '绿植建议从耐阴、耐忘浇水的品类开始，例如龟背竹、心叶藤和银斑葛。它们不会把维护成本推得太高，也足够上镜。',
      '如果只能添一件东西，优先选可折叠小圆桌。它能在早餐、阅读、晚间微醺之间切换角色，使用频率比单纯的装饰品高很多。',
    ],
  },
  {
    id: 'cafe-soft-opening',
    category: 'city',
    title: '梧桐区新开那家奶油色咖啡馆，排队点单先看这篇',
    dek: '试营业三天已经刷屏，真正值得点的是海盐栗子卷和冷萃气泡。',
    author: '阿晚',
    publishedAt: '2026-05-18',
    readMinutes: 3,
    heat: 91,
    cover:
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=82',
    tone: '探店现场',
    tags: ['新店', '咖啡', '拍照点'],
    body: [
      '这家店的空间不大，但座位距离控制得不错。最适合拍照的位置不是窗边，而是靠近吧台的长凳，背景更干净。',
      '甜品里海盐栗子卷更稳，奶油比例轻，栗子泥保留颗粒感。饮品建议避开过甜款，冷萃气泡的层次更适合夏天。',
      '下午三点之后排队会明显变长。想要安静体验，试营业期可以选择工作日上午，出片效率和服务响应都会好不少。',
    ],
  },
  {
    id: 'summer-lip-stack',
    category: 'beauty',
    title: '今年夏天的唇妆关键词：清透、莓调、像刚喝完冰饮',
    dek: '三支叠涂公式从通勤到夜拍都能用，不用重新画全脸。',
    author: '芋圆',
    publishedAt: '2026-05-17',
    readMinutes: 4,
    heat: 79,
    cover:
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=82',
    tone: '妆发趋势',
    tags: ['唇妆', '夏日', '叠涂'],
    body: [
      '今年的莓调更轻，不再强调厚重的复古边界。先用裸粉铺底，再把水光莓色点在唇中，最后用透明唇油收尾。',
      '通勤场景可以把光泽度降一点，选择半哑质地压住嘴角边缘。夜拍时再追加一层唇油，镜头里的饱满感会更明显。',
      '需要注意的是底妆不要过雾。唇部已经很清透，如果脸上完全没有光泽，整体会显得断层。',
    ],
  },
  {
    id: 'variety-show-friendship',
    category: 'watch',
    title: '这档慢综艺为什么突然翻红？观众想看的不是任务',
    dek: '它把冲突剪得很轻，却把朋友之间的细小照顾留了下来。',
    author: '北岛',
    publishedAt: '2026-05-16',
    readMinutes: 6,
    heat: 88,
    cover:
      'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=82',
    tone: '剧综观察',
    tags: ['慢综艺', '友情', '口碑'],
    body: [
      '慢综艺的难点不是节奏慢，而是慢下来之后还留下些什么。这档节目把嘉宾关系放在任务之前，反而让观众愿意多停留十分钟。',
      '有意思的是，节目没有反复强化输赢。它保留了递水、等人、顺手把椅子拉开这些小动作，社交关系因此更可信。',
      '当很多内容还在用高密度冲突争夺注意力时，稳定、舒展、低防备的观看体验本身就成了差异化。',
    ],
  },
  {
    id: 'late-night-feed',
    category: 'hot',
    title: '深夜信息流又被“同款早餐”刷屏，背后是新一轮轻养生',
    dek: '燕麦杯、酸奶碗和中式蒸点同时走红，年轻人的早餐正在变得更有仪式感。',
    author: '青柠',
    publishedAt: '2026-05-15',
    readMinutes: 4,
    heat: 93,
    cover:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=82',
    tone: '趋势雷达',
    tags: ['轻养生', '早餐', '社交平台'],
    body: [
      '早餐重新变成内容平台的高频素材，原因不只是好看。它足够低门槛，又能承载自律、审美和生活节奏的表达。',
      '相比前几年强调热量控制的版本，现在的轻养生更重视口感和稳定执行。酸奶、坚果、水果和蒸点的组合能快速完成，也不容易失败。',
      '品牌已经开始跟进这一波趋势。更小包装的谷物、更适合拍照的餐具和低糖调味品，都会在接下来继续获得曝光。',
    ],
  },
]

export const useContentStore = defineStore('content', {
  state: () => ({
    categories,
    articles,
    activeTag: '全部',
  }),
  getters: {
    featured: (state) => state.articles[0],
    trending: (state) => [...state.articles].sort((a, b) => b.heat - a.heat).slice(0, 4),
    allTags: (state) => ['全部', ...Array.from(new Set(state.articles.flatMap((item) => item.tags)))],
    filteredArticles: (state) =>
      state.activeTag === '全部'
        ? state.articles
        : state.articles.filter((item) => item.tags.includes(state.activeTag)),
    getArticleById: (state) => (id: string) => state.articles.find((item) => item.id === id),
    getCategoryById: (state) => (id: string) =>
      state.categories.find((item) => item.id === id),
    getArticlesByCategory: (state) => (id: string) =>
      state.articles.filter((item) => item.category === id),
  },
  actions: {
    setActiveTag(tag: string) {
      this.activeTag = tag
    },
  },
})
