<script setup>
</script>


<template>
    <footer class="footer">
        <div class="footer-links">
            <a href="#">HOME</a>
            <span class="heart"> &#10084; </span>
            <a href="#">TEAM</a>
            <span class="heart"> &#10084; </span>
            <a href="#">SHOPS</a>
            <span class="heart"> &#10084; </span>
            <a href="#">CONTACT US</a>
        </div>
    </footer>
</template>



<style scoped>
.footer {
    width: 100%;
    min-width: 370px;
    height: auto;
    padding: 10px 30px;
    background-color: var(--light-blue);
    bottom: 0;
    left: 0;
    margin: 30px 0 0;

    .footer-links {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a, .heart {
        font-family: 'Poppins', serif;;
        text-decoration: none;
        color: var(--blue);
        font-size: 12px;

            a&:hover {
                color: var(--purple);
            }
        }
    }
}

</style>