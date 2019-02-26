<template>
  <div class="toggle">
    <div v-bind:class="{ active: activeEle === 'demo' }" 
          v-on:click="reverseMessage('demo')">
          Demo
    </div>

    <div v-bind:class="{ active: activeEle === 'presentation' }" 
          v-on:click="reverseMessage('presentation')">
          Presentation
    </div>
  </div>
</template>

<script>
export default {
    name: 'Toggler',
    data: () => ({
       activeEle: 'demo',
    }),
    methods: {
      reverseMessage: function (activeEleCHnages) {
          this.activeEle = activeEleCHnages;
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
