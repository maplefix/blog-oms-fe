import request from '@/utils/request'

/**
 * 查询服务器详细
 * @returns {AxiosPromise}
 */
export function getServer() {
  return request({
    url: '/monitor/server',
    method: 'get'
  })
}
