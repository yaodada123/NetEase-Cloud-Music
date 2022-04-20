<template>
  <div class="mini-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunsMusicMobileMinibar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.mini-bar {
    display: flex;
    height: 44px;
    font-size: 18px;
    text-align: center;
    line-height: 44px;
    font-family: 'Courier New', Courier, monospace;
    box-shadow:1px 1px 2px rgb(110, 105, 105);
}
.left {
    flex: 1;
    
}
.center {
    flex: 1;
}
.right {
    flex: 1;
}
</style>