<template>
    <div>
        <base-header title="cell"></base-header>

        <cy-btn @click.native="show=true">遮罩层</cy-btn>
        <div>
            <cy-cell>## overlay 遮罩层</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>show: Boolean false 显示</cy-cell>
        </div>

        <cy-overlay :show="show"></cy-overlay>
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

    methods: {}
};
</script>
<style lang="scss">
</style>
