import request from '@/utils/request'

/**
 * 查询字典类型列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listType(query) {
  return request({
    url: '/system/dict/type/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询字典类型详细
 * @param dictId
 * @returns {AxiosPromise}
 */
export function getType(dictId) {
  return request({
    url: '/system/dict/type/' + dictId,
    method: 'get'
  })
}

/**
 * 新增字典类型
 * @param data
 * @returns {AxiosPromise}
 */
export function addType(data) {
  return request({
    url: '/system/dict/type',
    method: 'post',
    data: data
  })
}

/**
 * 修改字典类型
 * @param data
 * @returns {AxiosPromise}
 */
export function updateType(data) {
  return request({
    url: '/system/dict/type',
    method: 'put',
    data: data
  })
}

/**
 * 删除字典类型
 * @param dictId
 * @returns {AxiosPromise}
 */
export function delType(dictId) {
  return request({
    url: '/system/dict/type/' + dictId,
    method: 'delete'
  })
}
