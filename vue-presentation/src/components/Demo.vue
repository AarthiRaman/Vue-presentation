<template>
  <div class="demo-wrapper">
    <div>
    <h2>Counter Example</h2>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Demo',
  data() {
    return {
      count: 0,
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .demo-wrapper {
    display: flex;
    width: 100%;
  }

  .counter {
    text-align: justify;
    margin: 0 auto;
  }
</style>
