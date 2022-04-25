<template>
  <div id="app">
    <!-- <nav-bar>
      <div slot="center">yyy rush rush rush !</div>
    </nav-bar>
    
      <tab-control
        :titles="['推荐音乐', '热歌榜', '搜索']"
        class="tab-control"
      ></tab-control> -->
    
    <router-view />
  </div>
</template>

<script>
// import NavBar from "@/common/navbar/NavBar.vue";
// import TabControl from "@/components/content/TabControl.vue";

export default {
  name: "App",

  data() {
    return {};
  },

  mounted() {},

  methods: {},

  components: {
    // NavBar,
    // TabControl,
  },
  
};
</script>

<style>
@import url("./assets/css/base.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
