/**
 * 全局封装 axios, 缓存 token；
 * 登录 401 重定向到 /login 页面；
 * 拦截所有错误信息，弹出报错信息；
 * 封装 request 供 API 调用只暴露数据；
 */
import axios from "axios";
import qs from "qs";
import { apiPrefix } from "../config";
// import { Message, Alert } from "element-ui"; // TODO

axios.defaults.baseURL = apiPrefix;

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.interceptors.request.use(
  config => {
    // 添加时间戳去缓存
    if (config.method === "get") {
      let isQuery = /\?.*=.*/g.test(config.url);
      let timeStamp = new Date().getTime();
      if (isQuery) {
        config.url += `&t=${timeStamp}`;
      } else {
        config.url += `?t=${timeStamp}`;
      }
    }

    // 序列化 || config.method === "delete"
    if (config.method === "post" || config.method === "put") {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  error => {
    // Message({ // TODO
    //   showClose: true,
    //   message: error,
    //   type: "error"
    // })
    return Promise.reject(error);
})

/**
 * 拦截请求返回的 response
 * 1. 返回 http 状态码 在 200-400 间返回对象的数据
 * 2. 返回 http 状态码 不在 200-400 间 且不是 401 弹出报错信息
 * 2.1 如果非登录请求 返回 401 则重新要求登录；
 * 2.2 如果登录请求 返回 401 重新登录
 * 2.3 返回除401的错误直接弹框报错
 */
axios.interceptors.response.use(
  res => {
    let { data } = res;
    return data;
  },
  error => {
    let { response } = error; // TODO

    if (!response) {
      return Promise.reject(error);
    }
    // let {data, status} = response;
    // Message({
    //   duration: 0,
    //   showClose: true,
    //   message: data.errors.message,
    //   type: "error"
    // })
    return Promise.reject(error);
  }
);

// Vue.http = Vue.prototype.$http = axios

export default function request({ method = "get", url, data, params }) {
  return axios.request({
    method: method,
    url,
    data,
    params,
    timeout: 20000
  });
}
