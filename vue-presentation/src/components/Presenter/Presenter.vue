<template>
  <div class="demo-wrapper">
    <Frames />
    <SliderControls />
    <Slide />
  </div>
</template>

<script>

import Frames from './Frames';
import SliderControls from './SliderControls';
import Slide from './Slide';

export default {
  name: 'Demo',
  components: {
    Frames,
    SliderControls,
    Slide
  },
  data() {
    return {
      msg: 'Welcome to kfhdgjdf Vue.js App',
    };
  },
};
</script>

<style scoped>
  .demo-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    background: #e0e0e0;
  }
</style>
