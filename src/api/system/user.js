import request from '@/utils/request'

/**
 * 查询用户列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listUser(query) {
  return request({
    url: '/user/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询用户详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getUser(id) {
  return request({
    url: '/user/' + id,
    method: 'get'
  })
}

/**
 * 新增用户
 * @param data
 * @returns {AxiosPromise}
 */
export function addUser(data) {
  return request({
    url: '/user',
    method: 'post',
    data: data
  })
}

/**
 * 修改用户
 * @param data
 * @returns {AxiosPromise}
 */
export function updateUser(data) {
  return request({
    url: '/user',
    method: 'put',
    data: data
  })
}

/**
 * 删除用户
 * @param id
 * @returns {AxiosPromise}
 */
export function delUser(id) {
  return request({
    url: '/user/' + id,
    method: 'delete'
  })
}

/**
 * 用户密码重置
 * @param id
 * @param password
 * @returns {AxiosPromise}
 */
export function resetUserPwd(id, password) {
  const data = {
    id: id,
    password
  };
  return request({
    url: '/user/resetPwd',
    method: 'put',
    data: data
  })
}

/**
 * 用户状态修改
 * @param id
 * @param status
 * @returns {AxiosPromise}
 */
export function changeUserStatus(id, status) {
  const data = {
    userId: id,
    status
  };
  return request({
    url: '/user/changeStatus',
    method: 'put',
    data: data
  })
}

/**
 * 查询用户个人信息
 * @returns {AxiosPromise}
 */
export function getUserProfile() {
  return request({
    url: '/user/profile',
    method: 'get'
  })
}

/**
 * 修改用户个人信息
 * @param data
 * @returns {AxiosPromise}
 */
export function updateUserProfile(data) {
  return request({
    url: '/user/profile',
    method: 'put',
    data: data
  })
}

/**
 * 用户密码重置
 * @param oldPassword
 * @param newPassword
 * @returns {AxiosPromise}
 */
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword
  };
  return request({
    url: '/user/profile/updatePwd',
    method: 'put',
    params: data
  })
}

/**
 * 用户头像上传
 * @param data
 * @returns {AxiosPromise}
 */
export function uploadAvatar(data) {
  return request({
    url: '/user/profile/avatar',
    method: 'post',
    data: data
  })
}
