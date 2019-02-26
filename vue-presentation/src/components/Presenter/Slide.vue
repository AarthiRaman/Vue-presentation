<template>
  <div class="slide">
    <Markdown />
  </div>
</template>

<script>
import Markdown from '../../../slides/slide.md';

export default {
  name: 'slide',
  components: {
      Markdown
  },
  data() {
      console.log(Markdown);

    return {
      msg: 'Welcome to kfhdgjdf Vue.js App',
    };
  },
};
</script>

<style scoped>
  .slide {
    display: flex;
    width: 80%;
    height: 75%;
    background: #fff;
    margin: 2.5% 5% ;
  }
</style>
