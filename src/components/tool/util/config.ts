interface InputComponent {
    layout?: string,
    vModel?: string,
    name?: string,
    formId?: number,
    label?: string;
    tag?: string;
    tagIcon?: string;
    placeholder?: string;
    defaultValue?: any;
    span?: number;
    labelWidth?: number | null;
    style?: { width: string };
    clearable?: boolean;
    prepend?: string;
    append?: string;
    'prefix-icon'?: string;
    'suffix-icon'?: string;
    maxlength?: number | null;
    'show-word-limit'?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    required?: boolean;
    regList?: any[];
    changeTag?: boolean;
    document?: string;
    type?: string;
    isChecked?: true;
    autosize?: { minRows: number; maxRows: number };
    'show-password'?: boolean;
    min?: number;
    max?: number;
    step?: number;
    'step-strictly'?: boolean;
    precision?: number;
    'controls-position'?: string;
}

interface FormConfig {
    formRef: string;
    formModel: string;
    size: string;
    labelPosition: string;
    labelWidth: number;
    formRules: string;
    gutter: number;
    disabled: boolean;
    span: number;
    formBtns: boolean;
}

export const formConf: FormConfig = {
    formRef: 'elForm',
    formModel: 'formData',
    size: 'medium',
    labelPosition: 'right',
    labelWidth: 100,
    formRules: 'rules',
    gutter: 15,
    disabled: false,
    span: 24,
    formBtns: true
}

export const inputComponents: InputComponent[] = [
    {
        label: '单行文本',
        tag: 'el-input',
        tagIcon: 'input',
        placeholder: '请输入',
        defaultValue: undefined,
        span: 24,
        labelWidth: null,
        style: { width: '100%' },
        clearable: true,
        prepend: '',
        append: '',
        'prefix-icon': '',
        'suffix-icon': '',
        maxlength: null,
        'show-word-limit': false,
        readonly: false,
        disabled: false,
        required: true,
        regList: [],
        changeTag: true,
        document: 'https://element.eleme.cn/#/zh-CN/component/input'
    }
];

export {
    InputComponent, FormConfig
}