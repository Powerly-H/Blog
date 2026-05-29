<template>
  <div class="articles-page">
    <div class="page-header">
      <h1>全部文章</h1>
      <p>共 {{ articles.length }} 篇文章</p>
    </div>
    <div class="content-wrapper">
      <div class="articles-list">
        <ArticleCard v-for="article in articles" :key="article.id" :article="article" />
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Articles',
  components: {
    ArticleCard,
    Sidebar
  },
  data() {
    return {
      articles: [
        { id: 1, title: 'Vue 3 组合式 API 入门指南', summary: '深入了解 Vue 3 的组合式 API，掌握 setup 函数和响应式系统的使用方法，让你的代码更加简洁优雅。', category: 'Vue', date: '2026-05-20', cover: 'https://picsum.photos/400/200?random=1' },
        { id: 2, title: 'JavaScript 异步编程详解', summary: '从回调函数到 Promise，再到 async/await，全面解析 JavaScript 异步编程的演进历程。', category: 'JavaScript', date: '2026-05-18', cover: 'https://picsum.photos/400/200?random=2' },
        { id: 3, title: 'CSS Flexbox 布局完全指南', summary: 'Flexbox 布局是现代 CSS 布局的重要方式，本文将详细介绍其各种属性和使用场景。', category: 'CSS', date: '2026-05-15', cover: 'https://picsum.photos/400/200?random=3' },
        { id: 4, title: 'Node.js 后端开发实战', summary: '使用 Node.js 和 Express 搭建一个完整的后端服务，包括路由、中间件、数据库连接等。', category: 'Node.js', date: '2026-05-12', cover: 'https://picsum.photos/400/200?random=4' },
        { id: 5, title: 'TypeScript 类型系统深入', summary: '深入了解 TypeScript 的类型系统，包括泛型、条件类型、映射类型等高级特性。', category: 'TypeScript', date: '2026-05-10', cover: 'https://picsum.photos/400/200?random=5' },
        { id: 6, title: '前端性能优化实践', summary: '从前端加载、渲染、交互等多个维度，全面讲解前端性能优化的方法和技巧。', category: '性能优化', date: '2026-05-08', cover: 'https://picsum.photos/400/200?random=6' }
      ]
    }
  }
}
</script>

<style scoped>
.page-header {
  margin-bottom: 30px;
}
.page-header h1 {
  font-size: 28px;
  margin-bottom: 10px;
}
.page-header p {
  color: #666;
}
.content-wrapper {
  display: flex;
  gap: 30px;
}
.articles-list {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>
