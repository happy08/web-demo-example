<template>
    <div>
        <base-header title="flex布局"></base-header>

        <div class="mgb-5">
            <cy-cell>## row</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>gutter String/Number 列元素之间的间距（单位为px）</cy-cell>
            <cy-cell>tag String 自定义元素标签 div</cy-cell>
            <cy-cell>justify String start 主轴对齐方式，可选值为 start end center space-around space-between</cy-cell>
            <cy-cell>align String flex-start 交叉轴对齐方式，可选值为 flex-start center flex-end</cy-cell>
            <cy-cell>wrap String nowrap 是否换行，可选值为 nowrap wrap reverse</cy-cell>

            <cy-cell>## col</cy-cell>
            <cy-cell>span String/Number 列元素宽度</cy-cell>
            <cy-cell>offset String/Number 列元素偏移距离</cy-cell>
        </div>

        <cy-row wrap="wrap" :gutter="20">
            <cy-col :span="8">
                <div class="inner">1</div>
            </cy-col>
            <cy-col :span="8" :offset="2">
                <div class="inner">2</div>
            </cy-col>
            <cy-col :span="8">
                <div class="inner">2</div>
            </cy-col>
            <cy-col :span="8">
                <div class="inner">4</div>
            </cy-col>
        </cy-row>
    </div>
</template>

<script>
export default {
    name: "row",
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
.inner {
    background: #a8cbfa;
}
</style>
