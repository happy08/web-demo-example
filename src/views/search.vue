<template>
    <div>
        <base-header title="search"></base-header>

        <cy-search v-model="keyword" @search="onSearch" placeholder="请输入关键词"></cy-search>

        <div>
            <cy-cell>## search</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: String “” 值</cy-cell>
            <cy-cell>placeholder: String 提示</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>@search 搜索事件</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "search",
    data() {
        return {
            keyword: "23"
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {
        onSearch() {
            console.log("keyword", this.keyword);
        }
    }
};
</script>
<style lang="scss">
</style>
