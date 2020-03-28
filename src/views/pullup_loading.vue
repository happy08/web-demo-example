<template>
    <div>
        <base-header title="上拉加载更多"></base-header>
        <cy-pullup-loading
            @loadmore="onLoadmore"
            :isShowMod="true"
            :hasMore="isHasMore"
            :isLoading="isLoading"
        >
            <cy-cell v-for="(item,index) in list" :key="index" title="测试" subTitle="标题"></cy-cell>
        </cy-pullup-loading>

        <cy-totop></cy-totop>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            page: 1,
            num: 20,
            isHasMore: true,
            isLoading: false,
            timer: null,
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
        onLoadmore() {
            this.isLoading = true;
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
    },
    destroyed() {
        clearTimeout(this.timer);
        this.timer = null;
    }
};
</script>
<style lang="scss">
</style>
