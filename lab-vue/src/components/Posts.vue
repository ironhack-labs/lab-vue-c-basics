<script setup>
import { ref } from 'vue'
const posts = ref([
  {
    title: 'Vue 3 - The Composition API',
    description: 'Learn how to use Vue 3 with the new Composition API',
    content: 'The Composition API is a powerful feature introduced in Vue 3...'
  },
  {
    title: 'Understanding Reactivity in Vue',
    description: 'A deep dive into Vue’s reactivity system',
    content: 'Vue’s reactivity system is one of its core features, and it allows...'
  },
  {
    title: 'Building Components in Vue',
    description: 'Best practices for building reusable components',
    content: 'Components are the building blocks of Vue applications. They allow you to...'
  }
])
</script>


  <template>
  <section>
    <h2>List of Posts</h2>
    <ul class="post-list">
      <li v-for="(post, index) in posts" :key="index" class="post-item">
        <h3>{{ post.title }}</h3>
        <p><strong>Description:</strong> {{ post.description }}</p>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </section>
</template>


<style scoped>
.post-list {
  list-style: none;
  padding: 0;
}

.post-item {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
}

.post-item:hover {
  transform: translateY(-5px); /* Efecto de elevación al pasar el mouse */
}
</style>