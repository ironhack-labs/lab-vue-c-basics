<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/footer.vue'
import {reactive, computed} from 'vue'
import Mostrar from './components/mostar.vue'

const sumando = reactive({
  valor1:2, 
  valor2:2
}

)
const suma = computed(()=>{
  return sumando.valor1 + sumando.valor2
})

const dias = reactive([{
  id: 0,
  titulo: "Lunes",
  descripcion: "Este es el día más aburrido",
  texto: "Los lunes de vuelve al trabajdo despues, y se encuentra una larga lista de trabajo que aumento durante los días de descanso",
},
{
  id: 4,
  titulo: "Viernes",
  descripcion: "Podría ser el mejor día",
  texto: "Aún que aun hay que trabajar se trabaja con mejor actitud por la espectativa del finde y estas a punto de tenerlo todo controlado",
},
{
  id: 5,
  titulo: "Sabado",
  descripcion: "EL MEJOR DÍA",
  texto: "El dia de hacer planes, descansar y disfrutar",
}])

</script>


<template>
  <header>
  </header>

  <main>
  <Navbar></Navbar>
  <div>{{suma}}</div>
  <Mostrar></Mostrar>          
  <section v-for="dia of dias" :key="dia.id"> 
    <h3>{{dia.titulo}} </h3>
    <br>   {{dia.descripcion}} <br><br>   {{dia.texto}} <br>
  </section>
                    

  <Footer></Footer>

  </main>
</template>

<style scoped>
div{
  text-align: center;
  font-size: 40px;
  padding-top: 100px;
}
section{
  margin-left: 10vw;
  margin-top: 10vw;
  background-color:rgb(188, 193, 214);
  width: 15vw;
  height: 20vw;
  display:flex;
  flex-direction: column;
  align-content: space-around;
  justify-content: space-between;
  text-align: center;
}
</style>
