<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeMount() {
    this.$store.dispatch('INIT_USERS', 'backend');
  }
}
</script>

<style>
@import "assets/css/bootstrap.css";
</style>
