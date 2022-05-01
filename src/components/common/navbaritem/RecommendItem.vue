<template>
    <div class="remmend-item">
        <div class="image">
            <img :src="dataItem.picUrl" alt="" class="ge_dan">
            <img src="../../../assets/img/music.png" alt="" class="icon-l">
            <span> {{ playCount }} </span>
        </div>
        <div class="text">{{dataItem.name}}</div>
        
    </div>
</template>

<script>
export default {
    name: 'RecommendItem',

    data() {
        return {
            
        };
    },

    props: {
        dataItem: {},
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed: {
        // 歌单播放量
        playCount() {
            let res = this.dataItem.playCount;
            if(this.dataItem.playCount > 10000) {
                res = parseInt(this.dataItem.playCount / 10000) + "万"
            }
            return res;
        }
    }
};
</script>

<style  scoped>
.remmend-item {
    padding-right: 5px;
    position: relative;
    width: 33%;
    float: left;

}
.ge_dan {
    width: 100%;
    border-radius: 5px;
}
.image span {
    position: absolute;
    font-size: 12px;
    top: 4px;
    right: 8%;
    z-index: 1;
    color: var(--color-high-text);
}
.icon-l {
    width: 20px;
    position: absolute;
    top: 1px;
    right: 33%;
}
.text {
    font-size: 13px;
    overflow: hidden;
    height: 30px;
}

</style>