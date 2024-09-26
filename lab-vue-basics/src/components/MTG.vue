<script setup>
import {ref} from 'vue'

const mtgCol = ref ([
  {
    expansion: "Odisea (Odyssey) - 2001",
    descripcion: "Una colección que explora el mundo de Otaria, donde los héroes enfrentan peligros y desafíos épicos.",
    numeroCartas: 350,
    personajePrincipal: "Kamahl"
  },
  {
    expansion: "Destino (Torment) - 2002",
    descripcion: "Una colección centrada en la oscuridad y la desesperación, donde las criaturas más siniestras acechan en la oscuridad.",
    numeroCartas: 143,
    personajePrincipal: "Braids"
  },
  {
    expansion: "Juicio (Judgment) - 2002",
    descripcion: "Una colección que explora el concepto de juicio y balance, con cartas que interactúan con los cementerios y promueven la estrategia de control.",
    numeroCartas: 143,
    personajePrincipal: "Akroma"
  },
  {
    expansion: "Legiones (Legions) - 2003",
    descripcion: "Una colección compuesta exclusivamente por criaturas, sin hechizos ni artefactos. Presenta la mecánica de criaturas con habilidades de fortaleza.",
    numeroCartas: 145,
    personajePrincipal: "Kamahl"
  },
  {
    expansion: "Escuderos de Kamigawa (Champions of Kamigawa) - 2004",
    descripcion: "Una colección inspirada en la mitología japonesa, con cartas que presentan samuráis, espíritus y criaturas míticas.",
    numeroCartas: 306,
    personajePrincipal: "Toshiro Umezawa"
  },
  {
    expansion: "Bokken (Betrayers of Kamigawa) - 2005",
    descripcion: "Una colección que sigue la historia de Kamigawa, presentando una guerra interna y el desequilibrio causado por los seres de la oscuridad.",
    numeroCartas: 165,
    personajePrincipal: "Toshiro Umezawa"
  },
  {
    expansion: "Savia (Saviors of Kamigawa) - 2005",
    descripcion: "El conflicto en Kamigawa llega a su clímax, con una batalla final entre los héroes y los villanos que determinará el destino del plano.",
    numeroCartas: 165,
    personajePrincipal: "Toshiro Umezawa"
  },
  {
    expansion: "Cicatrices de Mirrodin (Mirrodin) - 2003",
    descripcion: "Una colección que introduce el plano de Mirrodin, un mundo de metal donde las criaturas son forjadas en la misma esencia del plano.",
    numeroCartas: 306,
    personajePrincipal: "Karn"
  },
  {
    expansion: "Lágrimas de la piedra (Darksteel) - 2004",
    descripcion: "Una colección que continúa la historia de Mirrodin, presentando nuevas criaturas y artefactos poderosos forjados en darksteel.",
    numeroCartas: 165,
    personajePrincipal: "Glissa Sunseeker"
  },
  {
    expansion: "Salva (Fifth Dawn) - 2004",
    descripcion: "El desenlace de la historia de Mirrodin, donde se revela el verdadero propósito del plano y los héroes luchan contra el mal definitivo.",
    numeroCartas: 165,
    personajePrincipal: "Karn"
  }
]);

</script>

<template>
<section>
    <section>
    <h1> Tenemos Conexión</h1>
  </section>
    <ul>
      <li v-for="e in mtgCol" :key='e'> {{ e.personajePrincipal}} es prota en {{ e.expansion}}</li>
    </ul>
  </section>
  
</template>

<style scoped>
</style>
