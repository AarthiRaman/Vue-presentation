<template>
  <div class="demo-wrapper">
    <SlideList v-bind:titles="contents" />
    <SliderControls />
    <Slide v-bind:contents="contents[currentSlide]"> 
      
    </Slide>
  </div>
</template>

<script>

import SlideList from './SlideList';
import SliderControls from './SliderControls';
import Slide from './Slide';
import Markdown from '../../../slides/slide.md';
import store from '../../store';

const markDown = Object.entries(Markdown.components).map(([key, value]) => ({key,value}));

export default {
  name: 'Demo',
  components: {
    SlideList,
    SliderControls,
    Slide,
    Markdown
  },
  computed: {
    currentSlide() { return store.state.currentSlide }
  },
  data() {
    return {
      slideNumber: store.state.currentSlide,
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
