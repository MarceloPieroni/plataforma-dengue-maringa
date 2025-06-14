<template>
  <section class="container py-4">
    <h2 class="text-success fw-bold text-center mb-3">Mapa Interativo de Risco</h2>
    <p class="text-center mb-4">Visualize as áreas com maior incidência de dengue em Maringá.</p>

    <div id="map" style="height: 500px;" class="rounded shadow"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import L from 'leaflet'

onMounted(() => {
  const map = L.map('map').setView([-23.420999, -51.933056], 13) // Coordenadas de Maringá

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map)

  const marcadores = [
    {
      nome: 'Zona 1 – Parque Avenida',
      obs: 'Acúmulo de lixo em terrenos baldios.',
      coords: [-23.4201, -51.9375]
    },
    {
      nome: 'Zona 5 – Jardim Alvorada',
      obs: 'Focos em calhas entupidas.',
      coords: [-23.4148, -51.9302]
    },
    {
      nome: 'Zona 8 – Vila Operária',
      obs: 'Fiscalização fraca, denúncias em andamento.',
      coords: [-23.4263, -51.9270]
    }
  ]

  marcadores.forEach(ponto => {
    L.marker(ponto.coords)
      .addTo(map)
      .bindPopup(`<strong>${ponto.nome}</strong><br>${ponto.obs}`)
  })
})
</script>

<style scoped>
#map {
  width: 100%;
}
</style>
