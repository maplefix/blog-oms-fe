import request from '@/utils/request'

/**
 * 登陆方法
 * @param username 用户名
 * @param password 密码
 * @param code 验证码
 * @param uuid 随机值
 * @returns {AxiosPromise}
 */
export function login(username,password,code,uuid) {
  const data = {
    username,
    password,
    code,
    uuid
  };
  return request({
    url: '/login',
    method: 'post',
    params: data
  });
}

/**
 * 获取用户详细信息
 * @returns {AxiosPromise}
 */
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

/**
 * 登出
 * @returns {AxiosPromise}
 */
export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

/**
 * 获取验证码
 * @returns {AxiosPromise}
 */
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    method: 'get'
  })
}
