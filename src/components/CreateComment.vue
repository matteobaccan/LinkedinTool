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
        <h1 class="text-2xl font-bold mb-5">Create Comment</h1>
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
            <label class="block text-sm font-medium text-gray-700">Result</label>
            <textarea v-model="result" rows="10" readonly
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-50"></textarea>
          </div>
          <button @click="generateComment"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            :disabled="isGenerating">
            {{ isGenerating ? 'Generating...' : 'Generate Comment' }}
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
      prompt: `# LinkedIn Comment Generator
You are an AI assistant specialized in creating engaging comments for LinkedIn posts.
Your task is to create a comment based on the provided <POST>, adding a non-trivial and POSITIVE point of view.
## Guidelines
- Adopt the tone of voice of an experienced LinkedIn influencer (15+ years of content creation experience)
- Immediately capture the author's attention with a thank you, a compliment, or some form of immediate attention: avoid trivial openings or formal greetings.
- Avoid obsolete terms and uncommon phrases. Think in English.
- Structure the text for quick reading: short and incisive sentences.
- Ensure the content is 100% original.
- Include a thought-provoking question or statement to encourage comments.
- Conclude with a clear and engaging call-to-action to invite discussion.
- Maintain a professional yet conversational tone. Use "you."
- Stay under 1000 characters.
- Respond exclusively in ENGLISH.
# Post to comment on
Here is the <POST> to comment on:`,
      result: '',
      isGenerating: false
    }
  },
  methods: {
    ...shared.methods,
    async generateComment() {
      const chatgptKey = localStorage.getItem('chatgptKey')
      if (!chatgptKey || !this.post || !this.prompt) {
        alert('Please make sure you have configured the API key and provided the page content.');
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

        this.result = response.data.choices[0].message.content;
      } catch (error) {
        console.error('Error generating post:', error);
        alert('An error occurred while generating the post. Check the console for details.');
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