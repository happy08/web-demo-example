<template>
    <div>
        <base-header title="cell"></base-header>

        <cy-swiper :autoPlay="3000" :pagination="true" :swiperData="dataImgItem">
            <div v-for="(item,index) in dataImgItem" :key="index" class="cy-swiper-slide">
                <cy-image :src="item.src"></cy-image>
            </div>
        </cy-swiper>

        <!-- @touchmove.prevent 阻止默认滚动-->
        <div @touchmove.prevent>
            <cy-swiper
                style="height:165px"
                :autoPlay="3000"
                :pagination="false"
                direction="vertical"
                :swiperData="dataImgItem"
            >
                <div v-for="(item,index) in dataImgItem" :key="index" class="cy-swiper-slide">
                    <cy-row wrap="wrap">
                        <cy-col :span="colSpan" class="tc mgt-10">
                            <cy-image :src="item.src" style="width:1rem;height:1rem" round></cy-image>
                            <div class="pdlr-5 text-hidden-1">名称名称名称</div>
                        </cy-col>
                        <cy-col :span="colSpan" class="tc mgt-10">
                            <cy-image :src="item.src" style="width:1rem;height:1rem" round></cy-image>
                            <div class="pdlr-5 text-hidden-1">名称</div>
                        </cy-col>
                        <cy-col :span="colSpan" class="tc mgt-10">
                            <cy-image :src="item.src" style="width:1rem;height:1rem" round></cy-image>
                            <div>d</div>
                        </cy-col>
                        <cy-col :span="colSpan" class="tc mgt-10">
                            <cy-image :src="item.src" style="width:1rem;height:1rem" round></cy-image>
                            <div>d</div>
                        </cy-col>
                        <cy-col :span="colSpan" class="tc mgt-10">
                            <cy-image :src="item.src" style="width:1rem;height:1rem" round></cy-image>
                            <div>d</div>
                        </cy-col>
                        <cy-col :span="colSpan" class="tc mgt-10">
                            <cy-image :src="item.src" style="width:1rem;height:1rem" round></cy-image>
                            <div>d</div>
                        </cy-col>
                        <cy-col :span="colSpan" class="tc mgt-10">
                            <cy-image :src="item.src" style="width:1rem;height:1rem" round></cy-image>
                            <div>d</div>
                        </cy-col>
                    </cy-row>
                </div>
            </cy-swiper>
        </div>

        <div>
            <cy-cell>## swiper 轮播</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>direction: String horizontal 滑动方向 horizontal,vertical</cy-cell>
            <cy-cell>pagination: Boolean false 是否分页显示</cy-cell>
            <cy-cell>paginationClickable: Boolean false 分页是否可以点击</cy-cell>
            <cy-cell>loop: Boolean false 是否循环</cy-cell>
            <cy-cell>speed: Number 500 过度动画执行时间</cy-cell>
            <cy-cell>autoPlay: Number 0 自动轮播，轮播默认是循环模式，直接写轮播间隔时间</cy-cell>
            <cy-cell>initPage: Number 1 设置初始时候显示的页</cy-cell>
            <cy-cell>lazyLoad: Boolean false 是否懒加载图片</cy-cell>
            <cy-cell>lazyLoadUrl: String 懒加载的默认展示图片</cy-cell>
            <cy-cell>swiperData: Array 异步数据渲染slide时，必须绑定对应数组</cy-cell>

            <cy-cell>方法名 说明</cy-cell>
            <cy-cell>next 去下一页</cy-cell>
            <cy-cell>prev 去上一页</cy-cell>
            <cy-cell>setPage 设置当前显示第几页 number</cy-cell>

            <cy-cell>回调 字段 说明 参数</cy-cell>
            <cy-cell>slideChangeStart 页面开始切换时候 pageSize,el</cy-cell>
            <cy-cell>slideChangeEnd 页面结束切换时候 pageSize,el</cy-cell>
            <cy-cell>slideRevertStart 拖动页面没改变回到原先位置开始时候 pageSize,el</cy-cell>
            <cy-cell>slideRevertEnd 拖动页面没有改变回到原先位置结束时候 pageSize,el</cy-cell>
            <cy-cell>slideMove 拖动过程中 offset,el</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            colSpan: 4,
            dataImgItem: [
                {
                    src: require("@/assets/img/1.jpg")
                },
                {
                    src: require("@/assets/img/2.jpg")
                },
                {
                    src: require("@/assets/img/3.jpg")
                }
            ]
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {}
};
</script>
<style lang="scss" scoped>
</style>
