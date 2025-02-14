import { defineComponent, h, PropType, VNode } from 'vue'
import { makeMap } from '@/components/tool/util/index'

const isAttr = makeMap(
  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,'
  + 'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,'
  + 'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,'
  + 'name,contenteditable,contextmenu,controls,coords,data,datetime,default,'
  + 'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,'
  + 'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,'
  + 'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,'
  + 'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,'
  + 'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,'
  + 'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,'
  + 'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,'
  + 'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,'
  + 'target,title,type,usemap,value,width,wrap'
)

function vModel(self: any, dataObject: any, defaultValue: any) {
  dataObject.modelValue = defaultValue

  dataObject['onUpdate:modelValue'] = (val: any) => {
    self.$emit('update:modelValue', val)
  }
}

type ComponentChildFunc = (h: typeof import('vue').h, conf: any, key: string) => VNode | VNode[];
const componentChild: { [key: string]: { [key: string]: ComponentChildFunc } } = {
  'el-button': {
    default(h, conf, key) {
      return conf[key]
    },
  },
  'el-input': {
    prepend(h, conf, key) {
      return h('template', { slot: 'prepend' }, conf[key])
    },
    append(h, conf, key) {
      return h('template', { slot: 'append' }, conf[key])
    }
  },
  'el-select': {
    options(h, conf, key) {
      const list: VNode[] = []
      conf.options.forEach((item: any) => {
        list.push(h('el-option', { label: item.label, value: item.value, disabled: item.disabled }))
      })
      return list
    }
  },
  'el-radio-group': {
    options(h, conf, key) {
      const list: VNode[] = []
      conf.options.forEach((item: any) => {
        if (conf.optionType === 'button') list.push(h('el-radio-button', { label: item.value }, item.label))
        else list.push(h('el-radio', { label: item.value, border: conf.border }, item.label))
      })
      return list
    }
  },
  'el-checkbox-group': {
    options(h, conf, key) {
      const list: VNode[] = []
      conf.options.forEach((item: any) => {
        if (conf.optionType === 'button') {
          list.push(h('el-checkbox-button', { label: item.value }, item.label))
        } else {
          list.push(h('el-checkbox', { label: item.value, border: conf.border }, item.label))
        }
      })
      return list
    }
  },
  'el-upload': {
    'list-type': (h, conf, key) => {
      const list: VNode[] = []
      if (conf['list-type'] === 'picture-card') {
        list.push(h('i', { class: 'el-icon-plus' }))
      } else {
        list.push(h('el-button', { size: 'small', type: 'primary', icon: 'el-icon-upload' }, conf.buttonText))
      }
      if (conf.showTip) {
        list.push(h('div', { slot: 'tip', class: 'el-upload__tip' }, `只能上传不超过 ${conf.fileSize}${conf.sizeUnit} 的${conf.accept}文件`))
      }
      return list
    }
  }
}

export default defineComponent({
  name: 'DynamicComponent',
  props: {
    conf: {
      type: Object as PropType<Record<string, any>>,
      required: true
    }
  },
  render() {
    const dataObject: any = {
      attrs: {},
      props: {},
      on: {},
      style: {}
    }
    const confClone = JSON.parse(JSON.stringify(this.conf))
    const children: VNode[] = []

    const childObjs = componentChild[confClone.tag]
    if (childObjs) {
      Object.keys(childObjs).forEach(key => {
        const childFunc = childObjs[key]
        if (confClone[key]) {
          const childNodes = childFunc(h, confClone, key)
          if (Array.isArray(childNodes)) {
            children.push(...childNodes)
          } else {
            children.push(childNodes)
          }
        }
      })
    }

    Object.keys(confClone).forEach(key => {
      const val = confClone[key]
      if (key === 'vModel') {
        vModel(this, dataObject, confClone.defaultValue)
      } else if (dataObject[key]) {
        dataObject[key] = val
      } else if (!isAttr(key)) {
        dataObject.props[key] = val
      } else {
        dataObject.attrs[key] = val
      }
    })
    return h(this.conf.tag, dataObject, children)
  }
})
