import request from '@/utils/request'

/**
 * 查询公告列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listNotice(query) {
  return request({
    url: '/system/notice/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询公告详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getNotice(id) {
  return request({
    url: '/system/notice/' + id,
    method: 'get'
  })
}

/**
 * 新增公告
 * @param data
 * @returns {AxiosPromise}
 */
export function addNotice(data) {
  return request({
    url: '/system/notice',
    method: 'post',
    data: data
  })
}

/**
 * 修改公告
 * @param data
 * @returns {AxiosPromise}
 */
export function updateNotice(data) {
  return request({
    url: '/system/notice',
    method: 'put',
    data: data
  })
}

/**
 * 删除公告
 * @param id
 * @returns {AxiosPromise}
 */
export function delNotice(id) {
  return request({
    url: '/system/notice/' + id,
    method: 'delete'
  })
}
