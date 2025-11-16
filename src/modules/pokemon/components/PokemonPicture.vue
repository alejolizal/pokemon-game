<!--crea un componente que se se busque la imagen de dreamwolrd de la api de pokemon e inserrtala en un img-->
<template>
  <section class="flex flex-col items-center justify-center w-full h-full">
    <img :src="image" alt="pokemon" class="brightness-0" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const image = ref(
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
);
</script>

<style scoped>
/*que la imagen no sea seleccionable*/
img {
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
}
</style>
