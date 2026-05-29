<template>
  <div class="article-card" @click="goToArticle">
    <div class="article-cover" v-if="article.cover">
      <img :src="article.cover" :alt="article.title" />
    </div>
    <div class="article-info">
      <h3 class="article-title">{{ article.title }}</h3>
      <p class="article-summary">{{ article.summary }}</p>
      <div class="article-meta">
        <span class="category">{{ article.category }}</span>
        <span class="date">{{ article.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToArticle() {
      this.$router.push(`/article/${this.article.id}`)
    }
  }
}
</script>

<style scoped>
.article-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
.article-cover img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.article-info {
  padding: 20px;
}
.article-title {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}
.article-summary {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}
.article-meta {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
}
.category {
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
