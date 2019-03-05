import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSlide: 0,
    currentMode: 'Presentation',
  },
  mutations: {
    changeSlide(state, changedSlide) {
      state.currentSlide = changedSlide;
    },
    toggleMode(state, newMode) {
      state.currentMode = newMode;
    },
  },
});
