<template>
  <div class="demo-wrapper">
    <SlideList v-bind:titles="contents" />
    <SliderControls />
    <Slide v-bind:contents="contents"> 
      
    </Slide>
  </div>
</template>

<script>

import SlideList from './SlideList';
import SliderControls from './SliderControls';
import Slide from './Slide';
import Markdown from '../../../slides/slide.md';

const markDown = Object.entries(Markdown.components).map(([key, value]) => ({key,value}));

export default {
  name: 'Demo',
  components: {
    SlideList,
    SliderControls,
    Slide,
    Markdown
  },
  data() {
    return {
      contents: markDown
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
