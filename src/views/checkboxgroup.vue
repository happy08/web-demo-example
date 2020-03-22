<template>
    <div>
        <base-header title="checkbox"></base-header>

        <cy-checkboxgroup
            vertical
            ref="checkboxGroup"
            @onChange="onChange"
            :checkBoxData="data"
            v-model="group"
            size="25"
            round
            :background="['#fa3','#f12']"
        ></cy-checkboxgroup>

        <cy-checkboxgroup
            vertical
            ref="checkboxGroup"
            @onChange="onChange"
            :checkBoxData="data"
            v-model="group"
            size="30"
            background="#f12"
        ></cy-checkboxgroup>
        <div>
            <cy-cell>## checkboxgroup</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: Array [] 选中项</cy-cell>
            <cy-cell>checkBoxData: Array [] 传入选项数组 如[{id: 11,value: '选项A',label: '选项A'}]</cy-cell>
            <cy-cell>vertical: Boolean false 横向排列</cy-cell>
            <cy-cell>size: String,Number 大小</cy-cell>
            <cy-cell>background: String,Array 背景 例#ff3 或 ['#a3f','#f07']</cy-cell>
            <cy-cell>disabled: Boolean false 禁用</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>@onChange(values,label,event) 值变化时触发 已选中项（values），选中项值（label），event</cy-cell>

            <cy-cell>内置方法名 参数 说明</cy-cell>
            <cy-cell>toggleAll(state) 切换选中状态 使用this.$refs.checkboxGroup.toggleAll(state) state可选true false 或者空</cy-cell>
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
                { id: 13, value: "选项Cvalue", label: "选项C", disabled: true },
                { id: 14, value: "选项Dvalue", label: "选项D" }
            ],
            group: ["选项A", "选项Cvalue", "选项Dvalue"]
        };
    },
    components: {},
    created() {},
    computed: {},
    methods: {
        onChange(values, label, e) {
            console.log("group", values, label, e);
        }
    }
};
</script>
<style lang="scss">
</style>
