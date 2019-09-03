import axios from 'axios'
import { URL, defaultLimit } from '@/config'

let instance = axios.create({
  baseURL: URL,
  // headers: {
  //   'X-Real-IP':'211.161.244.70',
  //   withCredentials: true,
  //   xhrFields: { withCredentials: true }
  // },
  timeout: 60000
});

instance.interceptors.response.use(response => {
  // return new Promise(resolve => {
  //   setTimeout(() => {
  //     resolve(response)
  //   }, 300)
  // })
  return response
})

//获取轮播
export function getBanner() {
  const url = `/banner`
  return instance.get(url)
}

//获取推荐歌单
export function getPersonalized() {
  const url = `/personalized`
  return instance.get(url)
}

//获取用户歌单详情
export function getUserPlaylist(uid) {
  const url = `/user/playlist`
  return instance.get(url, {
    params: {
      uid
    }
  })
}

//获取排行榜（完整版）
export function getTopListDetail() {
  const url = `/toplist/detail`
  return instance.get(url)
}

//获取歌单 ( 网友精选碟 )
export function getTopPlaylist(page = 0, limit = defaultLimit, order = 'hot') {
  const url = `/top/playlist`
  return instance.get(url, {
    params: {
      offset: page * limit,
      order,
      limit
    }
  })
}

//获取歌单详情
export function getPlaylistDetail(id) {
  const url = `/playlist/detail`
  return instance.get(url, {
    params: {
      id
    }
  })
}

// 搜索
export function search(keywords, type = 1, page = 0, limit = defaultLimit) {
  const url = `/search`
  return instance.get(url, {
    params: {
      offset: page * limit,
      type,
      limit,
      keywords
    }
  })
}

//热搜
export function searchHot() {
  const url = `/search/hot`
  return instance.get(url)
}

//获取歌曲详情
export function getMusicDetail(ids) {
  const url = `/song/detail`
  return instance.get(url, {
    params: {
      ids
    }
  })
}
