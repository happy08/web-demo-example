<template>
    <div>
        <base-header title="dialog"></base-header>

        <cy-btn sm @click.native="show=true">标签形式调用</cy-btn>

        <cy-btn sm @click.native="click2">确认</cy-btn>

        <cy-dialog
            id="dialog1"
            title="标签形式调用"
            v-model="show"
            @onComfirm="onCancel"
            @onCancel="onCancel"
            @onClose="onCancel"
        >
            <a href="javascript:;" @click="show=false">点我可以直接关闭对话框</a>
        </cy-dialog>

        <div>
            <cy-cell>## dialog 确认框</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: Boolean false 显示</cy-cell>
            <cy-cell>id: String "" 标识</cy-cell>
            <cy-cell>title: String "" 标题</cy-cell>
            <cy-cell>content: String "" 内容</cy-cell>
            <cy-cell>noConfirm: Boolean false 无确认按钮</cy-cell>
            <cy-cell>noCancel: Boolean false 无取消按钮</cy-cell>
            <cy-cell>cancelTxt: String "取消" 取消按钮文字</cy-cell>
            <cy-cell>confirmTxt: String "确定" 确认按钮文字</cy-cell>
            <cy-cell>confirmDisabled: Boolean false 确认按钮禁用</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>@onConfirm() 确认回调</cy-cell>
            <cy-cell>@onCancel() 取消回调</cy-cell>
            <cy-cell>@onClose() 关闭回调</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            show: false
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {
        click2() {
            this.$dialog({
                title: "确定删除",
                content: `<h1 @click="change"> 删除后将从你的记录里消失</h1>，无法找回`,
                onConfirm() {
                    console.log("onConfirm");
                },
                onCancel() {
                    console.log("onCancel");
                },
                onClose() {
                    console.log("onClose");
                }
            });
        },
        onCancel() {
            console.log("onCancel");
        }
    }
};
</script>
<style lang="scss">
</style>
