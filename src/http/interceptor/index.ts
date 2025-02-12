import { AxiosResponse, InternalAxiosRequestConfig } from "axios";

/**
 * Http 拦截器接口  
 */
interface IHttpInterceptor {

    requestInterceptor(axiosConfig: InternalAxiosRequestConfig): void;

    responseInterceptor(axiosConfig: AxiosResponse): void;

    isMatch(axiosConfig: InternalAxiosRequestConfig): boolean;

}

/**
 * 日志 只是为了打印日志
 */
class LogHttpInterceptor implements IHttpInterceptor {
    responseInterceptor(axiosConfig: AxiosResponse): void {
        console.log("responseInterceptor", axiosConfig);
    }

    requestInterceptor(axiosConfig: InternalAxiosRequestConfig): void {
        console.log("responseInterceptor", axiosConfig);
    }

    isMatch(): boolean {
        return false;
    }
}

/**
 * 拦截器注册, 用于注册所有的拦截器
 * 简单粗暴的方式，直接在这里注册
 */
const registerInterceptors: Array<IHttpInterceptor> = [
    new LogHttpInterceptor()
];

export {
    IHttpInterceptor,
    registerInterceptors
}
