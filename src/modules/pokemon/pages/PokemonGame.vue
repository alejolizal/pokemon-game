<template>

  <!--
    ¿Se verá la section 2?
    Sí, la segunda section (con el h1 "¿Quien es ese pokemon?") siempre se verá,
    porque la primera tiene v-if="false" y por lo tanto nunca se mostrará.
    Por lo tanto, el usuario verá la sección del juego directamente.
  -->
  <section v-if="false" class="flex flex-col items-center justify-center w-full h-screen">
    <h1 class="m-5">Espere por Favor</h1>
    <h3 class="animate-pulse">Cargando lista de pokemones...</h3>
  </section>
  <section class="flex flex-col items-center justify-center w-full">
    <h1 class="m-5">¿Quien es ese pokemon?</h1>
    <pokemon-picture />

  </section>

</template>

<script setup lang="ts">
import PokemonPicture from '../components/PokemonPicture.vue';
</script>
<style scoped></style>
