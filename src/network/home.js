import { request } from "./request";

export function getRecommendSongList() {
    return request({
        url: '/personalized',
        // params: {
        //     limit,
        // }
    })
}