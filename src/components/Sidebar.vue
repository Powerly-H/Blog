<template>
  <aside class="sidebar">
    <div class="sidebar-section">
      <h3>博主简介</h3>
      <div class="author-info">
        <div class="avatar">👤</div>
        <p class="author-name">博主</p>
        <p class="author-desc">热爱编程，分享技术</p>
      </div>
    </div>
    <div class="sidebar-section">
      <h3>热门标签</h3>
      <div class="tags">
        <span class="tag" v-for="tag in tags" :key="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="sidebar-section">
      <h3>友情链接</h3>
      <div class="links">
        <a :href="link.url" target="_blank" v-for="link in links" :key="link.name">{{ link.name }}</a>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      tags: ['Vue', 'JavaScript', 'CSS', 'Node.js', 'TypeScript'],
      links: [
        { name: 'Vue官网', url: 'https://vuejs.org' },
        { name: 'MDN', url: 'https://developer.mozilla.org' }
      ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: 280px;
}
.sidebar-section {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.sidebar-section h3 {
  font-size: 16px;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
}
.author-info {
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}
.author-name {
  font-weight: bold;
  margin-bottom: 5px;
}
.author-desc {
  color: #666;
  font-size: 14px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.tag {
  background: #f0f0f0;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 13px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}
.tag:hover {
  background: #667eea;
  color: #fff;
}
.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.links a {
  color: #667eea;
  font-size: 14px;
}
.links a:hover {
  text-decoration: underline;
}
</style>
