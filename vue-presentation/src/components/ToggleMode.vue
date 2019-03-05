<template>

  <div class="toggle">
    <div v-bind:class="{ active: activeEle === 'Demo' }" 
          v-on:click="toggleMode('Demo')">
          Demo
    </div>

    <div v-bind:class="{ active: activeEle === 'Presentation' }" 
          v-on:click="toggleMode('Presentation')">
          Presentation
    </div>
  </div>
</template>

<script>
import router from '../router/index';
import store from '../store';

export default {
    name: 'Toggler',
    data: () => ({
       activeEle: store.state.currentMode,
    }),
    methods: {
      toggleMode: function (activeEleChanges) {
          store.commit('toggleMode', activeEleChanges)
          router.push({ name: activeEleChanges})
      }
    }
      
};
</script>

<style scoped>
  .toggle {
    position: fixed;
    width: 312px;
    font-weight: bold;
    right: 0;
    top: 0;
    display: flex;
    margin: 10px;
    justify-content: space-evenly;
  }

  .toggle > div {
    background: rgb(256, 256, 256, 0.9);
    padding: 10px;
    cursor: pointer;
    width: 49%;
    margin: 0 0.5%;
  }

.toggle > div:hover, .toggle > div.active {
    background: rgb(243, 43, 136, 0.7);
    color: #fff;
}
</style>
