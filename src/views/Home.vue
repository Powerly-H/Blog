<template>
  <div class="home">
    <div class="hero">
      <h1>欢迎来到我的博客</h1>
      <p>记录生活，分享技术</p>
    </div>
    <div class="content-wrapper">
      <div class="articles-section">
        <h2>最新文章</h2>
        <div class="articles-grid">
          <ArticleCard v-for="article in latestArticles" :key="article.id" :article="article" />
        </div>
      </div>
      <Sidebar />
    </div>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    ArticleCard,
    Sidebar
  },
  data() {
    return {
      latestArticles: [
        { id: 1, title: 'Vue 3 组合式 API 入门指南', summary: '深入了解 Vue 3 的组合式 API，掌握 setup 函数和响应式系统的使用...', category: 'Vue', date: '2026-05-20', cover: 'https://picsum.photos/400/200?random=1' },
        { id: 2, title: 'JavaScript 异步编程详解', summary: '从回调函数到 Promise，再到 async/await，全面解析 JavaScript 异步编程...', category: 'JavaScript', date: '2026-05-18', cover: 'https://picsum.photos/400/200?random=2' },
        { id: 3, title: 'CSS Flexbox 布局完全指南', summary: 'Flexbox 布局是现代 CSS 布局的重要方式，本文将详细介绍其用法...', category: 'CSS', date: '2026-05-15', cover: 'https://picsum.photos/400/200?random=3' }
      ]
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-align: center;
  padding: 80px 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}
.hero h1 {
  font-size: 36px;
  margin-bottom: 15px;
}
.hero p {
  font-size: 18px;
  opacity: 0.9;
}
.content-wrapper {
  display: flex;
  gap: 30px;
}
.articles-section {
  flex: 1;
}
.articles-section h2 {
  margin-bottom: 20px;
  font-size: 22px;
}
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>
