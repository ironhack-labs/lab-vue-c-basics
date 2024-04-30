<script setup>


</script>

<template>
    <section>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
        
    </section>
</template>

<style scoped>
section{
    background-color: lightcoral;
    padding: 10px;
}
section ul{
    list-style-type: none;
    margin: 20px;
    padding: 0;
    overflow: hidden;
    display: flex;
    gap: 40px;
}
ul a{
    color: white;
    text-align: center;
    text-decoration: none;
}
</style>
