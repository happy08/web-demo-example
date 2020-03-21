<template>
    <div>
        <base-header title="cell"></base-header>

        <div>
            ## cell
            <br />字段 类型 默认值 说明
            <br />title:String "" slot左侧主
            <br />titleIcon:String "" 左侧主icon
            <br />subTitle:String "" slot左侧副
            <br />desc:String "" slot右侧
            <br />link:String "" 链接 不为空时右侧显示箭头
        </div>

        <cy-cell
            link="/home"
            :titleIcon="require('@/assets/img/1.jpg')"
            title="cell"
            subTitle="单元格"
            desc="描述"
        >
            <cy-badge slot="desc" text="2"></cy-badge>
        </cy-cell>

        <textarea>
            <cy-cell
                link="/home"
                :titleIcon="require('@/assets/img/1.jpg')"
                title="cell"
                subTitle="单元格"
                desc="描述"
            >
                <cy-badge slot="desc" text="2"></cy-badge>
            </cy-cell>
        </textarea>

        <cy-cell link="/cell" title="cell" titleIcon="eye"></cy-cell>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {};
    },
    components: {},
    created() {},
    computed: {},

    methods: {}
};
</script>
<style lang="scss">
</style>
