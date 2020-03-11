
import axios from "axios"

const isDev = process.env.NODE_ENV === "development"

const baseUrl = isDev ? "http://daxun.kuboy.top/api" : "http://daxun.kuboy.top/api"

var instance = axios.create({
    baseURL: baseUrl
});
//请求时获取token
let token = localStorage.getItem("token")
instance.defaults.headers.common['token'] = token;
//设置请求的超时时间
instance.defaults.timeout = 2500;
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default instance