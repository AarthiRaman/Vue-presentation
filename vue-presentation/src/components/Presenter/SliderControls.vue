<template>
  <div class="sliderControls">
    <div class="leftArrow"> &lsaquo; </div>
    <div class="rightArrow"> &rsaquo; </div> 
  </div>
</template>

<script>
export default {
  name: 'sliderControls',
  data() {
    return {
      msg: 'Vue.js Presentation',
    };
  },
};
</script>

<style scoped>
  .sliderControls {
    justify-content: space-between;
    color: #fff;
    width: 86%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    top: 24%;
    position: fixed;
    left: 18.5%;
  }

  .leftArrow, .rightArrow {
    font-size: 25px;
    font-weight: bold;
    padding: 2px 20px 9px;
    background: rgb(243, 43, 136);
    border-radius: 100%;
    cursor: pointer;
    margin: 20% 6%;

  }

</style>
