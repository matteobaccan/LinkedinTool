<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold mb-6 text-center">Config</h2>
        <form @submit.prevent="saveConfig">
          <div class="mb-4">
            <label for="chatgptKey" class="block text-sm font-medium text-gray-700 mb-2">ChatGPT API Key</label>
            <input
              id="chatgptKey"
              v-model="chatgptKey"
              type="password"
              required
              class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
          </div>
          <button
            type="submit"
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Config
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        chatgptKey: ''
      }
    },
    mounted() {
      // Carica la chiave API salvata, se presente
      const savedKey = localStorage.getItem('chatgptKey')
      if (savedKey) {
        this.chatgptKey = savedKey
      }
    },
    methods: {
      saveConfig() {
        // Salva la chiave API nel localStorage
        localStorage.setItem('chatgptKey', this.chatgptKey)
        // Naviga alla pagina principale
        this.$router.push('/')
      }
    }
  }
  </script>