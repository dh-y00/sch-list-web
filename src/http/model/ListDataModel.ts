/**
 * 获取页面数据的参数
 */
interface ListDataParams {
    /**
     * 页面编码，必须传
     */
    pageId: string;

    /**
     * 一页大小
     */
    pageSize?: number;

    /**
     * 第几页
     */
    pageNum?: number;

    /**
     * 其他附属属性可以不传
     */
    [key: string]: any; // 动态属性，键是字符串，值可以是任意类型
}

/**
 * 获取页面数据的响应
 */
interface ListDataResponse {

    /**
     * 总数
     */
    total: number;

    /**
     * 数据
     */
    rows: Array<{[key: string]: any}>;

}

export {
    ListDataParams,ListDataResponse
}