<template>
  <div class="footer">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'Copyrighted and Patented by Aarthi Raman 😝.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    position: absolute;
    bottom: 0;
    padding: 20px 0;
    margin: 0 auto;
    background: #333;
    color: #fff;
    width: 100%;
}
</style>
