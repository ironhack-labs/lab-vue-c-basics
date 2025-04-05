<script setup>
import { reactive } from 'vue';
import image1 from '@/assets/unicorn-cake-a.jpg';
import image2 from '@/assets/unicorn-cake-b.jpg';
import image3 from '@/assets/unicorn-cake-c.jpg';



const posts = reactive([
    {
        id: 1,
        icon: image1,
        title: 'The Adorable Cake',
        description: 'Keep it simple and irresistible!',
        content: '1 layer cake with meringue decorations and sugar toppings'
    },
    {
        id: 2,
        icon: image2,
        title: 'The Colorful Cake',
        description: 'The more colors, the more fun the party will be!',
        content: '2 layer cake covered with colorful fondant and buttercream decorations'

    },
    {
        id: 3,
        icon: image3,
        title: 'The Rainbow Cake',
        description: 'The dream cake that comes true!',
        content: '3 layer cake covered with the sweetest unicorns, clouds and rainbows'
    },
])

</script>


<template>

    <section class="postsSection">
        <div v-for="post of posts" :key="post.id" class="post-item">

            <div class="img-frame">
                <img :src="post.icon">
            </div>

            <div class="text-frame">
                <h3>{{ post.title }}</h3>
                <h6>{{ post.description }}</h6>
                <p>{{ post.content }}</p>
            </div>
    
                    
        </div>
        
    </section>

</template>


<style scoped>
.postsSection {
    width: 100%;
    height: auto;
    padding: 10px 10px 30px;
    background-color: var(--purple);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;

    .post-item {
        width: 120px;
        height: auto;
        min-height: 406px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        gap: 5px;

        img {
            width: 100%;
            height: auto;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
        }

        .text-frame {
            width: auto;
            height: auto;
            max-width: 140px;
            min-height: 260px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;

            h3 {
                color: var(--mauve);
                font-family: "Abril Fatface", serif;
                min-height: 78px;
                width: 100%
            }

            h6 {
                color: var(--pink);
                font-family: "Poppins", sans-serif;
                font-size: 13px;
                font-weight: 400;
                min-height: 78px;
            }

            p {
                color: var(--blue);
                font-family: "Poppins", sans-serif;
                font-size: 11px;
            }
        }

    }
}

</style>