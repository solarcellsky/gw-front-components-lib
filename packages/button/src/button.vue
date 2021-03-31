<template>
  <button
    class="gw-button"
    @click="handleClick"
  >
    <slot>按 钮</slot>
  </button>
</template>
<script>
  export default {
    name: 'GwButton',

    inject: { },

    props: { },

    computed: { },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
<style lang="scss">
.gw-button {
  width: 200px;
  height: 80px;
  color: #fff;
  text-align: center;
  line-height: 80px;
  background: blue;
}
</style>
