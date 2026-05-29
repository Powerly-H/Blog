<template>
  <div class="categories-page">
    <h1>分类标签</h1>
    <div class="categories-grid">
      <div v-for="category in categories" :key="category.name" class="category-card">
        <div class="category-icon">{{ category.icon }}</div>
        <h3>{{ category.name }}</h3>
        <p>{{ category.count }} 篇文章</p>
      </div>
    </div>
    <div class="tags-section">
      <h2>所有标签</h2>
      <div class="tags-cloud">
        <span v-for="tag in allTags" :key="tag" class="tag" :style="{ fontSize: getRandomSize() }">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data() {
    return {
      categories: [
        { name: 'Vue', icon: '💚', count: 12 },
        { name: 'JavaScript', icon: '💛', count: 18 },
        { name: 'CSS', icon: '💙', count: 8 },
        { name: 'Node.js', icon: '💚', count: 6 },
        { name: 'TypeScript', icon: '💙', count: 9 },
        { name: '性能优化', icon: '⚡', count: 5 }
      ],
      allTags: ['Vue', 'JavaScript', 'CSS', 'Node.js', 'TypeScript', 'React', 'Webpack', 'Git', 'HTTP', '算法', '设计模式', '前端架构']
    }
  },
  methods: {
    getRandomSize() {
      return Math.floor(Math.random() * 10 + 14) + 'px'
    }
  }
}
</script>

<style scoped>
.categories-page h1 {
  font-size: 28px;
  margin-bottom: 30px;
}
.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
}
.category-card {
  background: #fff;
  border-radius: 8px;
  padding: 30px 20px;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}
.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}
.category-icon {
  font-size: 40px;
  margin-bottom: 15px;
}
.category-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}
.category-card p {
  color: #999;
  font-size: 14px;
}
.tags-section h2 {
  font-size: 22px;
  margin-bottom: 20px;
}
.tags-cloud {
  background: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.tag {
  display: inline-block;
  margin: 5px 10px;
  color: #667eea;
  cursor: pointer;
  transition: color 0.3s;
}
.tag:hover {
  color: #764ba2;
}
</style>
