import request from '@/utils/request'

/**
 * 查询友链列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listLink(query) {
  return request({
    url: '/link/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询友链详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getLink(id) {
  return request({
    url: '/link/' + id,
    method: 'get'
  })
}

/**
 * 新增友链配置
 * @param data
 * @returns {AxiosPromise}
 */
export function addLink(data) {
  return request({
    url: '/link',
    method: 'post',
    data: data
  })
}

/**
 * 修改友链配置
 * @param data
 * @returns {AxiosPromise}
 */
export function updateLink(data) {
  return request({
    url: '/link',
    method: 'put',
    data: data
  })
}

/**
 * 删除友链配置
 * @param id
 * @returns {AxiosPromise}
 */
export function delLink(id) {
  return request({
    url: '/link/' + id,
    method: 'delete'
  })
}

/**
 * 修改友链推荐
 * @param id
 * @param display
 */
export function changeLinkDisplay(id, display) {
  let data = {
    id: id,
    display: display
  };
  updateLink(data);
}

/**
 * 通过或者拒绝友链申请
 * @param id
 * @param pass
 * @returns {AxiosPromise}
 */
export function changeLinkStatus(id, pass) {

  return request({
    url: '/link/pass/' + id + "/" + pass,
    method: 'put',
  })
}

