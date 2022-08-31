<template>
  <div>
    <base-container title="Vuex">
    <!-- <h2>Directly from store: {{ $store.state.counter}}</h2>
    <h4>From computed property in App.vue: {{ counter }}</h4> -->
    <the-counter></the-counter>
    <button @click="add">Add 1</button>
    <change-counter ></change-counter>
    <button @click="increase(5)">Add 5</button>
  </base-container>
  </div>
</template>

<script>
import TheCounter from "./components/TheCounter.vue"
import ChangeCounter from "./components/ChangeCounter.vue";
export default {
  components: {
    TheCounter,
    ChangeCounter
  },
  methods: {
    add(){
      this.$store.commit('increment');
    },
    increase(payload){
      this.$store.commit('increase', payload);
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
