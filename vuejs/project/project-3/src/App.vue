<script setup>
import Footer from './layouts/Footer.vue';
</script>

<template>
  <div class="content-wrapper bg-background-primary text-copy-primary" :class="theme">
    <!-- begin:: navbar -->
    <Navbar @childToParent="updateFavorite" />
    <!-- end:: navbar -->
    <!-- begin:: body -->
    <RouterView />
    <!-- end:: body -->
    <!-- begin:: footer -->
    <Footer />
    <!-- end:: footer -->
  </div>
</template>

<script>
import Navbar from './layouts/Navbar.vue';

export default {
  created() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  components: {
    Navbar
  },
  data() {
    return {
      theme: 'theme-light'
    }
  },
  methods: {
    updateFavorite(data) {
      this.theme = data;
      localStorage.setItem('theme', this.theme);
    },
  },
}
</script>