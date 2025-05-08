<script setup>
import {ref} from 'vue'
//ITERACION 2: Creación de variables reactivas y funciones
// creacion de variables reactivas, en este caso se crean dos variables reactivas, name y age, que se inicializan con valores vacíos
const name = ref('Fer')
const age = ref(29)
// funcion que se ejecuta las variables reactivas
function message() {
    // se devuelve un string que incluye los valores de las variables reactivas name y age
    return `Hola, soy ${name.value} y tengo ${age.value} años`
}
//ITERACION 3: Creación variable booleana
// variable booleana que se inicializa en true
const showMessage = ref(false)
// ITERACION 4: Uso de v-for, creación de un array de objetos
const listOfPost = ref([
    {
    title: 'Post 1',
    description: ' El post 1 es color amarillo',
    content: 'Contenido del post 1'
    },
    {
    title: 'Post 2',
    description: 'El post 2 es color verde',
    content: 'Contenido del post 2'
    },
    {
    title: 'Post 3',
    description: 'El post 3 es color azul',
    content: 'Contenido del post 3'
    },
    {
    title: 'Post 4',
    description: 'El post 4 es color rojo',
    content: 'Contenido del post 4'
    },
])
// INTERACION 5: CREAR BOTON QUE CAMBIE COLOR DE UN ELEMENTO
const isActive = ref(false) //Variable reactiva para controlar si el fondo está activo o no
const changeColor = () => {
    isActive.value = !isActive.value // Cambia el valor de isActive al hacer clic en el botón "!isActive.value" INVIERTE EL VALOR que si isActive es true, se convierte en false y viceversa
}

</script>

<template>
    <div>
        <div>
            <h4>Interacción 2.1</h4>
            <p> Cuanto es 2 + 2 = {{ 2 + 2 }} </p>
            <h4>Interacción 2.2</h4>
            <p>{{ message() }}</p>
        </div>
        <div>
            <h4>Interacción 3</h4>
            <p v-if="showMessage">Este mensaje solo aparace SI la variable boleana es TRUE</p>
            <p v-else>Este mensaje solo aparace SI la variable boleana es FALSE</p>
        </div>
        <div>
            <h4>Interacción 4</h4>
            <ul>
                <li v-for="(post, index) in listOfPost" :key="index"> <!-- v-for se utiliza para iterar sobre el array listOfPost y crear un elemento <li> para cada objeto en el array -->
                    <!-- :key se utiliza para asignar una clave única a cada elemento de la lista, lo que ayuda a Vue a identificar y optimizar el renderizado de los elementos -->
                    <h6>{{ post.title }}</h6>
                    <p>{{ post.description }}</p>
                    <p>{{ post.content }}</p>
                </li>
           </ul>
        </div>
        <div>
            <h4>Interacción 5</h4>
            <button @click="changeColor">Cambiar color </button> <!-- al hacer clic en el botón, se cambia el valor de la variable isActive de true a false -->
            <div :class="{ 'active': isActive }" class="container">Este texto cambia de color</div> <!-- se utiliza la directiva :class = v-bind:class para aplicar una clase CSS condicionalmente, dependiendo del valor de la variable isActive -->  
        </div>
    </div>
</template>

<style scoped>
h4 {
    color: white;
    font-size: 1.2em;
    margin-bottom: 10px;
}
.container {
    width: 200px;
    height: 200px;
    background-color: blue;
    margin-bottom: 10px;
}
.active {
    background-color: red; /* Cambia el color de fondo a rojo cuando isActive es true */
}

</style>