
  
  <script>
  export default {
    name: 'MathMessage',
  
    
    data() {
      return {
        name: 'Judit',
        age: 30,
        city: 'Barcelona'
      }
    },
  
    
    methods: {
      generateMessage() {
        return `Hola ${this.name}, tienes ${this.age} años y vives en ${this.city}.`
      }
    }
  }
  </script>

  <template>
    <div>
      
      <h2>El resultado de 2 + 2 es: {{ 2 + 2 }}</h2>
  
      
      <p>{{ generateMessage() }}</p>
    </div>
  </template>
  