import request from '@/utils/request'

/**
 * 获取路由
 * @returns {AxiosPromise}
 */
export const getRouters = () =>{
  return request({
    url: '/getRouters',
    method: 'get'
  });
};
