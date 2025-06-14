<template>
  <section class="container py-5 text-center">
    <h1 class="display-5 fw-bold text-success mb-4">Bem-vindo à Conscientiza Maringá</h1>
    <p class="lead mb-4">
      Esta é uma iniciativa digital para educar, informar e mobilizar a população no combate à dengue e no cuidado com o meio ambiente.
    </p>
    <router-link to="/educacao" class="btn btn-success btn-lg px-4">
      Começar agora
    </router-link>
  </section>
</template>

<script setup>
// Nenhum script necessário por enquanto
</script>

<style scoped>
section {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
