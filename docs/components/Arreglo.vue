<template>
  <div>
    <h1>Este es un componente</h1>
    <ul>
      <li v-for="(item, index) in lista" :key="index">
        {{ item.nombre }} - {{ item.descripcion }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Arreglo',
    data() {
      return {
        lista: [
          { nombre: 'html', descripcion: 'Este es el curso de html' },
          { nombre: 'css', descripcion: 'Este es el curso de css' },
          { nombre: 'js', descripcion: 'Este es el curso de js' }
        ]
      }
    }
  }
</script>
