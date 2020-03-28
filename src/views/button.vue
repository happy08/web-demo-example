<template>
    <div>
        <base-header title="button"></base-header>
        <div class="pd-10 bgwhite">
            <cy-btn @click.native="onClick" type="grey" plain1 round>灰色</cy-btn>
            <cy-btn @click.native="onClick" type="blue" icon="eye" plain1 round>蓝色</cy-btn>
            <br />
            <cy-btn :background="['#f91','#f41']" shadow="0 0 10px #f91">背景渐变投影</cy-btn>
            <br />
            <cy-btn :background="['#f91','#f41','vertical']" shadow="0 0 10px #f91">背景渐变投影</cy-btn>
            <br />
            <cy-btn disabled lg round background="#f49">禁用</cy-btn>
            <br />

            <cy-btn background="#f49" lg plain angle>直角</cy-btn>
            <br />
            <cy-btn background="#f49" inline round>自定义背景</cy-btn>
            <cy-btn background="#f49" sm round icon="eye">sm</cy-btn>
            <cy-btn background="#f49" xs round>按钮</cy-btn>
            <cy-btn background="#f49" xs plain round>按钮</cy-btn>

            <br />
            <br />

            <cy-row class="round-30 hidden">
                <cy-col :span="8">
                    <cy-btn type="blue" sm block angle>1</cy-btn>
                </cy-col>
                <cy-col :span="8">
                    <cy-btn type="green" sm block angle>1</cy-btn>
                </cy-col>
                <cy-col :span="8">
                    <cy-btn type="yellow" sm block angle>1</cy-btn>
                </cy-col>
            </cy-row>
        </div>

        <div class>
            <cy-cell>## button</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>type: String "blue" 类型 可选blue green yellow red</cy-cell>
            <cy-cell>text: String "" 文字</cy-cell>
            <cy-cell>disabled: Boolean false 禁止</cy-cell>
            <cy-cell>lg: Boolean false 大</cy-cell>
            <cy-cell>sm: Boolean false 小</cy-cell>
            <cy-cell>xs: Boolean false 极小</cy-cell>
            <cy-cell>round: Boolean false 圆角</cy-cell>
            <cy-cell>angle: Boolean false 直角</cy-cell>
            <cy-cell>plain: Boolean false 边框模式</cy-cell>
            <cy-cell>inline: Boolean false 行内元素</cy-cell>
            <cy-cell>block: Boolean false 块级元素</cy-cell>
            <cy-cell>shadow: String "" 投影 例0 0 10px #888</cy-cell>
            <cy-cell>link: String "" 链接</cy-cell>
            <cy-cell>background: String,Array 背景 例#1111 或 ['#f29','#f41','vertical'] vertical渐变垂直</cy-cell>
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
