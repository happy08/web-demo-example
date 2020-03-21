<template>
    <div>
        <base-header title="button"></base-header>
        <cy-btn @click.native="onClick" type="blue" round>类型</cy-btn>
        <cy-btn :gradients="['#f49']" lg round>类型</cy-btn>
        <cy-btn :gradients="['#f29','#f41']">类型</cy-btn>

        <cy-row class="round-30 overflow">
            <cy-col :span="12">
                <cy-btn type="blue" angle>1</cy-btn>
            </cy-col>
            <cy-col :span="12">
                <cy-btn type="yellow" angle>1</cy-btn>
            </cy-col>
        </cy-row>

        <div class>
            <cy-cell>## button</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>type: String "primary" 类型 可选primary warn danger</cy-cell>
            <cy-cell>text: String "" 文字</cy-cell>
            <cy-cell>disabled: Boolean false 禁止</cy-cell>
            <cy-cell>lg: Boolean false 大</cy-cell>
            <cy-cell>sm: Boolean false 小</cy-cell>
            <cy-cell>xs: Boolean false 极小</cy-cell>
            <cy-cell>round: Boolean false 圆角</cy-cell>
            <cy-cell>angle: Boolean false 直角</cy-cell>
            <cy-cell>plain: Boolean false 边框模式</cy-cell>
            <cy-cell>inline: Boolean false 行内</cy-cell>
            <cy-cell>link: String "" 链接</cy-cell>
            <cy-cell>gradients: Array [] 渐变 如["#1111","#999"]</cy-cell>
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

    methods: {
        onClick() {
            alert("onClick");
        }
    }
};
</script>
<style lang="scss">
</style>
