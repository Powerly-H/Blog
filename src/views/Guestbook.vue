<template>
  <div class="guestbook-page">
    <h1>留言板</h1>
    <div class="guestbook-content">
      <div class="message-form">
        <h2>发表留言</h2>
        <form @submit.prevent="submitMessage">
          <div class="form-group">
            <label>昵称</label>
            <input v-model="form.name" type="text" placeholder="请输入昵称" required />
          </div>
          <div class="form-group">
            <label>留言内容</label>
            <textarea v-model="form.content" placeholder="请输入留言内容..." required></textarea>
          </div>
          <button type="submit" class="submit-btn">提交留言</button>
        </form>
      </div>
      <div class="messages-list">
        <h2>留言列表 ({{ messages.length }})</h2>
        <div v-if="messages.length === 0" class="empty">暂无留言，快来抢沙发吧~</div>
        <div v-for="msg in messages" :key="msg.id" class="message-item">
          <div class="message-avatar">{{ msg.name.charAt(0).toUpperCase() }}</div>
          <div class="message-body">
            <div class="message-header">
              <span class="message-name">{{ msg.name }}</span>
              <span class="message-time">{{ msg.time }}</span>
            </div>
            <p class="message-content">{{ msg.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guestbook',
  data() {
    return {
      form: {
        name: '',
        content: ''
      },
      messages: [
        { id: 1, name: '小明', content: '博客写得很好，学到了很多！', time: '2026-05-25 14:30' },
        { id: 2, name: 'Coder', content: '感谢分享，期待更多精彩文章！', time: '2026-05-24 10:15' }
      ]
    }
  },
  methods: {
    submitMessage() {
      const now = new Date()
      const time = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
      this.messages.unshift({
        id: Date.now(),
        name: this.form.name,
        content: this.form.content,
        time
      })
      this.form.name = ''
      this.form.content = ''
    }
  }
}
</script>

<style scoped>
.guestbook-page h1 {
  font-size: 28px;
  margin-bottom: 30px;
}
.guestbook-content {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 30px;
}
.message-form {
  background: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  height: fit-content;
}
.message-form h2 {
  font-size: 18px;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s;
}
.form-group input:focus,
.form-group textarea:focus {
  border-color: #667eea;
  outline: none;
}
.form-group textarea {
  height: 120px;
  resize: vertical;
}
.submit-btn {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  border-radius: 4px;
  font-size: 16px;
  transition: opacity 0.3s;
}
.submit-btn:hover {
  opacity: 0.9;
}
.messages-list {
  background: #fff;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
.messages-list h2 {
  font-size: 18px;
  margin-bottom: 20px;
}
.empty {
  text-align: center;
  color: #999;
  padding: 40px 0;
}
.message-item {
  display: flex;
  gap: 15px;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}
.message-item:last-child {
  border-bottom: none;
}
.message-avatar {
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  flex-shrink: 0;
}
.message-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
.message-name {
  font-weight: bold;
}
.message-time {
  color: #999;
  font-size: 12px;
}
.message-content {
  color: #666;
  line-height: 1.6;
}
</style>
