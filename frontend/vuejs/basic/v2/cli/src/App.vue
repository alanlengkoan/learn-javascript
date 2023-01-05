<template>
  <div>
    <Header />
   
    <Team />

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Team from './components/Team.vue';

export default {
  data() {
    return {
    }
  },
  name: 'App',
  components: {
    Header,
    Footer,
    Team
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>