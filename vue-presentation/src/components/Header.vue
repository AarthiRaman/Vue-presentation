<template>
  <div class="header">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Vue.js Presentation',
    };
  },
};
</script>

<style scoped>
  .header {
    padding: 20px 0;
    margin: 0 auto;
    background: #333;
    color: #fff;
  }
</style>
