/** 
 * api接口统一出口
 */
import { config } from '../config'; // 导入配置域名
import { get, post } from '../axios'; // 导入配置域名

let url = config.DOMAIN_WWW + config.API_PATH + config.API_VERSION
const isDev = process.env.NODE_ENV === 'development'
if (isDev) url = '/api/'  //跨域代理

const api = {
  config,   //this.$api.config 取配置信息
  // get 
  list: (params) => get(`${url}login/loginact`, params),

  qu: (params) => post(`${url}agent-web/miniprogram/useCaseService/queryUseCaseNew`, params),
  findByPage: (params) => post(`${url}base-api-miniprogram/miniprogram-project/findByPage`, params),

  uploader: (params) => post(`${url}base-api-miniprogram/miniprogram-project/findByPage`, params)


}

export default api
