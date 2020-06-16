import request from '@/utils/request'

/**
 * 查询在线用户列表
 * @param query
 * @returns {AxiosPromise}
 */
export function list(query) {
  return request({
    url: '/online/list',
    method: 'get',
    params: query
  })
}

/**
 * 强退用户
 * @param tokenId
 * @returns {AxiosPromise}
 */
export function forceLogout(tokenId) {
  return request({
    url: '/online/' + tokenId,
    method: 'delete'
  })
}
