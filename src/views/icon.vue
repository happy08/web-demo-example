<template>
    <div>
        <base-header title="icon"></base-header>
        <div class="icon">
            <cy-icon type="loading"></cy-icon>
            <cy-icon type="frown"></cy-icon>
            <cy-icon type="smile"></cy-icon>
            <cy-icon type="cloud-upload"></cy-icon>
            <cy-icon type="cloud-download"></cy-icon>
            <cy-icon type="right"></cy-icon>
            <cy-icon type="left"></cy-icon>
            <cy-icon type="up"></cy-icon>
            <cy-icon type="vertical-align-top"></cy-icon>
            <cy-icon type="eye"></cy-icon>
            <cy-icon type="eye-close"></cy-icon>
            <cy-icon type="check"></cy-icon>
            <cy-icon type="close"></cy-icon>
            <cy-icon type="minus"></cy-icon>
            <cy-icon type="check-circle-fill"></cy-icon>
            <cy-icon type="minus-circle-fill"></cy-icon>
            <cy-icon type="close-circle-fill"></cy-icon>
            <cy-icon type="plus-circle-fill"></cy-icon>
            <cy-icon type="search"></cy-icon>
            <cy-icon type="plus"></cy-icon>
        </div>
        <div>
            <cy-cell>## icon</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>type: String “” 类型 可选值见 https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1641833 或者 图片路径</cy-cell>
            <cy-cell>size: String “” 大小 如：20</cy-cell>
            <cy-cell>color: String '#666666' 颜色</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {};
    },
    components: {},
    created() {},
    computed: {},

    methods: {}
};
</script>
<style lang="scss" scoped>
.icon .cy-icon {
    width: 40px;
    height: 40px;
}
.cy-col {
    padding: 5px;
    text-align: center;
}
</style>
