<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Menu laterale -->
    <aside class="w-64 bg-white shadow-md">
      <nav class="mt-5">
        <router-link to="/CreaPost" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Crea Post</router-link>
        <router-link to="/CreaImmagine" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Crea Immagine</router-link>
        <router-link to="/CreaCommento" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Crea Commento</router-link>
        <router-link to="/Config" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Configurazione</router-link>
        <a @click="logout" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 cursor-pointer">Logout</a>
      </nav>
    </aside>
    <!-- Contenuto principale -->
    <main class="flex-1 p-10 overflow-y-auto">
      <h1 class="text-2xl font-bold mb-5">Crea Immagine</h1>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">ChatGPT Key</label>
          <input v-model="chatgptKey" type="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Post</label>
          <textarea v-model="post" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Prompt</label>
          <textarea v-model="prompt" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Risultato</label>
          <div v-if="risultato" class="mt-1 border border-gray-300 rounded-md p-2">
            <img :src="risultato" alt="Immagine generata" class="max-w-full h-auto">
          </div>
          <p v-else class="mt-1 text-gray-500">Nessuna immagine generata</p>
        </div>
        <button @click="generaImmagine" class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300" :disabled="isGenerating">
          {{ isGenerating ? 'Generazione in corso...' : 'Genera Immagine' }}
        </button>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      chatgptKey: '',
      post: '',
      prompt: `Crea una immagine corporate, in formato 16:9, per questo articolo.
Se possibile, rendila meno "asettica" e più "personale". prediligi la realisticità alla spettacolarità. `,
      risultato: '',
      isGenerating: false
    }
  },
  methods: {
    async generaImmagine() {
      if (!this.chatgptKey || !this.post || !this.prompt) {
        alert('Per favore, compila tutti i campi.');
        return;
      }

      this.isGenerating = true;

      try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', {
          prompt: `${this.prompt}\n\nArticolo: ${this.post}`,
          n: 1,
          size: "1024x1024"
        }, {
          headers: {
            'Authorization': `Bearer ${this.chatgptKey}`,
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
    },
    logout() {
      // Implementa qui la logica per il logout
      console.log('Logout');
      // Esempio: rimuovi il token di autenticazione dallo storage e reindirizza alla pagina di login
      localStorage.removeItem('authToken');
      this.$router.push('/login');
    }
  }
}
</script>