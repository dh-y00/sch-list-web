/**
 * 父组件向子组件传递table列参数
 */
interface TableColParams {

    /**
     * 列的编码
     */
    code: string,

    /**
     * 列的标签
     */
    name: string,

    /**
     * 列的宽度
     */
    width?: string,

    /**
     * 列的对齐方式
     */
    align?: string,

    /**
     * 列的排序方式
     */
    sort?: string,
}

/**
 * 父组件向子组件传递table 行, 操作按钮
 */
interface TableRowBtnParams {
    /**
     * 按钮名称
     */
    name: string,

    /**
     * 按钮 code
     */
    code: string,
    
    /**
     * 点击按钮的route
     */
    route: string,
    
    /**
     * 展示方式
     */
    showMethod: string,
    
    /**
     * 按钮排的顺序
     */
    sort: number,

    /**
     * 点击这个按钮传递的参数
     */
    btnParams: Array<string>
}

export {
    TableColParams, TableRowBtnParams
}