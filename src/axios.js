import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
// 拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.params = {
    ...config.params,
    // appkey: 'dongmeiqi_i_1545272862243'
    appkey: 'Silence_Y_1590670365499'

  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
