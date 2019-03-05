<template>
  <div class="demo-wrapper">
    <SlideList />
    {{msg}}
  </div>
</template>

<script>
import SlideList from '@/components/Presenter/SlideList';

export default {
  name: 'Demo',
  components: {
    SlideList
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
