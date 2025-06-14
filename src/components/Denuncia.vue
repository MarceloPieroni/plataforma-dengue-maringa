<template>
  <section class="container py-5">
    <h2 class="text-success fw-bold mb-4 text-center">Formulário de Denúncia</h2>

    <p class="text-center mb-4">
      Caso tenha identificado um local com possível foco de dengue, preencha o formulário abaixo. Sua contribuição é essencial para manter nossa cidade segura!
    </p>

    <form @submit.prevent="enviarDenuncia" class="mx-auto" style="max-width: 600px;">
      <div class="mb-3">
        <label for="nome" class="form-label">Seu nome</label>
        <input v-model="form.nome" type="text" class="form-control" id="nome" required>
      </div>

      <div class="mb-3">
        <label for="endereco" class="form-label">Endereço do foco</label>
        <input v-model="form.endereco" type="text" class="form-control" id="endereco" required>
      </div>

      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição do local</label>
        <textarea v-model="form.descricao" class="form-control" id="descricao" rows="3" required></textarea>
      </div>

      <div class="d-grid">
        <button type="submit" class="btn btn-success">Enviar Denúncia</button>
      </div>
    </form>

    <div v-if="sucesso" class="alert alert-success mt-4 text-center">
      🎉 Denúncia registrada com sucesso! Obrigado por contribuir.
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  nome: '',
  endereco: '',
  descricao: ''
})

const sucesso = ref(false)

function enviarDenuncia() {
  console.log('Denúncia enviada:', { ...form })
  sucesso.value = true
  setTimeout(() => {
    sucesso.value = false
    form.nome = ''
    form.endereco = ''
    form.descricao = ''
  }, 4000)
}
</script>
