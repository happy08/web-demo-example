<template>
    <div>
        <base-header title="下拉刷新"></base-header>

        <div style="height:calc(100vh - 44px)">
            <cy-pulldown-refresh
                ref="scroll"
                :data="list"
                :options="options"
                @pullingDown="onPullingDown"
                @pullingUp="onPullingUp"
            >
                <cy-cell
                    v-for="(item,index) in list"
                    link="/cell"
                    :key="index"
                    title="测试"
                    :subTitle="'a'+Math.random()*10"
                ></cy-cell>
            </cy-pulldown-refresh>
        </div>

        <div>
            <cy-cell>## badge</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            page: 1,
            num: 20,
            list: [
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" },
                { id: 1, lable: "标题" }
            ]
        };
    },
    components: {},
    created() {},
    computed: {
        options() {
            return {
                pullDownRefresh: {
                    threshold: 60
                },
                pullUpLoad: true
            };
        }
    },

    methods: {
        onPullingDown() {
            // 下拉刷新
            setTimeout(() => {
                if (true) {
                    // 如果有新数据
                    this.list = new Array(3);
                    console.log("this.list", this.list);
                } else {
                    console.log("this.list2", this.list);
                    // 如果没有新数据
                    this.$refs.scroll.forceUpdate();
                }
            }, 1000);
        },
        onPullingUp() {
            // 上拉加载更多
            setTimeout(() => {
                if (this.page <= 3) {
                    console.log("1");
                    // 如果有新数据
                    this.list.push(new Array(this.num));
                    console.log("this.list", this.list);
                    this.page = this.page + 1;
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
</style>
