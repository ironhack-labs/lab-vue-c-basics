<script setup>
</script>

<template>
  <header>
  </header>

  <main>
  <nav>
        <div id="navbar">
        <ul>
            <li>Home</li>
            <li>Proyects</li>
            <li>About Us</li>
        </ul>
        <button class="blue"> Buy Now </button>
        </div>
    </nav>

  </main>
</template>

<style scoped>

nav{
        background-color: #292E47;
        color: #F2F4FC;
        width: 100vw;
        height: 70px;
        position: fixed;
        display: flex;
        justify-content:center; 
        align-items: end;
        #navbar{
            height: 50%;
            width: 74vw;
            display: flex;
            justify-content: space-between;
            align-items: end;
        img {
            width:50px ;  
            padding-bottom: 1vw;      
                }
        ul{
            display: flex;
            justify-content: space-between;
            list-style: none;
            li{
                margin-left: 1.8vw;
                margin-right: 1.8vw;
                font-family: "Roboto";
                font-size: 16px;
                font-weight: 500;
                padding-bottom: 1vw;
            }
        
            a{
                text-decoration: none;
                color:var(--letra-);
                }
                .selected{
                    color:var(--azulfuerte-);
                      }
        }
        }
        button.blue{
        background-color: #6B708D;
        font-size: 16px;
        font-weight: 500;
        border-width: 1vw;
        border-style:solid;
        border-color: #6B708D;
        align-self: flex-end;
        white-space: nowrap;
        color:#ffff;
        a
        {
            text-decoration: none;
            color:#ffff
        }
        }
    }    

</style>
