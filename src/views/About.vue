<template>
  <div class="about-page">
    <div class="about-header">
      <div class="avatar">👨‍💻</div>
      <h1>关于我</h1>
      <p class="subtitle">一名热爱编程的前端开发者</p>
    </div>
    <div class="about-content">
      <section class="intro">
        <h2>个人简介</h2>
        <p>大家好，欢迎来到我的个人博客！我是一名前端开发工程师，主要使用 Vue、React 等现代前端框架进行开发。</p>
        <p>在这里，我会分享我的技术学习心得、项目经验以及对前端技术的一些思考。希望我的文章能对你有所帮助。</p>
      </section>
      <section class="skills">
        <h2>技能清单</h2>
        <div class="skill-list">
          <div class="skill-item" v-for="skill in skills" :key="skill.name">
            <span class="skill-name">{{ skill.name }}</span>
            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: skill.level + '%' }"></div>
            </div>
            <span class="skill-level">{{ skill.level }}%</span>
          </div>
        </div>
      </section>
      <section class="contact">
        <h2>联系方式</h2>
        <div class="contact-list">
          <div class="contact-item">
            <span class="label">Email:</span>
            <span>example@email.com</span>
          </div>
          <div class="contact-item">
            <span class="label">GitHub:</span>
            <a href="#">github.com/username</a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      skills: [
        { name: 'Vue.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'CSS', level: 80 },
        { name: 'React', level: 70 },
        { name: 'Node.js', level: 65 },
        { name: 'TypeScript', level: 75 }
      ]
    }
  }
}
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 0 auto;
}
.about-header {
  text-align: center;
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 8px;
  color: #fff;
  margin-bottom: 30px;
}
.avatar {
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50%;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}
.about-header h1 {
  font-size: 28px;
  margin-bottom: 10px;
}
.subtitle {
  opacity: 0.9;
}
.about-content {
  background: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
section {
  margin-bottom: 40px;
}
section:last-child {
  margin-bottom: 0;
}
h2 {
  font-size: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
}
.intro p {
  color: #666;
  line-height: 1.8;
  margin-bottom: 15px;
}
.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.skill-name {
  width: 100px;
  font-size: 14px;
}
.skill-bar {
  flex: 1;
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  margin: 0 15px;
}
.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}
.skill-level {
  width: 40px;
  font-size: 14px;
  color: #666;
}
.contact-item {
  margin-bottom: 15px;
}
.contact-item .label {
  font-weight: bold;
  margin-right: 10px;
}
.contact-item a {
  color: #667eea;
}
</style>
