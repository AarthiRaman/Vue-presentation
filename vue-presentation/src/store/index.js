import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSlide: 1,
    currentMode: 'Presentation',
  },
  mutations: {
    changeSlide(state, counter) {
      state.currentSlide += counter;
    },
    toggleMode(state, newMode) {
      state.currentMode = newMode;
    },
  },
});
