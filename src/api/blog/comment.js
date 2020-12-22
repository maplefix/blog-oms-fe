import request from '@/utils/request'

/**
 * 查询评论列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listComment(query) {
  return request({
    url: '/blog/comment/list',
    method: 'get',
    params: query
  })
}

/**
 * 查询评论详细
 * @param id
 * @returns {AxiosPromise}
 */
export function getComment(id) {
  return request({
    url: '/blog/comment/' + id,
    method: 'get'
  })
}

/**
 * 修改评论配置
 * @param data
 * @returns {AxiosPromise}
 */
export function updateComment(data) {
  return request({
    url: '/blog/comment',
    method: 'put',
    data: data
  })
}

/**
 * 删除评论配置
 * @param id
 * @returns {AxiosPromise}
 */
export function delComment(id) {
  return request({
    url: '/blog/comment/' + id,
    method: 'delete'
  })
}


/**
 * 修改评论显示
 * @param id
 * @param display
 */
export function changeCommentDisplay(id, display) {
  let data = {
    id: id,
    display: display
  };
  return request({
    //url: '/blog/comment',
    url: '/blog/comment/'+id+'/display/'+display,
    method: 'put',
    data: data
  })
}
