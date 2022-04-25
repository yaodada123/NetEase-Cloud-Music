<template>
  <div class="nav-bar">
    <div
      v-for="(item, index) in titles"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {
      titles: ["推荐音乐", "热歌榜", "搜索"],
      currentIndex: 0
    };
  },

  mounted() {},

  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style  scoped>
.nav-bar {
  display: flex;
  text-align: center;
  font-size: 18px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  box-shadow: 1px 1px 2px rgb(241, 241, 241);
}
.nav-bar div {
  flex: 1;
}
.nav-bar div span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>