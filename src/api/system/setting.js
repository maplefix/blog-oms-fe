import request from '@/utils/request'


/**
 * 修改网站设置
 * @param data
 * @returns {AxiosPromise}
 */
export function updateSiteSetting(data) {
  return request({
    url: '/system/setting/siteSetting',
    method: 'put',
    data: data
  })
}

/**
 * 获取站点信息
 * @returns {AxiosPromise}
 */
export function getSiteSetting() {
  return request({
    url: '/system/setting/siteSetting',
    method: 'get',
  })
}

//修改Email配置
export function updateEmailSetting(data) {
  return request({
    url: '/system/setting/emailSetting',
    method: 'put',
    data: data
  })
}

export function getEmailSetting() {
  return request({
    url: '/system/setting/emailSetting',
    method: 'get',
  })
}

//修改about
export function updateAbout(data) {
  return request({
    url: '/system/setting/about',
    method: 'put',
    data: data
  })
}

export function getAbout() {
  return request({
    url: '/system/setting/about',
    method: 'get',
  })
}
