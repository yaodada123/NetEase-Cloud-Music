<template>
  <div class="navbar-item">
    <div class="recomend-list">
      <h2>推荐歌单</h2>
    </div>
    <recommend-item
      v-for="(item, index) in recommendSongList"
      :dataItem="item"
      :key="index"
    ></recommend-item>
  </div>
</template>

<script>
import { getRecommendSongList, getNewSong } from "@/network/home";
import RecommendItem from "./RecommendItem.vue";

export default {
  components: { RecommendItem },
  name: "NavbarItem",

  data() {
    return {
      recommendSongList: [],
      newSong: {},
    };
  },

  created() {
    getRecommendSongList().then((res) => {
      let len = 9 < res.result.length ? 9 : res.result.length;
      for (let i = 0; i < len; i++) {
        // 取推荐的前九个歌单,不多于9个
        this.recommendSongList.push(res.result[i]);
      }
      console.log(this.recommendSongList);
    });
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.recomend-list {
  position: relative;
}
.recomend-list h2 {
  position: relative;
  font-size: 18px;
  text-align: left;
  padding-left: 9px;
  height: 40px;
  line-height: 40px;
}
.recomend-list h2:before {
  position: absolute;
  content: "";
  background-color: #ec8537;
  width: 4px;
  height: 18px;
  left: 0;
  top: 50%;
  margin-top: -8px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}
</style>