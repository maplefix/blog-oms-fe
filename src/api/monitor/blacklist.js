import request from '@/utils/request'

/**
 * 查询黑名单列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listBlacklist(query) {
  return request({
    url: '/blacklist/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询黑名单详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getBlacklist(id) {
  return request({
    url: '/blacklist/' + id,
    method: 'get'
  })
}

/**
 * 新增黑名单
 * @param data
 * @returns {AxiosPromise}
 */
export function addBlacklist(data) {
  return request({
    url: '/blacklist',
    method: 'post',
    data: data
  })
}

/**
 * 修改黑名单
 * @param data
 * @returns {AxiosPromise}
 */
export function updateBlacklist(data) {
  return request({
    url: '/blacklist',
    method: 'put',
    data: data
  })
}

/**
 * 删除黑名单
 * @param id
 * @returns {AxiosPromise}
 */
export function delBlacklist(id) {
  return request({
    url: '/blacklist/' + id,
    method: 'delete'
  })
}
