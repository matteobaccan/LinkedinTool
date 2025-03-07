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
        <h1 class="text-2xl font-bold mb-5">Crea Commento</h1>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Post</label>
            <textarea v-model="post" rows="10"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prompt</label>
            <textarea v-model="prompt" rows="10"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Risultato</label>
            <textarea v-model="risultato" rows="10" readonly
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-50"></textarea>
          </div>
          <button @click="generaCommento"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            :disabled="isGenerating">
            {{ isGenerating ? 'Generazione in corso...' : 'Genera Commento' }}
          </button>
        </div>
      </main>
    </div>
    <!-- Footer -->
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
      prompt: `# Generatore di Commenti per LinkedIn
Sei un assistente AI specializzato nella creazione di commenti coinvolgenti per post di LinkedIn.
Il tuo compito è creare un commento basato sul <POST> fornito, aggiungendo un punto di vista non banale e POSITIVO.
## Linee guida
- Adotta il tono di voce di un influencer esperto su LinkedIn (15+ anni di esperienza nella creazione di contenuti)
- Cattura subito l'attenzione dell'autore con un ringraziamento, un complimento o comunque una forma di attenzione da subito: evita aperture banali o saluti formali.
- Evita termini desueti come "cruciale" e giri di parole non di uso comune. Pensa in italiano.
- Struttura il testo per una lettura rapida: frasi brevi e incisive.
- Assicurati che il contenuto sia 100% originale.
- Includi una domanda o affermazione stimolante per incoraggiare commenti.
- Concludi con una chiara e coinvolgente azione da intraprendere da subito o call-to action precisa per invitare al confronto
- Mantieni un tono professionale ma conversazionale. Usa il tu
- Rimani al di sotto delle 1000 battute.
- Rispondi esclusivamente in ITALIANO.
# Post da commentare
Ecco il <POST> da commentare:`,
      risultato: '',
      isGenerating: false
    }
  },
  methods: {
    ...shared.methods,
    async generaCommento() {
      const chatgptKey = localStorage.getItem('chatgptKey')
      if (!chatgptKey || !this.post || !this.prompt) {
        alert('Per favore, assicurati di aver configurato la chiave API e fornisci il contenuto della pagina.');
        return;
      }

      this.isGenerating = true;

      try {
        let articleContent = this.prompt + this.post;

        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: "gpt-4o",
          messages: [
            {
              role: "user",
              content: articleContent
            }
          ]
        }, {
          headers: {
            'Authorization': `Bearer ${chatgptKey}`,
            'Content-Type': 'application/json'
          }
        });

        this.risultato = response.data.choices[0].message.content;
      } catch (error) {
        console.error('Errore nella generazione del post:', error);
        alert('Si è verificato un errore durante la generazione del post. Controlla la console per i dettagli.');
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