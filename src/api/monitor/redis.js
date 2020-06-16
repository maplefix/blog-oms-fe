import request from '@/utils/request'

/**
 * 查询Redis Info列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listRedisInfoList(query) {
  return request({
    url: '/redis/list',
    method: 'get',
    params: query
  })
}
