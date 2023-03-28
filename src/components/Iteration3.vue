<template>
    <div>
        <h2>Iteration 3</h2>
        <p v-if="display">I'm displayed if it's true</p>
        <p v-else>I'm displayed if it's false</p>
        <button @click="display = !display" >Toggle</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            display: true,
        }
    }
}

</script>


<style scoped>
    div {
        background-color: cornflowerblue;
        padding: 10px;
    }

</style>



