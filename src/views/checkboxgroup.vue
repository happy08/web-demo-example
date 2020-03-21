<template>
    <div>
        <base-header title="checkbox"></base-header>

        <cy-checkboxgroup
            vertical
            ref="checkboxGroup"
            @onChange="changeEvt"
            :checkBoxData="data"
            v-model="group"
            class="qwqw"
        ></cy-checkboxgroup>

        <div>
            <cy-cell>## checkboxgroup</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: Array [] 选中项</cy-cell>
            <cy-cell>checkBoxData: Array [] 传入选项数组 如[{id: 11,value: '选项A',label: '选项A'}]</cy-cell>
            <cy-cell>vertical: Boolean false 横向排列</cy-cell>
            <cy-cell>disabled: Boolean false 禁用</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            data: [
                { id: 11, value: "选项A", label: "选项B", falseValue: "falsv" },
                {
                    id: 12,
                    value: "选项Bvalue",
                    label: "选项B",
                    falseValue: "falsv"
                },
                { id: 13, value: "选项Cvalue", label: "选项C" },
                { id: 14, value: "选项Dvalue", label: "选项D" }
            ],
            group: ["选项A"]
        };
    },
    components: {},
    created() {},
    computed: {},
    methods: {
        changeEvt(values, label, e) {
            console.log("group", values, label, e);

            //this.showBasic= true
            //this.$toast("hello wor4ld~", { duration: 4000 });
            //this.$toast("加载中加载中加载中加载中加载中");
        }
    }
};
</script>
<style lang="scss">
</style>
