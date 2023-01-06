<template>
  <div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: '-'
    }
  }
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>