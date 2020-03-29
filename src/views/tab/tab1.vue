<template>
    <div class="pdt-10" style="height:calc(100vh - 88px)">
        <cy-pulldown-refresh
            ref="scroll"
            :data="dataList"
            :options="options"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
        >
            <div v-for="(item, index) in dataList" :key="index" class="nav-item">
                <div>
                    <cy-image style="width:100%;height:100px" :src="require('@/assets/img/1.jpg')"></cy-image>
                    <br />
                </div>
            </div>
            <div class="pd-15 flex center" v-show="!dataList">
                <cy-loading text="加载中……"></cy-loading>
            </div>
        </cy-pulldown-refresh>
    </div>
</template>

<script>
export default {
    name: "tab1",
    data() {
        return {
            // options: {
            //     pullDownRefresh: {
            //         threshold: 60,
            //         stop: 40,
            //         txt: '更新成功22'
            //     }
            // },

            noData: true,
            dataList: null //"a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c"
        };
    },
    components: {},
    created() {
        setTimeout(() => {
            this.dataList = []
            //this.$refs.scroll.forceUpdate();
            // this.options.pullUpLoad = false
            console.log('tab1');
        }, 2000)

    },
    computed: {
        options() {
            return {
                pullDownRefresh: {
                    threshold: 60,
                    stop: 40,
                    txt: "更新成功"
                },
                pullUpLoad: true,

            };
        }
    },
    methods: {
        onPullingDown() {
            console.log("onPullingDown");
            // 模拟更新数据
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    // 如果有新数据
                    // this.dataList.unshift("e");
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
                if (Math.random() > 10.5) {
                    // 如果有新数据
                    let newPage = ["rt"];
                    this.dataList = this.dataList.concat(newPage);
                } else {
                    console.log("onPullingUp2");

                    this.$refs.scroll.forceUpdate();

                    // 如果没有新数据
                }
            }, 1000);
        }
    }
};
</script>
<style lang="scss">
</style>
