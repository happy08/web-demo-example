<template>
    <div>
        <base-header title="badge"></base-header>

        <cy-badge text="2" color="#f33"></cy-badge>
        <cy-badge text="2" color="#f33" plain></cy-badge>

        <div>
            <cy-cell>## badge</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>text: [String, Number] “” 文字</cy-cell>
            <cy-cell>color: String “” 颜色</cy-cell>
            <cy-cell>plain: Boolean “” 边框模式</cy-cell>
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
<style lang="scss">
</style>
