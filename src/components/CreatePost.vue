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
        <h1 class="text-2xl font-bold mb-5">Create Post</h1>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700">URL</label>
            <input v-model="url" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Or alternatively the page content</label>
            <textarea v-model="alternativeContent" rows="5"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Prompt</label>
            <textarea v-model="prompt" rows="10"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Result</label>
            <textarea v-model="result" rows="10" readonly
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-50 p-2"></textarea>
          </div>
          <button @click="generatePost"
            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-blue-300"
            :disabled="isGenerating">
            {{ isGenerating ? 'Generating...' : 'Generate Post' }}
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
      alternativeContent: '',
      prompt: `# LinkedIn Post Generator
You are an AI assistant specialized in creating engaging content for LinkedIn, commenting on relevant articles and opinions to stimulate conversation.
Your task is to create a compelling post in English based on the provided <ARTICLE>, summarizing it for the audience and adding your personal point of view.

## Guidelines
- Adopt the tone of voice of an experienced LinkedIn influencer (15+ years of content creation experience)
- Capture the readers' attention immediately: avoid trivial openings or formal greetings. Make the beginning like "a punch in the face"
- If possible, solve a daily problem for your reader
- Avoid obsolete terms and uncommon phrases. Think in English.
- Use a descriptive but precise introduction, explaining the article's point of view.
- Essential, impactful but informative: maximum 5-8 long sentences, alternating short and incisive sentences or some key points in a list, summarizing complex content but providing a complete overview. Be careful to explain in detail
- Use emojis like arrows and checkmarks strategically to improve readability and make the post more engaging
- Implement LinkedIn SEO best practices to increase visibility.
- Include a thought-provoking question or statement to encourage comments.
- Ensure the content is 100% original.
- Maintain a professional yet conversational tone. Use "you".
- Conclude with a clear and engaging call-to-action
- The last paragraph should invite discussion
- Respond exclusively in ENGLISH.

# Article to use
Here is the <ARTICLE>:`,
      result: '',
      isGenerating: false
    }
  },
  methods: {
    ...shared.methods,
    async generatePost() {
      const chatgptKey = localStorage.getItem('chatgptKey')
      if (!chatgptKey || (!this.url && !this.alternativeContent) || !this.prompt) {
        alert('Please make sure you have configured the API key and provide a URL or page content.');
        return;
      }

      this.isGenerating = true;

      try {
        let articleContent;

        if (this.url) {
          const articleResponse = await axios.get(this.url);
          articleContent = articleResponse.data;
        } else {
          articleContent = this.alternativeContent;
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