<template>
    <div>
        <base-header title="cell"></base-header>
        <div class="scroll-list-wrap">
            <cy-pulldown-refresh
                ref="scroll"
                :data="items"
                :options="options"
                @pullingDown="onPullingDown"
                @pullingUp="onPullingUp"
            ></cy-pulldown-refresh>
        </div>
        <cy-btn sm @click.native="curIndex=1">第2个</cy-btn>
        <cy-tab
            customBarWidth="60%"
            :noScrollNum="5"
            :barActiveColor="['#f33','#fa9']"
            :barHeight="4"
            @onItemClick="onItemClick"
            :preventDefault="false"
            @onBeforeIndexChange="onBeforeIndexChange"
            v-model="curIndex"
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

        <cy-swiper :pagination="false" :initPage="curIndex" v-model="curIndex" ref>
            <div class="cy-swiper-slide">
                <div class="scroll-list-wrap">
                    <cy-pulldown-refresh
                        ref="scroll"
                        :data="items"
                        :options="options"
                        @pullingDown="onPullingDown"
                        @pullingUp="onPullingUp"
                    ></cy-pulldown-refresh>
                </div>
            </div>
            <div class="cy-swiper-slide">2</div>
            <div class="cy-swiper-slide">3</div>
        </cy-swiper>

        <div>
            <cy-cell>## tab</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>barHeight: [Number, String] 2</cy-cell>
            <cy-cell>activeColor: String "" 选中文字颜色</cy-cell>
            <cy-cell>barActiveColor: String "" bar选中颜色</cy-cell>
            <cy-cell>defaultColor: String "" 默认文字颜色</cy-cell>
            <cy-cell>disabledColor: String "" 禁止文字颜色</cy-cell>
            <cy-cell>customBarWidth: String "100%" bar宽度 如 30px</cy-cell>
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
export default {
    name: "home",
    data() {
        return {
            curIndex: 2,
            items: [
                "a",
                "b",
                "c",
                "a",
                "b",
                "c",
                "a",
                "b",
                "c",
                "a",
                "b",
                "c",
                "a",
                "b",
                "c",
                "a",
                "b",
                "c"
            ]
        };
    },
    components: {},
    created() {},
    computed: {
        options() {
            return {
                pullDownRefresh: {
                    threshold: 60,
                    stop: 40,
                    txt: "更新成功"
                },
                pullUpLoad: {
                    txt: "更新成功"
                },
                scrollbar: true
            };
        }
    },
    wacth: {
        curr(v, o) {
            console.log("o", v, o);
        }
    },
    methods: {
        onItemClick(i) {
            console.log("i", i);
        },
        onBeforeIndexChange(currentIndex) {
            console.log("onBeforeIndexChange", currentIndex);
        },
        onIndexChange(val, oldVal) {
            console.log("onIndexChange", val, oldVal);
        },

        onPullingDown() {
            console.log("onPullingDown");
            // 模拟更新数据
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    // 如果有新数据
                    this.items.unshift("e");
                } else {
                    // 如果没有新数据
                    this.$refs.scroll.forceUpdate();
                }
            }, 1000);
        },
        onPullingUp() {
            console.log("onPullingUp");
            // 模拟更新数据
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    // 如果有新数据
                    let newPage = ["rt"];
                    this.items = this.items.concat(newPage);
                } else {
                    // 如果没有新数据
                    this.$refs.scroll.forceUpdate();
                }
            }, 1000);
        }
    }
};
</script>
<style lang="scss">
.scroll-list-wrap {
    height: 200px;
}
</style>
