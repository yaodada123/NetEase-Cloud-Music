<template>
  <div class="title">
    <div>yyy rush rush rush !</div>
  </div>
</template>

<script>
export default {
  name: "TitleBar",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.title {
  display: flex;
  height: 84px;
  line-height: 44px;
  text-align: center;
  font-size: 28px;
  background-color: #d43c33;
}
.title div {
  padding-top: 20px;
  flex: 1;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: #fff;
}
</style>