<template>
    <div>
        <base-header title="upload"></base-header>

        <cy-upload :maxLen="9" :multiple="true"></cy-upload>

        <div>
            <cy-cell>## upload</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>maxLen: Number 最大个数</cy-cell>
            <cy-cell>multiple: Boolean 多选</cy-cell>
            <cy-cell>maxSize: Number 最大字节</cy-cell>
            <cy-cell>acceptType: Array ["image/jpeg", "image/png", "image/gif", "image/bmp"] 类型</cy-cell>
            <cy-cell>otherFormData: Object 上传自定义参数</cy-cell>
            <cy-cell>imgList: 图片 最大个数</cy-cell>
            <cy-cell>maxLen: Number 最大个数</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "upload",
    data() {
        return {
            src: [],
            imgList: [] //上传的图片
        };
    },
    components: {},
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="scss">
</style>
