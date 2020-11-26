import request from '@/utils/request'

/**
 * 查询七牛云文件存储列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listContent(query) {
  return request({
    url: '/tool/qiNiu',
    method: 'get',
    params: query
  })
}

/**
 * 删除文件
 * @param id
 * @returns {AxiosPromise}
 */
export function delContent(id) {
  return request({
    url: '/tool/qiNiu/' + id,
    method: 'delete'
  })
}

/**
 * 下载文件
 * @param id
 * @returns {AxiosPromise}
 */
export function downloadContent(id) {
  return request({
    url: '/tool/qiNiu/download/' + id,
    method: 'get'
  })
}

/**
 * 文件同步
 * @returns {AxiosPromise}
 */
export function syncContent() {
  return request({
    url: '/tool/qiNiu/synchronize',
    method: 'post'
  })
}

/**
 * 获取配置文件获取配置文件
 * @returns {AxiosPromise}
 */
export function getQiNiuConfig() {
  return request({
    url: '/tool/qiNiu/config',
    method: 'get'
  })
}

/**
 * 更新配置文件
 * @param data
 * @returns {AxiosPromise}
 */
export function updateQiNiuConfig(data) {
  return request({
    url: '/tool/qiNiu/config',
    method: 'put',
    data: data
  })
}


// listContent, delContent, uploadContent, downloadContent
