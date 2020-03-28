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
            <div class="pd-15 flex center">
                <cy-loading text="加载中……" v-show="dataList && dataList.length<=0"></cy-loading>
            </div>
        </cy-pulldown-refresh>
    </div>
</template>

<script>
export default {
    name: "tab1",
    data() {
        return {
            dataList: []
        };
    },
    components: {},
    created() {
        setTimeout(() => {
            this.dataList = ["a", "b", "c", "a", "b", "c", "a", "b", "c", "a", "b", "c"]
        }, 2000)
        console.log('tab1');
    },
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
                    this.dataList.unshift("e");
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
                    this.dataList = this.dataList.concat(newPage);
                } else {
                    console.log("onPullingUp2");

                    this.$refs.scroll.forceUpdate(true);

                    // 如果没有新数据
                }
            }, 1000);
        }
    }
};
</script>
<style lang="scss">
</style>
