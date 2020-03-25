<template>
    <div>
        <base-header title="keyboard"></base-header>
        <cy-btn @click.native="show=true">显示键盘</cy-btn>

        <cy-keyboard-car v-model="carNo" :show.sync="show"></cy-keyboard-car>

        <cy-field label="车牌号" @click.native="show=true">
            <template #input>
                <div :class="{'text-grey':!carNo}">{{carNo || "请输入"}}</div>
            </template>
        </cy-field>

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
    name: "keyboard",
    data() {
        return {
            show: false,
            carNo: ""
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {
        onBlur(val) {
            console.log("carNo", val);
        }
    }
};
</script>
<style lang="scss">
</style>
