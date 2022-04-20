<template>
  <div id="home">
    <nav-bar>
      <div slot="center">yyy rush rush rush !</div>
    </nav-bar>
    <tab-control :titles='["推荐音乐", "热歌榜", "搜索"]'></tab-control>
  </div>
</template>

<script>
import NavBar from "@/common/navbar/NavBar.vue";

import { getRecommendSongList } from "@/network/home";
import TabControl from '../../components/content/TabControl.vue';

export default {
  name: "Home",

  components: {
    NavBar,
    TabControl,

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