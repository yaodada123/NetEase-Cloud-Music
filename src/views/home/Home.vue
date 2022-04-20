<template>
  <div id="home">
    <nav-bar>
      <div slot="center">yyy rush rush rush !</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/common/navbar/NavBar.vue";

import { getRecommendSongList } from "@/network/home";

export default {
  name: "Home",

  components: {
    NavBar,
  },

  data() {
    return {};
  },

  mounted() {},

  created() {
      // 请求推荐歌单数据数据
      getRecommendSongList().then(res => {
          console.log(res);
      })
  },

  methods: {},
};
</script>

<style  scoped>
</style>