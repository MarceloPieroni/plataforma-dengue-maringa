<template>
  <section class="container py-5 text-center">
    <h2 class="text-success fw-bold mb-4">Gamificação</h2>
    <p class="mb-4">
      Aqui você pode conquistar o selo simbólico de <strong>"Cidadão Consciente"</strong>, reconhecendo sua participação no combate à dengue e cuidado ambiental.
    </p>

    <button 
      class="btn btn-outline-success mb-4" 
      @click="conquistarSelo"
      :disabled="seloConquistado"
    >
      {{ seloConquistado ? '✔ Selo Conquistado' : 'Conquistar Selo' }}
    </button>

    <div v-if="seloConquistado" class="card border-success shadow-sm mx-auto" style="max-width: 400px;">
      <div class="card-body">
        <h4 class="card-title text-success fw-bold">🎖 Cidadão Consciente</h4>
        <p class="card-text">Parabéns! Você demonstrou seu compromisso com a cidade e o meio ambiente.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const seloConquistado = ref(false)

onMounted(() => {
  seloConquistado.value = localStorage.getItem('selo') === 'true'
})

function conquistarSelo() {
  seloConquistado.value = true
  localStorage.setItem('selo', 'true')
}
</script>
