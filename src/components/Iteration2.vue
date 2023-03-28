<template>
    <div>
        <h2>Iteration 2</h2>
        <p>Value:</p>
        <span>{{ value1 }}</span>
        <br>
        <input type="number" v-model="value1">
        <p>Value:</p>
        <span>{{ value2 }}</span>
        <br>
        <input type="number" v-model="value2">
        <p>Result</p>
        <span>{{ formatNumber(calculateResult) }}</span>
        <br>
        <button @click="changeNumbers">Change numbers</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value1: 0,
            value2: 0,
        }
    },
    computed: {
        calculateResult(){
            return this.value1 + this.value2
        }
    },
    methods : {
        formatNumber(number){
            return Number(number).toLocaleString();
        },

        changeNumbers(){
            this.value1 = Math.floor( Math.random() * 10);
            this. value2 = Math.floor( Math.random() * 10);
        }
    }

}

</script>

<style scoped>
    div {
        background-color:lightcyan;
        padding: 10px;
    }

    button {
        margin: 10px 0;
    }

    input {
        margin: 10px 0;
    }

</style>