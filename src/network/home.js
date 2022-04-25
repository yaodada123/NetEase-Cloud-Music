import { request } from "./request";

export function getRecommendSongList() {
    return request({
        url: '/personalized',
        // params: {
        //     limit,
        // }
    })
}

export function getNewSong() {
    return request({
        url: '/personalized/newsong',
        params: {
            limit: 20,
        }
    })
}
export function getHotSong() {
    return request({
        url: '/artist/top/song?id=5771',// 许嵩的热歌
    })
}
