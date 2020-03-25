<template>
    <div>
        <base-header title="stepper"></base-header>
        {{num}}
        <cy-cell title="数量">
            <template #desc>
                <cy-stepper v-model="num" :step="1" :decimal="0" :min="5" :max="8"></cy-stepper>
            </template>
        </cy-cell>
        <div>
            <cy-cell>## stepper</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: Number 数量</cy-cell>
            <cy-cell>step: Number 1 步数</cy-cell>
            <cy-cell>min: Number 最小</cy-cell>
            <cy-cell>max: Number 最大</cy-cell>
            <cy-cell>readonly: Boolean false 只读</cy-cell>
            <cy-cell>decimal: Number 小数位</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "stepper",
    data() {
        return {
            num: 6
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {}
};
</script>
<style lang="scss">
</style>
