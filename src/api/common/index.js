import request from '@/utils/request'

/**
 * 查询七牛云图片
 * @param query
 * @returns {AxiosPromise}
 */
export function listQiNiuImage(query) {
  return request({
    url: '/tool/qiNiu/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询本地图片
 * @param query
 * @returns {AxiosPromise}
 */
export function listLocalImage(query) {
  return request({
    url: '/tool/localStorage/list',
    method: 'get',
    params: query
  })
}

/**
 * 上传图片
 * @param data
 * @returns {AxiosPromise}
 */
export function uploadImgToQiNiu(data) {
  return request({
    url: '/tool/qiNiu',
    method: 'post',
    data: data
  })
}
