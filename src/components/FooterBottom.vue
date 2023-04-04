<template>
  <div>
    <h1>Footer</h1>
    <ul>
      <li v-for="(post, id) in posts" :key="id">
        <h2>{{ post.title }}</h2>
        <h4>{{ post.description }}</h4>
        <p>{{ post.content }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterBottom',
  data() {
    return {
      posts: [
        {
          title: 'First Post',
          description: 'This is the first Post',
          content: 'Carefully written text for the first post'
        },
        {
          title: 'Second Post',
          description: 'This is the second Post',
          content: 'Carefully written text for the second post'
        },
        {
          title: 'Third Post',
          description: 'This is the third Post',
          content: 'Carefully written text for the third post'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
