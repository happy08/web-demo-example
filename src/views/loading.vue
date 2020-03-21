<template>
    <div>
        <base-header title="loading"></base-header>

        <cy-loading text="加载中" size="25"></cy-loading>
        <div>
            <cy-cell>## loading</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>text: String "14px" 文字</cy-cell>
            <cy-cell>size: Number "25px" 大小 宽高</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "loading",
    data() {
        return {};
    },
    components: {},
    created() {},
    computed: {},
    methods: {}
};
</script>
<style lang="scss">
</style>
