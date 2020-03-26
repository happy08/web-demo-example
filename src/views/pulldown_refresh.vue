<template>
    <div>
        <base-header title="badge"></base-header>

        <div style="height:300px">
            <cy-pulldown-refresh @pullingUp="onPullingUp">
                <cy-cell v-for="(item,index) in list" :key="index" title="测试" subTitle="标题"></cy-cell>
            </cy-pulldown-refresh>
        </div>

        <div>
            <cy-cell>## badge</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>text: [String, Number] “” 文字</cy-cell>
            <cy-cell>color: String “” 颜色</cy-cell>
            <cy-cell>plain: Boolean “” 边框模式</cy-cell>
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
    computed: {},

    methods: {
        onPullingUp() {
            console.log("onPullingUp");
            this.timer = setTimeout(() => {
                if (this.page <= 3) {
                    this.list = new Array(this.num * this.page);
                    this.page = this.page + 1;
                } else {
                    this.isHasMore = false;
                }
                this.isLoading = false;
            }, 100);
        }
    }
};
</script>
<style lang="scss">
</style>
