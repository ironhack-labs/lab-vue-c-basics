<template>
    <div>
        <h2>Iteration 4</h2>
        <div v-for="post in posts">
            <h3>{{ post.title }}</h3>
            <span>{{ post.date }}</span>
            <p>{{ post.text }}</p>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return {
            posts: [
                {
                    title: 'Cats',
                    date: '13 June 2013',
                    text: "Pet my belly, you know you want to; seize the hand and shred it!.",
                },

                {
                    title: 'Gingerbread',
                    date: '04 April 2023',
                    text: "Gingerbread marzipan candy icing toffee jujubes cake chupa chups. Danish lollipop macaroon tiramisu croissant shortbread cake. Cookie candy canes biscuit jelly sesame snaps fruitcake tiramisu candy canes."
                },

                {
                    title: 'Cupcake',
                    date: '20 June 2012',
                    text: "Cupcake ipsum dolor sit amet. Tart candy canes gingerbread shortbread gummi bears donut. Chocolate bar I love jujubes gingerbread lollipop."
                }
            ]
        }
    }
}

</script>

<style scoped>
    div {
        background-color: lightpink;
        padding: 10px;
    }


</style>