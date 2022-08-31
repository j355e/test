import { createApp } from 'vue';
import App from './App.vue';
import HelloWorld from '../src/components/HelloWorld.vue';
import BaseContainer from './components/BaseContainer.vue';
import { createStore } from 'vuex';

const store = createStore({
  state(){
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, increment){
      state.counter += increment;
    }
  } 

});

const app = createApp(App);
app.use(store);
app.component('base-container', BaseContainer);
app.component('hello-world', HelloWorld);
app.mount('#app');
