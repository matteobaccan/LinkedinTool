<!-- src/components/MainLayout.vue -->
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="w-64 bg-indigo-700 text-white">
      <div class="p-4">
        <h1 class="text-2xl font-semibold">ChatGPT App</h1>
      </div>
      <nav class="mt-8">
        <router-link to="/create-post" class="block py-2 px-4 hover:bg-indigo-600" active-class="bg-indigo-800">Crea Post</router-link>
        <router-link to="/create-image" class="block py-2 px-4 hover:bg-indigo-600" active-class="bg-indigo-800">Crea Immagine</router-link>
        <router-link to="/create-comment" class="block py-2 px-4 hover:bg-indigo-600" active-class="bg-indigo-800">Crea Commento</router-link>
        <a @click="logout" class="block py-2 px-4 hover:bg-indigo-600 cursor-pointer">Logout</a>
      </nav>
    </div>

    <!-- Main content -->
    <div class="flex-1 p-10 overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated')
      this.$router.push('/login')
    }
  }
}
</script>