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

      <!-- Main content -->
      <main class="flex-1 p-4 md:p-10 overflow-y-auto">
        <h1 class="text-2xl font-bold mb-5">Create Image</h1>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">Content on which to generate an image: maximum 1000 characters - the length of the prompt</label>
            <textarea v-model="post" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="4"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prompt</label>
            <textarea v-model="prompt" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              rows="4"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Result</label>
            <div v-if="result" class="mt-1 border border-gray-300 rounded-md p-2">
              <img :src="result" alt="Generated image" class="max-w-full h-auto">
            </div>
            <p v-else class="mt-1 text-gray-500">No image generated</p>
          </div>
          <button @click="generateImage"
            class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
            :disabled="isGenerating">
            {{ isGenerating ? 'Generating...' : 'Generate Image' }}
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
      prompt: `Create a corporate image, in 16:9 format, for this article.
If possible, make it less "aseptic" and more "personal". Prefer realism to spectacularity.`,
      result: '',
      isGenerating: false
    }
  },
  methods: {
    ...shared.methods,
    async generateImage() {
      const chatgptKey = localStorage.getItem('chatgptKey')
      if (!chatgptKey) {
        alert('Please make sure you have configured the API key');
        return;
      }

      if (!this.post || !this.prompt) {
        alert('Please fill in all fields.');
        return;
      }

      this.isGenerating = true;

      let promptParameter = `${this.prompt}\n\nArticle: ${this.post}`
      if( promptParameter.length > 1000 ) {
        promptParameter = promptParameter.substring(0, 1000);
      }

      try {
        const response = await axios.post('https://api.openai.com/v1/images/generations', {
          prompt: promptParameter,
          n: 1,
          size: "1792x1024",
          model: "dall-e-3",
          quality: "hd"
        }, {
          headers: {
            'Authorization': `Bearer ${chatgptKey}`,
            'Content-Type': 'application/json'
          }
        });

        this.result = response.data.data[0].url;
      } catch (error) {
        console.error('Error generating image:', error);
        alert('An error occurred while generating the image. Check the console for details.');
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
