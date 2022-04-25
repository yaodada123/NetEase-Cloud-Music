<template>
  <div class="remmend">
    <div class="font-set">编辑推荐</div>
    <div class="edit-remmend">
      
    </div>
    <div class="font-set">最新音乐</div>
    <div class="new-song">
      
    </div>
  </div>
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
      console.log(this.allDataList.recommendSongList);
    }),
    getNewSong().then((res) => {
      this.allDataList.newSong = res.result;
    });
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.font-set {
  text-align: left;
  font-size: 17px;
  height: 20px;
  line-height: 20px;
  padding-left: 9px;
  border-left: #d43c33 6px double;
  color: #d43c33;
}
</style>