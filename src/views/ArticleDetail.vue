<template>
  <div class="article-detail">
    <button class="back-btn" @click="goBack">← 返回主页</button>
    <article class="article">
      <header class="article-header">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <span class="category">{{ article.category }}</span>
          <span class="date">发布于 {{ article.date }}</span>
          <span class="views">阅读 {{ article.views }}</span>
        </div>
      </header>
      <div class="article-content">
        <p v-for="(para, index) in article.content" :key="index">{{ para }}</p>
      </div>
      <div class="article-tags">
        <span class="tag" v-for="tag in article.tags" :key="tag" @click="goToCategory(tag)">#{{ tag }}</span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetail',
  methods: {
    goBack() {
      this.$router.push('/')
    },
    goToCategory(tag) {
      this.$router.push('/categories')
    }
  },
  data() {
    return {
      article: {
        id: 1,
        title: 'Vue 3 组合式 API 入门指南',
        category: 'Vue',
        date: '2026-05-20',
        views: 128,
        tags: ['Vue', '前端', 'JavaScript'],
        content: [
          'Vue 3 引入了组合式 API（Composition API），这是一种全新的组织和复用组件逻辑的方式。相比于选项式 API（Options API），组合式 API 提供了更好的逻辑复用和代码组织能力。',
          '在组合式 API 中，我们使用 setup 函数作为组件的入口点。setup 函数在组件创建之前执行，是定义响应式数据、计算属性、方法等的最佳位置。',
          '响应式系统是 Vue 的核心特性之一。在 Vue 3 中，我们可以使用 ref 和 reactive 两个函数来创建响应式数据。ref 用于创建基本类型的响应式数据，而 reactive 用于创建对象类型的响应式数据。',
          '组合式 API 还带来了更好的 TypeScript 支持和更灵活的代码组织方式。通过将相关逻辑放在一起，我们可以更容易地维护和理解代码。'
        ]
      }
    }
  }
}
</script>

<style scoped>
.article-detail {
  max-width: 800px;
  margin: 0 auto;
}
.back-btn {
  display: inline-block;
  padding: 10px 20px;
  margin-bottom: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
  transition: all 0.3s;
}
.back-btn:hover {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-color: transparent;
}
.article {
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.article-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}
.article-header h1 {
  font-size: 28px;
  margin-bottom: 15px;
}
.article-meta {
  display: flex;
  gap: 20px;
  color: #999;
  font-size: 14px;
}
.category {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  padding: 2px 10px;
  border-radius: 4px;
}
.article-content {
  line-height: 1.8;
  color: #444;
}
.article-content p {
  margin-bottom: 20px;
  text-indent: 2em;
}
.article-tags {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.tag {
  display: inline-block;
  margin-right: 10px;
  color: #667eea;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.3s;
}
.tag:hover {
  color: #764ba2;
  text-decoration: underline;
}
</style>
