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
      
    };
  },
};
</script>

<style scoped>
  .sliderControls {
    display: none;
    justify-content: space-between;
    color: #fff;
    width: 76%;
    /* 
    display: flex; */
    top: 20%;
    position: fixed;
    left: 25.5%;
    margin: 5% 0 0;
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
