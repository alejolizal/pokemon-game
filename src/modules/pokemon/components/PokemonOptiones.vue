<template>
  <section class="flex justify-center items-center p-4 sm:p-8">
    <ul class="mt-5 flex flex-wrap justify-center gap-2 max-w-4xl">
      <li>Pokemon 1</li>
      <li>Pokemon 2</li>
      <li>Pokemon 3</li>
    </ul>
  </section>
</template>

<script setup lang="ts">

</script>

<style scoped>
ul li {
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin: 0;
  cursor: pointer;
  min-width: 8rem;
  text-align: center;
  transition: all 0.15s ease-in-out;
  flex: 1;
  max-width: 10rem;
}

ul li:hover {
  background-color: rgb(243 244 246);
}

@media (max-width: 640px) {
  ul li {
    min-width: 6rem;
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>
