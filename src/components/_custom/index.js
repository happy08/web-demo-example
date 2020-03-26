//全局自定义组件
import Vue from 'vue'
import BaseTabbar from './base_tabbar.vue'
import BaseHeader from './base_header.vue'
const components = {
    BaseTabbar,
    BaseHeader
}

Object.keys(components).forEach((key) => {
    Vue.component(key, components[key])
})