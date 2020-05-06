import request from '@/utils/request'

/**
 * 通用的获取列表数据
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export function list(url,params) {
  return request({
    url: url + "/list",
    method: 'get',
    params: params
  });
}

/**
 * 通用数据添加
 * @param url
 * @param data
 * @returns {AxiosPromise}
 */
export function add(url, data) {
  return request({
    url: url,
    method: 'post',
    data: data
  })
}

/**
 * 通用数据修改
 * @param url
 * @param data
 * @returns {AxiosPromise}
 */
export function update(url, data) {
  return request({
    url: url,
    method: 'put',
    data: data
  })
}

/**
 * 通用单条数据获取
 * @param url
 * @param id
 * @returns {AxiosPromise}
 */
export function get(url, id) {
  return request({
    url: url + "/" + id,
    method: 'get',
  })
}

/**
 * 通用的表格数据删除
 * @param url
 * @param ids
 * @returns {AxiosPromise}
 */
export function del(url, ids) {
  return request({
    url: url + "/" + ids,
    method: 'delete',
  })
}

/**
 * 通用表格数据清空
 * @param url
 * @returns {AxiosPromise}
 */
export function clean(url) {
  return request({
    url: url + "/clean",
    method: 'delete',
  })
}
