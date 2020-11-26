import request from '@/utils/request'

/**
 * 查询菜单列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listMenu(query) {
  return request({
    url: '/system/menu/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询菜单详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getMenu(id) {
  return request({
    url: '/system/menu/' + id,
    method: 'get'
  })
}

/**
 * 查询菜单下拉树结构
 * @returns {AxiosPromise}
 */
export function treeselect() {
  return request({
    url: '/system/menu/treeselect',
    method: 'get'
  })
}

/**
 * 根据角色ID查询菜单下拉树结构
 * @param id
 * @returns {AxiosPromise}
 */
export function roleMenuTreeselect(id) {
  return request({
    url: '/system/menu/roleMenuTreeselect/' + id,
    method: 'get'
  })
}

/**
 * 新增菜单
 * @param data
 * @returns {AxiosPromise}
 */
export function addMenu(data) {
  return request({
    url: '/system/menu',
    method: 'post',
    data: data
  })
}

/**
 * 修改菜单
 * @param data
 * @returns {AxiosPromise}
 */
export function updateMenu(data) {
  return request({
    url: '/system/menu',
    method: 'put',
    data: data
  })
}

/**
 * 删除菜单
 * @param id
 * @returns {AxiosPromise}
 */
export function delMenu(id) {
  return request({
    url: '/system/menu/' + id,
    method: 'delete'
  })
}
