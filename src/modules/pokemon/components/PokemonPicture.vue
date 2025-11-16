<!--crea un componente que se se busque la imagen de dreamwolrd de la api de pokemon e inserrtala en un img-->
<template>
  <section class="flex flex-col items-center justify-center w-full h-full">
    <img :src="image" alt="pokemon" class="w-1/2 h-1/2" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const image = ref(
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
);
</script>

<style scoped></style>
