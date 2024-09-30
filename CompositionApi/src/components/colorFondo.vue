<script setup>
  import { ref } from 'vue'; 
  const isActive = ref(false);
  function cambioColor() {
  isActive.value = !isActive.value;
}
  </script>
  <template>
    <div>
      <!-- Div que cambia su estilo dinámicamente -->
      <div :class="{'active': isActive, 'inactive': !isActive}" class="box">
    <p>Haz clic en el botón para cambiar el estilo</p>
  </div>
  
      <!-- Botón para cambiar el estilo -->
      <button @click="cambioColor">Cambiar estilo</button>
    </div>
  </template>
  <style scoped>
  /* Estilo base para la caja */
  .box {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 10px;
  }
  
  /* Clase cuando está activa */
  .active {
    background-color: rgb(77, 56, 187);
  }
  
  /* Clase cuando está inactiva */
  .inactive {
    background-color: rgb(223, 240, 128);
  }
  </style>
  