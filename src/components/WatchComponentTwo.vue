<template>
  <div>
    <h1>Component 2</h1>
    <h2>{{ toggle ? "On" : "Off" }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    toggle: Boolean,
  },
  watch: {
    toggle() {
      this.toggle;
    },
  },
};
</script>
