<template>
    <div>
        <cy-tab
            v-model="curIndex"
            barWidth="80%"
            :noScrollNum="4"
            :barActiveColor="['#f33','#fa9']"
            :barHeight="4"
            @onItemClick="onItemClick"
            @onIndexChange="onIndexChange"
        >
            <cy-tab-item>
                已发货
                <cy-badge text="3">4</cy-badge>
            </cy-tab-item>
            <cy-tab-item selected>未发货</cy-tab-item>
            <cy-tab-item>全部订单</cy-tab-item>
            <cy-tab-item>全部订单</cy-tab-item>
            <cy-tab-item>未发货</cy-tab-item>
        </cy-tab>

        <cy-tab1 v-if="curIndex==1">1</cy-tab1>
        <cy-tab2 v-if="curIndex==2"></cy-tab2>

        <!-- <cy-btn sm @click.native="curIndex=1">第2个</cy-btn> -->

        <div>
            <cy-cell>## tab</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>barHeight: [Number, String] 2</cy-cell>
            <cy-cell>activeColor: String "" 选中文字颜色</cy-cell>
            <cy-cell>barActiveColor: String "" bar选中颜色</cy-cell>
            <cy-cell>defaultColor: String "" 默认文字颜色</cy-cell>
            <cy-cell>disabledColor: String "" 禁止文字颜色</cy-cell>
            <cy-cell>barWidth: String "100%" bar宽度 如 30px</cy-cell>
            <cy-cell>preventDefault: Boolean 是否禁止自动切换 tab-item</cy-cell>
            <cy-cell>noScrollNum: Number 4 多少个内不滚动</cy-cell>
            <cy-cell>barPosition: String "bottom" bar位置 只能是bottom top</cy-cell>

            <cy-cell>方法名 说明</cy-cell>
            <cy-cell>onIndexChange tab-item 切换时触发</cy-cell>
            <cy-cell>onBeforeIndexChange 点击 tab-item 并且 属性 preventDefault 为 true 时触发</cy-cell>

            <cy-cell>## tab-item</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>disabled: Boolean false 禁止</cy-cell>
            <cy-cell>activeClass: String "" 当前项选中时的class</cy-cell>

            <cy-cell>方法名 说明</cy-cell>
            <cy-cell>onItemClick 当前 tabItem 被点击时触发</cy-cell>
        </div>
    </div>
</template>

<script>
import cyTab1 from "./tab/tab1.vue"
import cyTab2 from "./tab/tab2.vue"
export default {
    name: "tab",
    data() {
        return {
            curIndex: 2,

        };
    },
    components: {
        cyTab1,
        cyTab2
    },
    created() {
    },
    computed: {

    },
    watch: {
        curIndex(nVal, oVal) {
            console.log("o", nVal, oVal);
        }
    },
    methods: {
        onItemClick(i) {
            console.log("i", i);
        },

        onIndexChange(val, oldVal) {

            console.log("onIndexChange", val, oldVal);
            console.log('a', this.curIndex);
        },


    }
};
</script>
<style lang="scss">
.nav-scroll-list-wrap {
    transform: rotate(0deg);
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-right: 30px;
}

.nav-wrapper {
    display: inline-block;
    white-space: nowrap;
    line-height: 36px;
    padding: 0 5px;
}
.nav-wrapper .nav-item {
    width: 100px;
    height: 100px;
    display: inline-block;
    padding: 0 5px;
}
</style>
