<template>
  <div class="slideList">
   <template>
      <ul>
        <li 
         v-for="title in titles" 
        v-bind:key="title.key"
        v-html="title.key"> </li>
      </ul>

    </template>
  </div>
</template>

<script>
export default {
  name: 'SlideList',
  props: ['titles'],
  data() {
    return {
      msg: 'Vue.js Presentation',
    };
  },
};
</script>

<style scoped>
  .slideList {
    justify-content: flex-start;
    background: #666;
    color: #fff;
    width: 30%;
    height: 100%;
  }

  .slideList ul {
    margin: 0;
    padding: 0;
  }

  .slideList li {
    list-style: none;
    padding: 20px;
    border-bottom: 1px solid #777;

  }
</style>
