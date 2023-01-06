<template>
  <div>
    <Header :title="title" v-on:changeTitle="updateTitle($event)" />
   
    <Team />

    <HelloWorld :msg="msg" />

    <Footer :copyright="copyright" :title="title" />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Team from './components/Team.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  data() {
    return {
      title: 'Alan App',
      msg: 'Welcome to My Vue.js App',
      copyright: 'Copyright 2023',
    }
  },
  name: 'App',
  components: {
    Header,
    Footer,
    Team,
    HelloWorld
  },
  methods: {
    updateTitle: function (title) {
      this.title = title;
    }
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