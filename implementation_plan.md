# Vue 3 媒介产品网页实施计划

我们将使用 Vue 3、用于状态管理的 Pinia 以及用于导航的 Vue Router，在 `D:\git-test` 目录中构建一个现代的、以内容为主的媒介产品网页。

## 待用户确认事项

> [!IMPORTANT]
> 请查看下方提议的实施计划。一旦您批准，我将开始进行项目的初始化和开发。

## 待定问题

> [!QUESTION]
> 1. **TypeScript 还是 JavaScript：** 您倾向于在这个项目中使用 TypeScript 还是标准的 JavaScript？（默认计划将使用标准 JavaScript，如果不需要严格的类型检查，这会更快捷）。
> 2. **设计风格与主题：** 根据现代网页设计规范，我会加入如暗黑模式、毛玻璃效果（Glassmorphism）和微动画等高级视觉体验。您有任何偏好的配色方案或参考网站吗？如果没有，我将默认采用一套高级的、动态响应式的亮/暗色主题。
> 3. **演示内容：** 既然这是一个“媒介产品”，我需要生成一些模拟的文章/新闻数据来填充页面。您希望这些模拟内容偏向哪个领域？（例如：科技新闻、娱乐八卦、生活方式、体育等）。

## 提议的变更方案

### 项目初始化
我们将使用官方的 Vue 脚手架工具在 `D:\git-test` 中以非交互方式搭建项目：
- `npx -y create-vue@latest . --ts=false --jsx=false --router --pinia --eslint --prettier --force`
- `npm install` (安装依赖)

### 核心应用架构

#### 1. 全局状态管理 (Pinia)
- **`src/stores/content.js`**：管理文章列表、分类目录以及数据加载状态。
- **`src/stores/theme.js`**：管理用户偏好设置，如亮色/暗黑模式切换。

#### 2. 路由设计 (Vue Router)
- **`/` (首页)**：主信息流页面，以网格或列表形式展示最新的媒介内容。
- **`/category/:id`**：分类频道页面，用于展示特定分类下的内容。
- **`/article/:id`**：文章详情页，用于阅读具体文章或查看多媒体内容。

#### 3. 核心组件开发
- **`src/components/AppHeader.vue`**：顶部导航栏，包含 Logo、分类导航链接和主题切换按钮。
- **`src/components/ArticleCard.vue`**：可复用的内容卡片组件，用于展示文章的封面图、标题和摘要。
- **`src/components/LoadingSpinner.vue`**：用于数据加载状态的微动画组件。

#### 4. 样式与设计系统
- **`src/assets/main.css`**：我们将使用原生 CSS (Vanilla CSS) 来创建一个高级的设计系统（遵循规范，默认不使用 Tailwind）。
  - 使用 CSS 变量 (Variables) 实现主题和字体的全局控制。
  - 加入平滑的过渡效果、悬停动效和毛玻璃元素，以达到令人惊艳的视觉效果 (WOW factor)。
  - 结合 CSS Grid 和 Flexbox 确保页面在手机、平板和桌面端的完全响应式布局。

### SEO (搜索引擎优化) 最佳实践
- 基于当前的路由动态更新页面的 `<title>` 和 `<meta>` 标签。
- 在所有组件中规范使用 HTML5 语义化标签（如 `<header>`, `<main>`, `<article>`, `<nav>`），有利于搜索引擎抓取。

## 验证与测试计划

### 自动化/手动测试
- 运行 `npm run dev` 启动本地开发服务器。
- 手动点击导航进入首页、分类页和文章详情页，验证 Vue Router 的工作状态。
- 切换主题按钮，验证 Pinia 的状态管理以及 CSS 变量的响应性是否正常。
- 检查页面 DOM 结构，验证语义化 HTML 和 SEO 标签是否符合预期。
