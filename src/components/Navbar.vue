<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success px-4">
    <a class="navbar-brand fw-bold" href="#">Conscientiza</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item" v-for="(route, i) in routes" :key="i">
          <router-link class="nav-link" :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const routes = [
  { name: 'Início', path: '/' },
  { name: 'Educação', path: '/educacao' },
  { name: 'Mapa', path: '/mapa' },
  { name: 'Denúncia', path: '/denuncia' },
  { name: 'Gamificação', path: '/gamificacao' }
]
</script>