import request from '@/utils/request'

/**
 * 查询博客列表
 * @param query
 */
export function listBlog(query) {
  return request({
    url: '/blog/list',
    method: 'get',
    params: query
  });
}

/**
 * 查询博客详情
 * @param id
 */
export function getBlog(id) {
  return request({
    url: '/blog/' + id,
    method: 'get'
  });
}

/**
 * 新增博客
 * @param data
 */
export function addBlog(data) {
  return request({
    url: '/blog',
    method: 'post',
    data: data
  });
}

/**
 * 修改博客配置
 * @param data
 */
export function updateBlog(data) {
  return request({
    url: '/blog',
    method: 'put',
    data: data
  });
}

/**
 * 删除博客配置
 * @param id
 * @returns {AxiosPromise}
 */
export function delBlog(id) {
  return request({
    url: '/blog/' + id,
    method: 'delete'
  })
}

/**
 * 修改博客推荐
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
 * 修改博客评论
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
 * 新增博客草稿
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
 * 修改博客草稿
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
