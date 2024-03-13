<template>
  <footer class="information-web">
    <div class="direction-web">
      <p>C/ de Mallorca, 401, L'Eixample, <br />Barcelona 08013</p>
    </div>

    <div class="items">      
      <div class="items-firts-line">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Linkedin.</a>
      </div>
    </div>
  </footer>
</template>

<style>
.information-web {
  background-color: #e5e5e5;
  width: 100%;
  max-width: 1100px;
  height: 50px;
  display: flex;
  margin: 0 auto;
  padding: 25px;
  justify-content: space-between;
  padding-top: 80px;
  align-items: center;
  padding-bottom: 50px;
  margin-top: 50px;
}

.direction-web {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #6b708d;
  font-size: 17px;
  padding-left: 25px;
}

.items {
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.items a {
  text-decoration: none;
  color: #6b708d;
  font-size: 17px;
  padding-left: 100px;
}

.items-firts-line,
.items-second-line {
  padding: 20px;
}

.information-mobile {
  display: none;
}
</style>
