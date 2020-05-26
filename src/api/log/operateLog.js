import request from '@/utils/request'

/**
 * 查询操作日志列表
 * @param query
 * @returns {AxiosPromise}
 */
export function list(query) {
  return request({
    url: '/operateLog/list',
    method: 'get',
    params: query
  })
}
