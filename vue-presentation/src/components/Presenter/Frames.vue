<template>
  <div class="frames">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Frames',
  data() {
    return {
      msg: 'Vue.js Presentation',
    };
  },
};
</script>

<style scoped>
  .frames {
    justify-content: flex-start;
    background: #666;
    color: #fff;
    width: 25%;
    height: 100%;
  }
</style>
