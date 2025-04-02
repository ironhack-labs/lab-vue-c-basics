<script setup>
import { reactive } from 'vue';
import image1 from '@/assets/unicorn-cake-1.jpg';
import image2 from '@/assets/unicorn-cake-2.jpg';
import image3 from '@/assets/unicorn-cake-3.jpg';



const posts = reactive([
    {
        id: 1,
        icon: image1,
        title: 'The Cutie Cake',
        description: 'Keep it simple and irresistible!',
        content: '1-layer cake covered with white fondant and buttercream decorations'
    },
    {
        id: 2,
        icon: image2,
        title: 'The Colorful Cake',
        description: 'The more colors, the more fun the party will be!',
        content: '3-layer cake covered with pastel colorful fondant and decoration'

    },
    {
        id: 3,
        icon: image3,
        title: 'The Rainbow Cake',
        description: 'The dream cake that comes true',
        content: '3-layer cake and sugar unicorn puppet at top, covered with the sweetest rainbow, stars and clouds'
    },
])

</script>


<template>

    <section class="postsSection">
        <div v-for="post of posts" :key="post.id" class="post-item">

            <div class="img-frame">
                <img :src="post.icon">
            </div>
    
            <h3>{{ post.title }}</h3>
            <h6>{{ post.description }}</h6>
            <p>{{ post.content }}</p>
                    
        </div>
        
    </section>

</template>


<style scoped>
.postsSection {
    width: 100%;
    height: auto;
    padding: 10px 20px 30px;
    background-color: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;

    .post-item {
        width: auto;
        height: auto;
        max-width: 320px;
        min-height: 493px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: relative;
        gap: 20px;

        img {
            width: 100%;
            max-width: 250px;
            height: auto;
        }

        h3 {
            color: var(--mauve);
            font-family: "Abril Fatface", serif;
            text-align: center;
        }

        h6 {
            color: var(--pink);
            font-family: "Poppins", sans-serif;
            text-align: center;
            font-size: 13px;
        }

        p {
            color: var(--blue);
            font-family: "Poppins", sans-serif;
            text-align: center;
            font-size: 11px;
        }
    }
}

</style>