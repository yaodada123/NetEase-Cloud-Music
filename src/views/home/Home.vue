<template>
  <div id="home">
    <title-bar></title-bar>
    <nav-bar @tabClick="tabClick"></nav-bar>
    <nav-bar-item-left v-show="visible[0]"></nav-bar-item-left>
    <nav-bar-item-center v-show="visible[1]"></nav-bar-item-center>
    <nav-bar-item-right v-show="visible[2]"></nav-bar-item-right>
    <!-- 解决以上问题 -->
    <div style="display : none">{{num}}</div> 
    <!--  -->
    <!-- <tab-control
      :titles="['推荐音乐', '热歌榜', '搜索']"
      class="tab-control"
      @tabClick="tabClick"
    ></tab-control> -->
  </div>
</template>

<script>

import { getRecommendSongList, getNewSong } from "@/network/home";

import NavBar from "@/components/common/navbar/NavBar.vue";
import TitleBar from "@/components/content/titlebar/TitleBar.vue";
import TabControl from "@/components/content/tabcontrol/TabControl.vue";
import NavBarItemLeft from "@/components/common/navbaritem/NavBarItemLeft.vue";
import NavBarItemCenter from "@/components/common/navbaritem/NavBarItemCenter.vue";
import NavBarItemRight from "@/components/common/navbaritem/NavBarItemRight.vue";

export default {
  name: "Home",

  components: {
    NavBar,
    TabControl,
    TitleBar,
    NavBarItemLeft,
    NavBarItemCenter,
    NavBarItemRight,
  },

  data() {
    return {
      allDataList: {
        recommendSongList: {},
        newSong: {},
      },
      visible: [true, false, false],
      num: 0,
    };
  },

  mounted() {},

  created() {
    // 请求推荐歌单数据数据
    // getRecommendSongList().then((res) => {
    //   this.allDataList.recommendSongList = res.result;
    //   console.log(this.allDataList.recommendSongList);
    // })
    // getNewSong().then((res) => {
    //   this.allDataList.newSong = res.result;
    //   console.log(this.allDataList.newSong);
    // })
  },

  methods: {
    tabClick(index) {
      for(let i = 0; i < this.visible.length; i++) {
        this.visible[i] = (i == index ? true : false)
      }
      this.num++;
    },
  },
};
</script>

<style  scoped>
.tab-control {
  position: sticky;
  top: 84px;
}
</style>