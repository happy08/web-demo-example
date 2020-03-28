<template>
    <div>
        <base-header title="round_dot"></base-header>

        <div class="round mg-10 hidden">
            <cy-round-dot size="14" position="right" color="#fff" background="#4649f3"></cy-round-dot>
        </div>
        <br />
        <div class="round mg-10 hidden">
            <cy-round-dot size="10" color="#fff" background="#4649f3"></cy-round-dot>
        </div>

        <div>
            <cy-cell>## round_dot</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>size: String, Number 大小</cy-cell>
            <cy-cell>color: String 圆点颜色 一般为#fff</cy-cell>
            <cy-cell>background: String 背景色</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            text: ""
        };
    },
    components: {},
    created() { },
    computed: {},

    methods: {}
};
</script>
<style lang="scss">
.round {
    position: relative;
    height: 100px;
    background: #4649f3;
}
</style>
