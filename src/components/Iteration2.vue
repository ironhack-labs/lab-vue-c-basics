<template>
    <div>
        <h2>Iteration 2</h2>
        <p>Value:</p>
        <span>{{ value1 }}</span>
        <p>Value:</p>
        <span>{{ value2 }}</span>
        <p>Result</p>
        <span>{{ formatNumber(calculateResult) }}</span>
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
        }
    }

}

</script>

<style scoped>
    div {
        background-color:lightcyan;
        padding: 10px;
    }

</style>