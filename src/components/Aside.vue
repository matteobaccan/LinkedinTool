<!-- Aside.vue -->
<template>
  <aside :class="[
    'bg-white shadow-md transition-all duration-300 ease-in-out',
    { 'w-64': isOpen, 'w-0 md:w-64': !isOpen }
  ]">
    <nav class="mt-5">
      <button @click="$emit('toggle')" class="md:hidden p-4 absolute top-0 right-0">
        {{ isOpen ? '✕' : '☰' }}
      </button>
      <router-link v-for="(item, index) in menuItems" :key="index" :to="item.route"
        class="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 whitespace-nowrap overflow-hidden">
        <span class="md:inline-block mr-2 w-6 text-center">{{ item.icon }}</span>
        <span>{{ item.label }}</span>
      </router-link>
      <a @click="logout"
        class="flex items-center py-2 px-4 text-gray-700 hover:bg-gray-200 cursor-pointer whitespace-nowrap overflow-hidden">
        <span class="md:inline-block mr-2 w-6 text-center">🚪</span>
        <span>Logout</span>
      </a>
    </nav>
  </aside>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  emits: ['toggle'],
  data() {
    return {
      menuItems: [
        { label: 'Create Post', route: '/CreatePost', icon: '📝' },
        { label: 'Create Image', route: '/CreateImage', icon: '🖼️' },
        { label: 'Create Comment', route: '/CreateComment', icon: '💬' },
        { label: 'Config', route: '/Config', icon: '⚙️' },
      ]
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('chatgptKey');
      localStorage.removeItem('isAuthenticated')
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
@media (max-width: 767px) {
  aside {
    position: fixed;
    top: 56px;
    /* Altezza dell'header */
    left: 0;
    bottom: 0;
    z-index: 10;
  }
}
</style>