<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2026 我的个人博客. All rights reserved.</p>
      <div class="social-links">
        <a href="#" title="GitHub">GitHub</a>
        <a href="#" title="Email">Email</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: #333;
  color: #fff;
  padding: 20px 0;
  margin-top: auto;
}
.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.social-links {
  display: flex;
  gap: 20px;
}
.social-links a {
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s;
}
.social-links a:hover {
  color: #fff;
}
</style>
