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