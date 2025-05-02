<template>
  <div class="flex flex-col h-screen bg-gray-100">
    <!-- Header per schermi piccoli -->
    <header class="md:hidden bg-white shadow-md p-4">
      <button @click="toggleMenu" class="text-gray-700">
        ☰
      </button>
    </header>

    <div class="flex flex-1 overflow-hidden">
      <!-- Aside component -->
      <Aside :isOpen="isMenuOpen" @toggle="toggleMenu" class="flex-shrink-0 h-full overflow-y-auto" />

      <!-- Contenuto principale -->
      <main class="flex-1 p-4 md:p-10 overflow-y-auto">
        <h1 class="text-2xl font-bold mb-5">Crea Immagine</h1>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Contenuto sul quale generare una immagine: al massimo 1000 caratteri - la lunghezza del prompt</label>
            <textarea v-model="post" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="4"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prompt</label>
            <textarea v-model="prompt" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="4"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Risultato</label>
            <div v-if="risultato" class="mt-1 border border-gray-300 rounded-md p-2">
              <img :src="risultato" alt="Immagine generata" class="max-w-full h-auto">
            </div>
            <p v-else class="mt-1 text-gray-500">Nessuna immagine generata</p>
          </div>
          <button @click="generaImmagine"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
            :disabled="isGenerating">
            {{ isGenerating ? 'Generazione in corso...' : 'Genera Immagine' }}
          </button>
        </div>
      </main>
    </div>
    <Footer/>
  </div>
</template>

<script>
import shared from "./shared.js";
import axios from 'axios';

export default {
  ...shared,
  data() {
    return {
      ...shared.data(),
      post: '',
      prompt: `Crea una immagine corporate, in formato 16:9, per questo articolo.
Se possibile, rendila meno "asettica" e più "personale". prediligi la realisticità alla spettacolarità. `,
      risultato: '',
      isGenerating: false
    }
  },
  methods: {
    ...shared.methods,
    async generaImmagine() {
      const chatgptKey = localStorage.getItem('chatgptKey')
      if (!chatgptKey) {
        alert('Per favore, assicurati di aver configurato la chiave API');
        return;
      }

      if (!this.post || !this.prompt) {
        alert('Per favore, compila tutti i campi.');
        return;
      }

      this.isGenerating = true;

      let promptParameter = `${this.prompt}\n\nArticolo: ${this.post}`
      if( promptParameter.length > 1000 ) {
        promptParameter = promptParameter.substring(0, 1000);
      }

      try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', {
          prompt: promptParameter,
          n: 1,
          size: "1536x1024",
          model: "gpt-image-1",
          quality: "medium",
          format: "webp"
        }, {
          headers: {
            'Authorization': `Bearer ${chatgptKey}`,
            'Content-Type': 'application/json'
          }
        });

        this.risultato = response.data.data[0].url;
      } catch (error) {
        console.error('Errore nella generazione dell\'immagine:', error);
        alert('Si è verificato un errore durante la generazione dell\'immagine. Controlla la console per i dettagli.');
      } finally {
        this.isGenerating = false;
      }
    }
  }
};
</script>


<style scoped>
@media (max-width: 767px) {
  .flex-col {
    display: block;
  }

  .flex-1 {
    height: calc(100vh - 112px);
    /* Altezza dello schermo meno l'altezza dell'header */
  }

  .flex-2 {
    height: 56px;
  }
}
</style>
