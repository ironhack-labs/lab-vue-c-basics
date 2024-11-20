<script setup>

</script>

<template>
  <footer>
    <div id="footer-wrapper">
      <div>
        <ul>
          <li>Terms & Services</li>
          <li>Policy Privacy</li>
          <li>About Us</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Legal</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
    <img src="/src/assets/images/vuejs.png">
  </footer> 
</template>

<style scoped>

footer {

  background-color: #283234;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 25px;
  padding-bottom: 25px;

}

footer img{
  width: 50px;
  height: 50px;
  -webkit-filter: grayscale(100%);
  opacity: 0.5;

}

footer #footer-wrapper {
  display: flex;
  flex-direction: row;
}

footer #footer-wrapper div:nth-of-type(1) {
  margin-right: 50px;
}

footer ul {
  color: white;
  list-style: none;
  display: flex;
  flex-direction: column;
  line-height: 25px;

}

footer li {
  color: #73878b;
  font-weight: 400;
}

footer li:hover {
  color: #c6dade;
  font-weight: 400;
}

@media (max-width: 780px) {

  footer{
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    padding-bottom: 25px;
  }

  footer #footer-wrapper {
    flex-direction: column;
    gap: 25px;
    text-align: center;
  }

  footer #footer-wrapper div:nth-of-type(1) {
    margin-right: 0px;
  } 

  footer img {
    margin-top: 50px;
  }
  
}
</style>

