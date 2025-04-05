<script setup>

</script>

<template>
    <footer>
        <div class="footer-warper">
            <!-- <div class="footer-logo">
                <img src="@/assets/logo.svg" alt="Logo" />
            </div> -->
            <ul class="footer-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </footer>
</template>



<style lang="css" scoped>
    .footer-warper{
        background-color: #333;
        color: white;
        padding: 20px;
        text-align: center;
        margin-top: 40px;
    }
    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    li{
        list-style: none;
    }
</style>