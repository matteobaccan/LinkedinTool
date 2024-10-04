<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Menu laterale -->
    <aside class="w-64 bg-white shadow-md">
      <nav class="mt-5">
        <router-link to="/CreaPost" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Crea Post</router-link>
        <router-link to="/CreaImmagine" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Crea Immagine</router-link>
        <router-link to="/CreaCommento" class="block py-2 px-4 text-gray-700 hover:bg-gray-200">Crea Commento</router-link>
        <a @click="logout" class="block py-2 px-4 text-gray-700 hover:bg-gray-200 cursor-pointer">Logout</a>
      </nav>
    </aside>

    <!-- Contenuto principale -->
    <main class="flex-1 p-10">
      <h1 class="text-2xl font-bold mb-5">Crea Commento</h1>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">ChatGPT Key</label>
          <input v-model="chatgptKey" type="password" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm">
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Post</label>
          <textarea v-model="post" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Prompt</label>
          <textarea v-model="prompt" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Risultato</label>
          <textarea v-model="risultato" readonly class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-50"></textarea>
        </div>
        <button @click="generaCommento" class="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600">Genera Commento</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatgptKey: '',
      post: '',
      prompt: `# Generatore di Commenti per LinkedIn
Sei un assistente AI specializzato nella creazione di commenti coinvolgenti per post di LinkedIn.
Il tuo compito è creare un commento basato sull’<POST> fornito, aggiungendo un punto di vista non banale e POSITIVO.

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
      risultato: ''
    }
  },
  methods: {
    generaCommento() {
      // Implementa qui la logica per generare il commento
      console.log('Genera commento')
    },
    logout() {
      // Implementa qui la logica per il logout
      console.log('Logout')
      // this.$router.push('/login')
    }
  }
}
</script>
