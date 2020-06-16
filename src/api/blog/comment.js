import request from '@/utils/request'
import {updateCategory} from "./category";

/**
 * 查询评论列表
 * @param query
 * @returns {AxiosPromise}
 */
export function listComment(query) {
  return request({
    url: '/comment/list',
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
    url: '/comment/' + id,
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
    url: '/comment',
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
    url: '/comment/' + id,
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
    support: diaplay
  };
  updateComment(data);
}
