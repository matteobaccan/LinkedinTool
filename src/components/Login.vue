<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Application login
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">User name (pippo)</label>
            <input id="username" name="username" type="text" required
                   v-model="username"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="User name (pippo)">
          </div>
          <div>
            <label for="password" class="sr-only">Password (pluto)</label>
            <input id="password" name="password" type="password" required
                   v-model="password"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Password (pluto)">
          </div>
        </div>
        <div>
          <button type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    this.checkAuthentication();
  },
  methods: {
    checkAuthentication() {
      if (localStorage.getItem('isAuthenticated') === 'true') {
        this.$router.push('/CreatePost');
      }
    },
    login() {
      if (this.username === import.meta.env.VITE_APP_USERNAME &&
          this.password === import.meta.env.VITE_APP_PASSWORD) {
        localStorage.setItem('isAuthenticated', 'true')
        this.$router.push('/CreatePost')
      } else {
        alert('Invalid credentials')
      }
    }
  }
}
</script>