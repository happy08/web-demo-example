<template>
    <div>
        <base-header title="switch"></base-header>
        <cy-cell title="开关">
            <template #desc>
                <cy-switch
                    v-model="value"
                    :size="23"
                    @onBeforChange="onBeforChange"
                    @onChange="onChange"
                ></cy-switch>
            </template>
        </cy-cell>

        <cy-cell title="开关">
            <template #desc>
                <cy-switch
                    v-model="value"
                    disabled
                    :size="23"
                    @onBeforChange="onBeforChange"
                    @onChange="onChange"
                ></cy-switch>
            </template>
        </cy-cell>

        <cy-switch v-model="value" @onChange="onChange"></cy-switch>

        <div>
            <cy-cell>## switch</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: Boolean false 开关选中状态</cy-cell>
            <cy-cell>disabled: boolean false 禁用状态</cy-cell>
            <cy-cell>size: String "26px" 大小</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>@onBeforChange(status) 修改前</cy-cell>
            <cy-cell>@onChange(status) 修改后</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "cy-switch2",
    data() {
        return {
            value: false
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {
        onBeforChange(status) {
            this.$dialog({
                title: "确定？",
                content: "测试",
                onConfirm: () => {
                    this.value = status;
                }
            });
        },
        onChange(s) {
            console.log("status", s);
        }
    }
};
</script>
<style lang="scss">
</style>
