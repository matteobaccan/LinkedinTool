
import Aside from './Aside.vue';

export default {
    components: {
        Aside
    },
    data() {
        return {
            isMenuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    },
    mounted() {
        // Set isMenuOpen to true on larger screens
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        this.isMenuOpen = mediaQuery.matches;

        // Listen for changes in screen size
        mediaQuery.addListener((e) => {
            this.isMenuOpen = e.matches;
        });
    },
    beforeUnmount() {
        // Clean up the listener when the component is destroyed
        window.matchMedia('(min-width: 768px)').removeListener(this.handleResize);
    }
}