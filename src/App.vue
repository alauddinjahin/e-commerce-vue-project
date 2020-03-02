<template>
  <div id="app">
    <navbar></navbar>
    <div class="container-fluid mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  export default {
    components: {
      'navbar': Navbar,
    },
    created() {
      this.$store.dispatch('tryAutoLogin')
    }
  }
</script>

<style>
</style>


<!-- 
<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>


 <script>
  import User from './components/User.vue';
  export default {
    components: {
      appUser: User
    }
  }
</script>

<style>
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style> -->


