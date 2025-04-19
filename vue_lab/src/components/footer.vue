<script setup>

</script>

<template>
<footer>
        <div class="adress">
            <img src="./project-assets/logos/circle.svg" alt="circle-logo">
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
        </div>
        <div id="sitemap">
            <div class="columna">
                <p>Team</p>
                <p>Press</p>
            </div>
            <div class="columna">
                <p>Services</p>
                <p>Proyects</p>
            </div>
            <div class="columna">
                <p>About Us</p>
                <p>Privacy Policy</p>
            </div>
 
        </div>
    </footer>
</template>
<style scoped>
footer{
  padding-top: 10vw;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .adress{
            margin: 5vw;
            display: flex;
            flex-direction: column;
            width: 20vw;
            img {
                width:8vw;     
            }
        }
        #sitemap{
            display: flex;
            flex-direction: row;
            width: 35vw;
            .columna{
                width: 10vw;
                height: 15wv;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

        }
    }
</style>