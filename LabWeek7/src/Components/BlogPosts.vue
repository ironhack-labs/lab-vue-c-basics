<template>
  <div class="blog-posts">
    <h2>My Blog Posts</h2>
    
    <div v-for="(post, index) in posts" :key="index" class="post-card">
      <h3>{{ post.title }}</h3>
      <p class="description"><strong>Description:</strong> {{ post.description }}</p>
      <p class="content">{{ post.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPosts',
  data() {
    return {
      posts: [
        {
          title: "Getting Started with Vue.js",
          description: "A beginner's guide to Vue",
          content: "Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable."
        },
        {
          title: "Understanding Components",
          description: "Deep dive into Vue components",
          content: "Components are reusable Vue instances with a name. They can be used as custom elements inside the root Vue instance as well as inside other components."
        },
        {
          title: "Mastering Directives",
          description: "Learn about Vue directives",
          content: "Vue directives are special attributes with the v- prefix. They apply special reactive behavior to the rendered DOM."
        }
      ]
    }
  }
}
</script>

