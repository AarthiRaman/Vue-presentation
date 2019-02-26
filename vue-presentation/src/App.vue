<template>
  <div id="app">
    <Header />
    <Toggler />
    <router-view/>
    <Markdown />
    <Footer />
  </div>
</template>

<script>

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toggler from '@/components/ToggleMode';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Toggler
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
  overflow: scroll;
}
</style>
