<template>
  <div class="slideContainer">
     <h3></h3>
    <template>
      <div class="slide"
      v-for="contentBlock in contents" 
      v-bind:key="contentBlock.key"
      v-html="contentBlock.value.template"></div>

    </template>
  </div>
</template>

<script>
export default { 
  name: 'slide',
  props: ['contents'],
  components: {
  },
  data() {

    return {
      msg: 'Welcome to kfhdgjdf Vue.js App',
    };
  },
};
</script>

<style scoped>
  .slideContainer {
    display: flex;
    width: 80%;
    height: 75%;
    background: #fff;
    margin: 2.5%  ;
  }

  .slide {
    width: 100%;
    height: 100%;
  }
</style>
