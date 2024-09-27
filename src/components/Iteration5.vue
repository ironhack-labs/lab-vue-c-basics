<template>
    <div :class="{'normal': myClass, 'changed': !myClass}">
        <h2>Itearation 5</h2>
        <button type="button" @click="toggleClass">Change style</button>
    </div>

</template>

<script>
export default {
    data() {
        return{
            myClass: true,
        }
    },

    methods: {
        toggleClass (){
            this.myClass= !this.myClass
        }
    }
}


</script>

<style scoped>
    .normal {
        padding: 10px;
        background-color: wheat;
    }

    .changed {
        padding: 10px;
        background-color:darkslateblue;
        color: white;
    }

</style>