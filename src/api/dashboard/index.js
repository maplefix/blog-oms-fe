import request from '@/utils/request'

/**
 * 面板数据查询
 * @returns {AxiosPromise}
 */
export function listPanelGroup() {
  return request({
    url: '/dashboard/panelGroup',
    method: 'get',
  })
}

/**
 * 获取折线图数据
 * @param type
 * @returns {AxiosPromise}
 */
export function listLineChartData(type) {
  return request({
    url: '/dashboard/lineChartData/' + type,
    method: 'get',
  })
}
//获取访问来源数据
export function listAccessData() {
  return request({
    url: '/dashboard/access',
    method: 'get',
  })
}
/**
 * 获取爬虫访问数据
 * @returns {AxiosPromise}
 */
export function listSpiderData() {
  return request({
    url: '/dashboard/spiderData',
    method: 'get',
  })
}

/**
 * 获取访问日志
 * @param params
 * @returns {AxiosPromise}
 */
export function listVisitLog(params) {
  return request({
    url: '/dashboard/visitLog',
    method: 'get',
    params: params
  })
}

/**
 * 获取操作日志
 * @param params
 * @returns {AxiosPromise}
 */
export function listOperateLog(params) {
  return request({
    url: '/dashboard/operateLog',
    method: 'get',
    params: params
  })
}

/**
 * 获取任务日志
 * @param params
 * @returns {AxiosPromise}
 */
export function listTaskLog(params) {
  return request({
    url: '/dashboard/taskLog',
    method: 'get',
    params: params
  })
}

/**
 * 获取登录日志
 * @param params
 * @returns {AxiosPromise}
 */
export function listLoginLog(params) {
  return request({
    url: '/dashboard/loginLog',
    method: 'get',
    params: params
  })
}
