<template>
    <div>
        <h2>Iteration 2</h2>
        <p>Value:</p>
        <span>{{ value1 }}</span>
        <p>Value:</p>
        <span>{{ value2 }}</span>
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
            value1: 1,
            value2: 2,
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
            this.value1 = 5;
            this. value2 = 6;
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

</style>