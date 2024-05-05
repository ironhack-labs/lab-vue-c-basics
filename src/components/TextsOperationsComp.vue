<script setup>
    import { reactive } from 'vue' 

    const objVoleiTeam = reactive({
      name: 'DSB',
      category: '3',
      players: [
        'p1',
        'p2',
        'p3',
        'p4',
        'p5',
        'p6'
      ],
      winner: true
    })

    function getNumberOfPlayers(objTeam) {
      return `The number of players of your team is ${objTeam.players.length}`
    }
</script>

<template>
  <p>The resulting operation for iteration 2.1 is: {{ 2+2 }}</p>
  <p>The resulting operation for iteration 2.2 is: {{ getNumberOfPlayers(objVoleiTeam) }}</p>
</template>
