import request from '@/utils/request'

/**
 * 查询分类列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listCategory(query) {
  return request({
    url: '/blog/category/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询分类详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getCategory(id) {
  return request({
    url: '/blog/category/' + id,
    method: 'get'
  })
}

/**
 * 新增分类配置
 * @param data
 * @returns {AxiosPromise}
 */
export function addCategory(data) {
  return request({
    url: '/blog/category',
    method: 'post',
    data: data
  })
}

/**
 * 修改分类配置
 * @param data
 * @returns {AxiosPromise}
 */
export function updateCategory(data) {
  return request({
    url: '/blog/category',
    method: 'put',
    data: data
  })
}

/**
 * 删除分类配置
 * @param id
 * @returns {AxiosPromise}
 */
export function delCategory(id) {
  return request({
    url: '/blog/category/' + id,
    method: 'delete'
  })
}

/**
 * 修改分类推荐
 * @param id
 * @param support
 */
export function changeCategorySupport(id, support) {
  let data = {
    id: id,
    support: support
  };
  updateCategory(data);
}
