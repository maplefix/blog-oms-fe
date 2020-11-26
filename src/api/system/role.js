import request from '@/utils/request'

/**
 * 查询角色列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listRole(query) {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询角色详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getRole(id) {
  return request({
    url: '/system/role/' + id,
    method: 'get'
  })
}

/**
 * 新增角色
 * @param data
 * @returns {AxiosPromise}
 */
export function addRole(data) {
  return request({
    url: '/system/role',
    method: 'post',
    data: data
  })
}

/**
 * 修改角色
 * @param data
 * @returns {AxiosPromise}
 */
export function updateRole(data) {
  return request({
    url: '/system/role',
    method: 'put',
    data: data
  })
}

/**
 * 角色数据权限
 * @param data
 * @returns {AxiosPromise}
 */
export function dataScope(data) {
  return request({
    url: '/system/role/dataScope',
    method: 'put',
    data: data
  })
}

/**
 * 角色状态修改
 * @param id
 * @param status
 * @returns {AxiosPromise}
 */
export function changeRoleStatus(id, status) {
  const data = {
    id,
    status
  };
  return request({
    url: '/system/role/changeStatus',
    method: 'put',
    data: data
  })
}

/**
 * 删除角色
 * @param id
 * @returns {AxiosPromise}
 */
export function delRole(id) {
  return request({
    url: '/system/role/' + id,
    method: 'delete'
  })
}
