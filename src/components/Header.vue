<template>
  <header class="header">
    <div class="header-content">
      <router-link to="/" class="logo">
        <h1>我的博客</h1>
      </router-link>
      <nav class="nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <router-link to="/articles" class="nav-link">文章</router-link>
        <router-link to="/categories" class="nav-link">分类</router-link>
        <router-link to="/about" class="nav-link">关于我</router-link>
        <router-link to="/guestbook" class="nav-link">留言板</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 15px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo h1 {
  color: #fff;
  font-size: 24px;
}
.nav {
  display: flex;
  gap: 25px;
}
.nav-link {
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s;
}
.nav-link:hover,
.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
}
</style>
