<template>
  <div class="slideList">
   <template>
      <ul>
        <li 
        v-bind:class="{ active: activeEle === title.key }"
        v-for="(title, index) in titles" 
        v-on:click="clickTopic(index)"
        v-bind:key="title.key"
        v-html="title.key.replace('-', ' ')"> </li>
      </ul>

    </template>
  </div>
</template>

<script>
import store from '../../store';

export default {
  name: 'SlideList',
  props: ['titles'],
  data() {
    return {
      activeEle: this.$props.titles[0].key,
    };
  },
  methods: {
    clickTopic: function(changedSlide) {
      store.commit('changeSlide', changedSlide);
       this.activeEle = this.$props.titles[changedSlide].key;
    }
  }
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

  .slideList li:hover, .slideList li.active {
    list-style: none;
    padding: 20px;
    background: #333;
    cursor: pointer;
    border-bottom: 1px solid #777;
  }
</style>
