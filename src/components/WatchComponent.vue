<template>
  <div>
    <h1>Component 1</h1>
    <h2>{{ toggle ? "On" : "Off" }}</h2>
    <button @click="send">Button</button>
    <watch-component-two :toggle="toggle"></watch-component-two>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    toggle: Boolean,
  },
  methods: {
    send() {
      this.$emit("call");
    },
  },
  watch: {
    toggle() {
      this.toggle;
    },
  },
};
</script>
