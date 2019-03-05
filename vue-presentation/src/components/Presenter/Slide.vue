<template>
  <div class="slideContainer">
     <h3></h3>
    <template>
      <div class="slide"
      v-html="contents.value.template"></div>

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
    font-size: 16px;
  }

  .slide {
    width: 100%;
    height: 100%;
  }

  .slide  li{
    width: 50%;
    height: 100%;
  }
</style>
