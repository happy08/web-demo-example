import axios from 'axios'
import qs from 'qs'
import router from '@/router'
import localStorage from '@/utils/localStorage'
import toast from "@/components/toast"

// 创建axios实例
let instance = axios.create({
  timeout: 8000,
  withCredentials: true,  // 设置 withCredentials 使请求带上 `cookies`
  headers: {
    //post: {
    'Content-Type': 'application/json' //'application/x-www-form-urlencoded;charset=UTF-8'
    //'Cookie': '63_mini_agent_user_cookie=03afdbd66e7929b125f8597834fa83a4'
    //}
  }
});

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
window.__axiosPromiseArr = []
instance.interceptors.request.use(
  config => {
    const token = localStorage.get('token')
    //token && (config.headers['Authorization'] = token)  // 后台加上跨域和放开Authorization权限
    token && (config.headers.token = token)
    config.cancelToken = new axios.CancelToken(cancel => {
      //取消请求存在全局，切换路由时执行
      window.__axiosPromiseArr.push({ cancel })
    })
    return config
  },
  error => Promise.error(error)
)

/**
 * 响应拦截器
 */
instance.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    } else {
      Promise.reject(res)
    }
  },
  error => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围 
      errorHandle(response.status);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      if (window.__axiosPromiseArr.length !== 0) { //非用户取消
        tip('网络异常');
        return Promise.reject()
      }
    }
  });


/**
* get方法
* @param {String} url 地址
* @param {Object} params 参数
*/
export function get(url, params) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    })
  })
}

/** 
 * post方法
 * @param {String} url 地址
 * @param {Object} params 参数
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    instance.post(url, qs.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        if (!params.showMsg) { //错误不提示
          reject(err)
        }
      })
  })
}

//提示
const tip = (msg, duration = 2000) => {
  toast(msg, {
    duration: duration
  })
}

/** 
 * 跳转登录页
 * 携带当前页面路由，在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status) => {
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401: toLogin(); break
    case 403:
      tip('登录过期，请重新登录');
      localStorage.remove('token'); // 清除token并跳转登录页
      setTimeout(() => { toLogin() }, 1000);
      break
    case 404: tip('请求的资源不存在'); break
    case 408: tip('请求超时'); break
    case 500: tip('服务器错误'); break
    case 501: tip('服务未实现'); break
    case 502: tip('网络错误'); break
    case 503: tip('服务不可用'); break
    case 504: tip('网络超时'); break
    case 505: tip('HTTP版本不受支持'); break
    default: tip(`连接出错(${status})!`);
  }
}

//export default instance
