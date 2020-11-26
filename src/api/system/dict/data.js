import request from '@/utils/request'

/**
 * 查询字典数据列表
 * @param query
 * @returns 数据列表
 */
export function listData(query) {
  return request({
    url: '/system/dict/data/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询字典数据详细
 * @param dictCode
 * @returns {AxiosPromise}
 */
export function getData(dictCode) {
  return request({
    url: '/system/dict/data/' + dictCode,
    method: 'get'
  })
}

/**
 * 根据字典类型查询字典数据信息
 * @param dictType
 * @returns {AxiosPromise}
 */
export function getDicts(dictType) {
  return request({
    url: '/system/dict/data/dictType/' + dictType,
    method: 'get'
  })
}

/**
 * 新增字典数据
 * @param data
 * @returns {AxiosPromise}
 */
export function addData(data) {
  return request({
    url: '/system/dict/data',
    method: 'post',
    data: data
  })
}

/**
 * 修改字典数据
 * @param data
 * @returns {AxiosPromise}
 */
export function updateData(data) {
  return request({
    url: '/system/dict/data',
    method: 'put',
    data: data
  })
}

/**
 * 删除字典数据
 * @param dictCode
 * @returns {AxiosPromise}
 */
export function delData(dictCode) {
  return request({
    url: '/system/dict/data/' + dictCode,
    method: 'delete'
  })
}
