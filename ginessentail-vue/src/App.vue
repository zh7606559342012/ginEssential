<template>
  <div id="app">
      <nav-bar />
        <b-container>
      <router-view/>
        </b-container>
  </div>
</template>

<script>
import NavBar from './views/layout/Navbar.vue';

export default {
  components: { NavBar },
  data() {

  },
};
</script>

<style lang="scss">

</style>
