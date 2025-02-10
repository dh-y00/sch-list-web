/**
 * 父组件向子组件传递的参数
 */
interface SearchItemParams {
    /**
     * 搜索项类型
     */
    type:  string,
    /**
     * 搜索项编码，后面向后端提交请求也是依据这个
     */
    code: string,
    /**
     * 搜索项的值，默认值
     */
    value?: string,
    /**
     * 搜索项的标签
     */
    label: string,
    /**
     * 搜索项的占位提示，比如请输入xxx
     */
    placeholder: string,
    /**
     * 如果说，搜索项是一个下拉框之类的，那么这个字段就是下拉框的选项
     */
    selectItems?: Array<SelectItem>
    
}


interface SelectItem {

    /**
     * 选项的值
     */
    key: string,

    /**
     * 选项的标签
     */
    value: string

    /**
     * 级联选择的时候有用
     */
    children?: SelectItem
}

export { SearchItemParams, SelectItem }