<template>
    <section>
        <div>
            <p>Welcome back <span>{{ myName.name }}</span>!</p>
            <p class="counterBox">Keep the habit: <span>{{ myName.interest[4] }}</span></p>
        </div>
        <div div__ProfileInfoContainer>
            <div class="div__Profile backgrnd--green">
                <h3>Your habit stack</h3>
                <div class="div__Panel--white">
                    <ul>
                        <li v-for="items in myName.courses">{{ items.course }}</li>
                    </ul>
                </div>
            </div>
            <div class="div__Profile backgrnd--blue">
                <h3>{{ "Total hours" + }} </h3>
                <div class="div__Panel--white">
                    <ul>
                        <li v-for="items in myName.courses">{{ items.hours }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue';

const myName = reactive({
    name: 'Yasser',
    age: 25,
    interest: [
        'Reading',
        'Cooking',
        'Mountains',
        'Sports',
        'Coding'
    ],
    courses: [
        { course: 'JavaScript', hours: 10 },
        { course: 'Node.js', hours: 8 },
        { course: 'UX-UI', hours: 3 },
        { course: 'Vue.js', hours: 7 }
    ]
})
/* const totalHours = () => {
    let count = 0
    myName.courses.forEach(element => {
        count += element.course
    });
    console.log(count)
    return count
} 

</script>


<style scoped>
span {
    font-weight: 600;
}

section {
    padding: 40px 70px;
    height: max-content;
}

div {
    display: flex;
    justify-content: space-between;
}

.counterBox {
    background-color: rgb(20, 162, 60);
    color: white;
    text-align: center;
    width: 200px;
    border-radius: 15px;
}

.div__ProfileInfoContainer {
    display: flex;
    justify-content: center;
}

.div__Profile {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px 20px;
    border-radius: 15px;
}

.backgrnd--blue {
    background-color: #34495E;
    color: white;
}

.backgrnd--green {
    background-color: #41B883;
}

.div__Panel--white {
    width: 100%;
    background-color: whitesmoke;
    border-radius: 15px;
    color: black;
}
</style>