import request from '@/utils/request'

/**
 * 获取本地存储列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listLocalStorage(query) {
  return request({
    url: '/tool/localStorage/list',
    method: 'get',
    params: query
  })
}

/**
 * 删除本地存储
 * @param id
 * @returns {AxiosPromise}
 */
export function delLocalStorage(id) {
  return request({
    url: '/tool/localStorage/' + id,
    method: 'delete',
  })
}

/**
 * 修改本地存储
 * @param data
 * @returns {AxiosPromise}
 */
export function updateLocalStorage(data) {
  return request({
    url: '/tool/localStorage',
    method: 'put',
    data: data
  })
}




