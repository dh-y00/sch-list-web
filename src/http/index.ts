import axios, { AxiosHeaders, AxiosRequestConfig } from 'axios';
import {registerInterceptors} from '@/http/interceptor';
import { SucFunc, FailFunc } from '@/http/model/HttpModel';

axios.defaults.headers["Content-Type"] = "application/json;charset=utf-8";

const http = axios.create({
    baseURL: 'http://127.0.0.1:8080', // 替换为你的 API 基础 URL
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

http.interceptors.request.use((config) => {
  
  registerInterceptors.forEach((interceptor) => {
    if(interceptor.isMatch(config)) {
      // Add your interceptor logic here
      interceptor.requestInterceptor(config);
    }
  });
  return config;
});


http.interceptors.response.use((response) => {
  // registerInterceptors.forEach((interceptor) => {
  //   if(interceptor.isMatch(config)) {
  //     // Add your interceptor logic here
  //     interceptor.requestInterceptor(response);
  //   }
  // });
  return response;
})

interface HttpParams {

  /**
   * 需要放入的请求头参数
   */
  headers?: { [key: string]: string },

  /**
   * 请求参数
   */
  params?: object | [key: string, value: string]

  /**
   * 路径参数 请按照顺序传入参数
   */
  pathParams?: Array<string>

}

class Http<T> {

  constructor(
    private url: string,
    private params: HttpParams
  ) {
    this.url = url;
    this.params = params;
  }

  public get(suc: SucFunc<T>, fail: FailFunc) {
    let path = '';
    if (this.params.pathParams) {
      path = "/" + this.params.pathParams.join('/');
    }

    const config: AxiosRequestConfig = {
      params: this.params.params,
      headers: this.buildHeaders(this.params.headers)
    };
    http.get(this.url + path, config).then((res) => {
      if (res.data['code'] == '200') {
          suc(res.data['data'])
      } else {
          fail(res.data['code'], res.data['msg'])
      }
    }).catch((err) => {
        fail('-999', err)
    });
  }

  public post(suc: SucFunc<T>, fail: FailFunc) {
    let path = '';
    if (this.params.pathParams) {
      path = "/" + this.params.pathParams.join('/');
    }
    const config: AxiosRequestConfig = {
      params: this.params.params,
      headers: this.buildHeaders(this.params.headers)
    };
    http.post(this.url + path, this.params.params, config).then((res) => {
      if (res.data['code'] == '200') {
          suc(res.data['data'])
      } else {
          fail(res.data['code'], res.data['msg'])
      }
    }).catch((err) => {
        fail('-999', err)
    });
  }

  public static axiosHttp() {
    return http;
  }

  /**
   * 构建 axios 请求头
   * @param headers 传入的请求头
   * @returns 返回 axios 请求头
   */
  private buildHeaders(headers?: { [key: string]: string }): AxiosHeaders {
    const axiosHeaders = new AxiosHeaders();
    if (headers) {
      Object.entries(headers).forEach(([key, value]) => {
        axiosHeaders.set(key, value);
      });
    }
    return axiosHeaders;
  }

}

export default Http;