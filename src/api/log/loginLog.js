import request from '@/utils/request'

/**
 * 查询登录日志列表
 * @param query
 * @returns {AxiosPromise}
 */
export function list(query) {
  return request({
    url: '/loginLog/list',
    method: 'get',
    params: query
  })
}


//获取当前用户的登录日志
export function listCurrentUserLoginLog(query) {
  return request({
    url: '/loginLog',
    method: 'get',
    params: query
  })
}
