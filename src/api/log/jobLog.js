import request from '@/utils/request'

/**
 * 查询任务日志列表
 * @param id
 * @returns {AxiosPromise}
 */
export function getQuartzDetail(id) {
  return request({
    url: '/jobLog/' + id,
    method: 'get',
  })
}
