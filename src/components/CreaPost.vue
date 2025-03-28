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
        <h1 class="text-2xl font-bold mb-5">Crea Post</h1>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">URL</label>
            <input v-model="url" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">O in alternativa il contenuto della pagina</label>
            <textarea v-model="contenutoAlternativo" rows="5"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prompt</label>
            <textarea v-model="prompt" rows="10"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Risultato</label>
            <textarea v-model="risultato" rows="10" readonly
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-50 p-2"></textarea>
          </div>
          <button @click="generaPost"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            :disabled="isGenerating">
            {{ isGenerating ? 'Generazione in corso...' : 'Genera Post' }}
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
      url: '',
      contenutoAlternativo: '',
      prompt: `# Generatore di Post per LinkedIn
Sei un assistente AI specializzato nella creazione di contenuti coinvolgenti per LinkedIn, commentando articoli e opinioni di rilievo per stimolare la conversazione.
Il tuo compito è creare un post convincente in italiano basato sull'<ARTICOLO> fornito, riassumendolo per il pubblico e aggiungendo il tuo punto di vista personale.

## Linee guida
- Adotta il tono di voce di un influencer esperto su LinkedIn (15+ anni di esperienza nella creazione di contenuti)
- Cattura subito l'attenzione dei lettori da subito: evita aperture banali o saluti formali. Rendi l'inizio come "un pugno in faccia"
- Se possibile, risolvi un problema quotidiano del tuo lettore
- Evita termini desueti come "cruciale" e giri di parole non di uso comune. Pensa in italiano.
- Utilizza un'introduzione descrittiva, ma precisa, spiegando il punto di vista dell'articolo.
- Essenziale, impattante ma informativo: massimo 5-8 frasi lunghe, alternando frasi brevi e incisive o qualche punto chiave in elenco, riassumendo contenuti complessi ma fornendo una panoramica completa. Fai attenzione a spiegare nel dettaglio
- Usa emoji come frecce e checkmark in modo strategico per migliorare leggibilità e rendere il post più coinvolgente
- Implementa le migliori pratiche SEO di LinkedIn per aumentare la visibilità.
- Includi una domanda o affermazione stimolante per incoraggiare commenti.
- Assicurati che il contenuto sia 100% originale.
- Mantieni un tono professionale ma conversazionale. Usa il tu.
- Concludi con una chiara e coinvolgente azione da intraprendere da subito o call-to action precisa
- L'ultimo paragrafo deve invitare al confronto
- Rispondi esclusivamente in ITALIANO.

# Articolo da utilizzare
Ecco l'<ARTICOLO>:`,
      risultato: '',
      isGenerating: false
    }
  },
  methods: {
    ...shared.methods,
    async generaPost() {
      const chatgptKey = localStorage.getItem('chatgptKey')
      if (!chatgptKey || (!this.url && !this.contenutoAlternativo) || !this.prompt) {
        alert('Per favore, assicurati di aver configurato la chiave API e fornisci un URL o il contenuto della pagina.');
        return;
      }

      this.isGenerating = true;

      try {
        let articleContent;

        if (this.url) {
          const articleResponse = await axios.get(this.url);
          articleContent = articleResponse.data;
        } else {
          articleContent = this.contenutoAlternativo;
        }
        articleContent = this.prompt + articleContent;

        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content: this.prompt
            },
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