<template>
  <div class="home">
    <gw-button @click="doClick"/>
    <gw-form-builder />
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    doClick() {
      alert('Hello World');
    }
  }
};
</script>
