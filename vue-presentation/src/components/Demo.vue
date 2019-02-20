<template>
  <div class="demo-wrapper">
    <Frames />
    {{msg}}
  </div>
</template>

<script>
import Frames from '@/components/Presenter/Frames';

export default {
  name: 'Demo',
  components: {
    Frames
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
