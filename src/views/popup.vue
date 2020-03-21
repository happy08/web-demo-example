<template>
    <div>
        <base-header title="popup"></base-header>

        <cy-btn sm @click="show=true">底弹出</cy-btn>
        <cy-btn sm @click="show2=true">中弹出</cy-btn>
        <cy-btn sm @click="show3=true">上弹出</cy-btn>

        <cy-popup
            v-model="show"
            :closeIcon="true"
            round
            position="bottom"
            height="40%"
            width="100%"
        >底弹出</cy-popup>

        <cy-popup
            v-model="show2"
            :closeIcon="true"
            closeIconPosition="bottom-center"
            round
            position="center"
            width="50%"
            height="50%"
            background="#f30"
        >
            <div class="inner">中弹出</div>
        </cy-popup>

        <cy-popup
            v-model="show3"
            :closeIcon="true"
            round
            position="top"
            closeIconPosition="bottom-center"
            height="50%"
            background="#f30"
        >
            <div class="inner">上弹出</div>
        </cy-popup>

        <div>
            <cy-cell>## popup 上下左右中 弹框</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: Boolean false 显示</cy-cell>
            <cy-cell>position: String "center" 位置 center top left bottom right</cy-cell>
            <cy-cell>width: String "100%" 宽度</cy-cell>
            <cy-cell>height: String "40%" 高度</cy-cell>
            <cy-cell>closeIcon: Boolean true 显示关闭按钮</cy-cell>
            <cy-cell>closeIconPosition: String "top-right" 关闭按钮位置 top-left top-right bottom-left bottom-right bottom-center</cy-cell>
            <cy-cell>round: Boolean false 圆角</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            show: false,
            show2: false,
            show3: false
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
