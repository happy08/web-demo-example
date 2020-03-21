<template>
    <div>
        <base-header title="toast"></base-header>

        <div>
            <cy-cell>## toast 轻提示</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>msg: String "" 消息</cy-cell>
            <cy-cell>id: String 标识符，相同者共用一个实例</cy-cell>
            <cy-cell>duration: Number 2000 显示时长（毫秒）,为0时不关闭（loading类型默认为0)</cy-cell>
            <cy-cell>bgColor: String "rgba(46, 46, 46, 0.7)" 背景颜色（透明度）</cy-cell>
            <cy-cell>icon: String "" 图标，or 图片路径</cy-cell>
            <cy-cell>cover: Boolean loading类型true/其他false 透明遮罩，loading类型默认打开</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>onClose() 关闭时触发的事件</cy-cell>
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
    created() {
        //'loading', 'success', 'fail', 'clear'

        this.$toast("提示");

        setTimeout(() => {
            this.$toast.loading("提示");
        }, 2000);

        setTimeout(() => {
            this.$toast.success("成功");
        }, 3000);

        setTimeout(() => {
            this.$toast("自定义图片", {
                icon: require("@/assets/img/1.jpg")
            });
        }, 4000);

        setTimeout(() => {
            this.$toast.fail("失败", {
                duration: 5000,
                onClose() {
                    console.log("onClose");
                }
            });
        }, 5000);

        setTimeout(() => {
            //清除
            this.$toast.clear();
        }, 6000);
    },
    computed: {},

    methods: {}
};
</script>
<style lang="scss">
</style>
