<template>
    <div>
        <base-header title="cell"></base-header>

        <div>
            <cy-cell>## picker</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>data: Array [] 数据</cy-cell>
            <cy-cell>v-model: Array [] 选中的值</cy-cell>
            <cy-cell>columns: Number 0 指定联动模式下的列数，当不指定时表示非联动</cy-cell>
            <cy-cell>displayColumns: Number 0 指定显示多少列，隐藏多余的</cy-cell>
            <cy-cell>itemClass: String "scroller-item"</cy-cell>
            <cy-cell>columnWidth: Array 每一列宽度，只需除最后一列宽度，最后一列自动宽度， 如对于3列选择：[1/2, 1/5]</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>@onChange(value) 选择值变化时触发 value选中值</cy-cell>

            <cy-cell>内置方法名 说明</cy-cell>
            <cy-cell>getNameValues(value) 根据value获取字面值 this.$refs.picker.getNameValues([1,2])</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",

    data() {
        return {
            // data数据格式示例：
            // --非联动
            list: [
                ["小米", "iPhone"],
                ["小米1", "iPhone2"]
            ],
            list2: [
                [
                    { name: "2019届5班", value: "1" },
                    { name: "2019届4班", value: "2" }
                ]
            ],
            //--联动
            list3: [
                {
                    name: "中国",
                    value: "china",
                    parent: "0" // 为一级时可以不写 parent，但是此时允许为数字 0、空字符串或者字符串 '0'
                },
                {
                    name: "美国",
                    value: "USA",
                    parent: "0"
                },
                {
                    name: "广东",
                    value: "china001",
                    parent: "china"
                },
                {
                    name: "广西",
                    value: "china002",
                    parent: "china"
                }
            ]
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
