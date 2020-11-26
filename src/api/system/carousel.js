import request from '@/utils/request'

/**
 * 修改首页轮播图显示
 * @param id
 * @param display
 * @returns {AxiosPromise}
 */
export function changeCarouselDisplay(id, display) {
  return request({
    url: '/system/carousel/' + id + '/display/' + display,
    method: 'put'
  })
}

//切换轮播图target
export function changeCarouselTarget(id, target) {
  return request({
    url: '/system/carousel/' + id + '/target/' + target,
    method: 'put'
  })
}
