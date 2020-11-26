import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

/**
 * 获取token
 * @returns {*}
 */
export function getToken() {
  return Cookies.get(TokenKey);
}

/**
 * 设置token到cookie
 * @param token
 * @returns {*}
 */
export function setToken(token) {
  return Cookies.set(TokenKey,token);
}

/**
 * 删除token
 * @returns {*}
 */
export  function removeToken() {
  return Cookies.remove(TokenKey);
}
