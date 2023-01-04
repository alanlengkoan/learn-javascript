<template>
  <div id="app">
    <HelloWorld/>
    
    <MyPage/>

    <MyList/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyPage from './components/MyPage.vue'
import MyList from './components/MyList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyPage,
    MyList
  }
}
</script>