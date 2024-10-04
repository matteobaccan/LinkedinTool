
<template>
  <div>
    <h2>Chat con GPT</h2>
    <textarea v-model="userInput" placeholder="Inserisci il tuo testo qui"></textarea>
    <button @click="sendToChatGPT">Invia a ChatGPT</button>
    <div v-if="response">
      <h3>Risposta di ChatGPT:</h3>
      <p>{{ response }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      response: ''
    }
  },
  methods: {
    async sendToChatGPT() {
      // Qui dovresti implementare la chiamata all'API di ChatGPT
      // Per ora, simuliamo una risposta
      this.response = `Risposta simulata a: ${this.userInput}`

      // Esempio di come potrebbe essere la vera chiamata API:
      // const response = await fetch('URL_API_CHATGPT', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': 'Bearer TUO_TOKEN_API'
      //   },
      //   body: JSON.stringify({ prompt: this.userInput })
      // })
      // const data = await response.json()
      // this.response = data.choices[0].text
    }
  }
}
</script>
