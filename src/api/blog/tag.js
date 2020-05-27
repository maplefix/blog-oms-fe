import request from '@/utils/request'

/**
 * 查询标签列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listTag(query) {
  return request({
    url: '/tag/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询标签详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getTag(id) {
  return request({
    url: '/blog/' + id,
    method: 'get'
  })
}

/**
 * 新增标签配置
 * @param data
 * @returns {AxiosPromise}
 */
export function addTag(data) {
  return request({
    url: '/blog',
    method: 'post',
    data: data
  })
}

/**
 * 修改标签配置
 * @param data
 * @returns {AxiosPromise}
 */
export function updateTag(data) {
  return request({
    url: '/blog',
    method: 'put',
    data: data
  })
}

/**
 * 删除标签配置
 * @param id
 * @returns {AxiosPromise}
 */
export function delTag(id) {
  return request({
    url: '/blog/' + id,
    method: 'delete'
  })
}

/**
 * 修改标签推荐
 * @param id
 * @param support
 * @returns {AxiosPromise}
 */
export function changeBlogSupport(id, support) {
  let data = {
    id: id,
    support: support
  };
  return request({
    url: '/blog/support',
    method: 'put',
    data: data
  })
}


/**
 * 修改标签评论
 * @param id
 * @param comment
 * @returns {AxiosPromise}
 */
export function changeBlogComment(id, comment) {
  let data = {
    id: id,
    comment: comment
  };
  return request({
    url: '/blog/comment',
    method: 'put',
    data: data
  })
}

/**
 * 获取Blog Tag
 * @param query
 * @returns {AxiosPromise}
 */
export function listBlogTagList(query) {
  return request({
    url: '/blog/tag/' + query,
    method: 'get',
  })
}


/**
 * 新增标签草稿
 * @param data
 * @returns {AxiosPromise}
 */
export function addBlogDraft(data) {
  return request({
    url: '/blog/draft',
    method: 'post',
    data: data
  })
}

/**
 * 修改标签草稿
 * @param data
 * @returns {AxiosPromise}
 */
export function updateBlogDraft(data) {
  return request({
    url: '/blog/draft',
    method: 'put',
    data: data
  })
}
