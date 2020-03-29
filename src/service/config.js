//测试配置
const development = {
  DOMAIN_BASE: 'https://agent.wlyinfo.com/', //域名
  DOMAIN_API: 'https://coupon.mynatapp.cc/', //请求地址
  //DOMAIN_MAIN: '',  //其他地址
  PATH_API: '',       //接口路径  api/
  VERSION_API: '', //版本
}

// const config = {
//     serverApi: 'https://agent.wlyinfo.com', // 业务域名接口，
//     fileApi: 'https://agent.wlyinfo.com', // 文件上传下载接口
//     deviceApi: 'https://www.haoanda.cn', // 设备api
//     scanApi: 'https://www.haoanda.cn', // 扫码API
//     env: 'pro' // 开发环境 dev/pro
// }


//线上配置
const production = {
  DOMAIN_BASE: 'test.com',
  DOMAIN_API: 'https://coupon.mynatapp.cc/',
  //DOMAIN_MAIN: '', //其他地址
  PATH_API: '',       //接口路径  api/
  VERSION_API: '', //版本
}

const isDev = process.env.NODE_ENV === 'development'
let configs = {}
if (isDev) configs = development
else configs = production

//导出配置
export const config = configs


