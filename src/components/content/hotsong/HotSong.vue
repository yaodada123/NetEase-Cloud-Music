<template>
  <div class="hot-song">热歌页面(专供许嵩)</div>
</template>

<script>
import { getHotSong } from "@/network/home";

export default {
  name: "Hotsong",

  data() {
    return {
      dataList: {
        hotSong: {},
      },
    };
  },

  created() {
      getHotSong().then(res => {
          console.log(res);
      })
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
</style>