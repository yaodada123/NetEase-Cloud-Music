<template>
  <div class="navbar">
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
  name: "NavBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-size: 20px;
}
.left {
    background-color: aqua;
}
.center {
    flex: 1;
    background-color: red;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #fff;
}
.right {
    background-color: blueviolet;
}
</style>