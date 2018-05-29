<template>
  <div id="app">
    <h1>MyApp</h1>
    <p>{{ msg }}</p>
    <p>{{ now() }}</p>
    <p>{{ apiHost }}</p>
  </div>
</template>

<script>
// import Vue from 'vue';
import moment from 'moment';

export default {
  data() {
    return {
      msg: 'Hello MyApp!',
      apiHost: process.env.API_HOST
    };
  },
  methods: {
    now() {
      return moment().format('YYYY-MM-DD HH:mm:ss');
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  font-family: Verdana, sans-serif;
  color: skyblue;

  p {
    color: tomato;
  }
}
</style>
