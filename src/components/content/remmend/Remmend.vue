<template>
  <div class="remmend">推荐页面</div>
</template>

<script>
import { getRecommendSongList, getNewSong } from "@/network/home";

export default {
  name: "Remmend",

  data() {
    return {
      allDataList: {
        recommendSongList: {},
        newSong: {},
      },
    };
  },

  created() {
    // 请求推荐歌单数据数据
    getRecommendSongList().then((res) => {
      this.allDataList.recommendSongList = res.result;
      // console.log(this.allDataList.recommendSongList);
    }),
      getNewSong().then((res) => {
        // console.log(res);
        this.allDataList.newSong = res.result;
        console.log(this.allDataList.newSong);
      });
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
</style>