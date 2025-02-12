interface BaseResponse<T> {
    /**
     * 响应码
     */
    code: string

    /**
     * 请求响应 msg
     */
    msg: string

    /**
     * 响应数据
     */
    data: T

}


interface SucFunc<T> {

    // eslint-disable-next-line
    (data: T): void;
}

interface FailFunc {

    // eslint-disable-next-line
  (code: string, e: any): void;
}

export {
    BaseResponse, SucFunc, FailFunc
}