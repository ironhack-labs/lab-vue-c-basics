<script setup>
import { ref } from 'vue';

const list= ref([
    { 
        title:'Publicacion 1',
        description:'Descripcion 1',
        content:'Contenido 1'
    },
    {
        title:'Publicacion 2',
        description:'Descripcion 2',
        content:'Contenido 2'
    },
    {
        title:'Publicacion 3',
        description:'Descripcion 3',
        content:'Contenido 3'
    },
    {
        title:'Publicacion 4',
        description:'Descripcion 4',
        content:'Contenido 4'
    }    
])

</script>

<template>
  
    <div class="list-box">
        <h2 class="box-title"> Lista de Publicaciones hecha con v-for</h2>
        <ul>
        <li class="list-element" v-for="(publication, index) in list" :key="index">
            <h3 class="publication-title">{{publication.title}}</h3>
            <p class="publication-description">{{publication.description}}</p>
            <p class="publication-content">{{publication.content}}</p>
        </li>
    </ul>
    </div>
  
</template>

<style scoped>
    .list-box {
  width: 500px;
  height: 500px;
  border: 2px solid var(--vt-c-green);
  border-radius: 10px;
  margin: 10px;
}
.box-title{
    text-align: center;
}
.list-element {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: 2px solid var(--vt-c-green);
    border-radius: 10px;
    margin: 10px;
}

.publication-title {
    font-size: 20px;
}
</style>