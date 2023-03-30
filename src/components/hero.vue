<template>
    <section>
        <div>
            <h3>Welcome back <span>{{ myName.name }}</span>!</h3>
            <div>    
                <button class="button" @click="toggleElement">Show habits: {{ myName.interest[4] }}</button>
                <button class="button" @click="openProject">Custom hide</button>
            </div>
        </div>
        <div div__ProfileInfoContainer>
            <div v-if="elementToToggle" class="div__Profile backgrnd--green">
                <h3>Your habit stack</h3>
                <div class="div__Panel--white">
                    <ul>
                        <li v-for="items in myName.courses" :key="items.course">{{ items.course }}</li>
                    </ul>
                </div>
            </div>
            <div class="div__Profile backgrnd--blue">
                <h3>{{"Total hours" + " " + su}} </h3>
                <div class="div__Panel--white">
                    <ul>
                        <li v-for="items in myName.courses" :key="items.course">{{ items.hours }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>




<script setup>
import { reactive , defineEmits, ref} from 'vue';

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

const elementToToggle = ref(false)

function toggleElement() {
    elementToToggle.value = !elementToToggle.value
}


const emit = defineEmits(['open-project'])

const openProject = () => {
    emit('open-project')
    console.log('Envio de evento')
}


</script>



<style scoped>
.button {
    border: none;
    border-radius: 15px;
    padding: 0px 5px;
    background-color: #41B883;
    color: white;
    font-size: 13px;
    height: 30px;
    margin: 5px;
}
span {
    font-weight: 600;
    font-size: 18px;
}

section {
    padding: 40px 70px;
    height: 400px;
}

div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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