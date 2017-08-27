import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
// import axios from 'axios'

export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  // const url = '/api/getDiscList'
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_first_yqq.fcg'

/*   const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  }) */

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    tpl: 'v12',
    page: 'other'
  })

/*   return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }) */
  return jsonp(url, data, options)
}

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf9: 1,
    onlysong: 0,
    needNewCode: 0,
    hostUin: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, {
    param: 'jsonpCallback',
    prefix: 'playlistinfoCallback'
  })
}
