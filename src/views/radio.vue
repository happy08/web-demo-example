<template>
    <div>
        <base-header title="Radio"></base-header>

        <cy-cell title="备选项1" @click.native="selectRadio('备选1')">
            <div slot="desc">
                <cy-radio v-model="value" label="备选1"></cy-radio>
            </div>
        </cy-cell>
        <cy-cell title="备选项2" @click.native="selectRadio('备选2')">
            <div slot="desc">
                <cy-radio v-model="value" label="备选2"></cy-radio>
            </div>
        </cy-cell>

        <cy-radiogroup v-model="radioValue">
            <cy-radio label="a">备选项1</cy-radio>
            <cy-radio label="b" disabled>备选项2</cy-radio>
        </cy-radiogroup>

        <div>
            <cy-cell>## Radio 可单独或配合RadioGroup使用</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: 任意 当前选中项的标识符，与label值一致时呈选中状态</cy-cell>
            <cy-cell>label: 任意 标识符，与v-model值一致时呈选中状态</cy-cell>
            <cy-cell>disabled: Boolean false 禁用</cy-cell>

            <cy-cell>## RadioGroup</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>v-model: 任意 选中项的标识符，与label值一致时呈选中状态</cy-cell>
            <cy-cell>disabled: Boolean false 禁用</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            value: "备选2",
            radioValue: "b"
        };
    },
    components: {},
    created() {},
    computed: {},
    watch: {},
    methods: {
        selectRadio(value) {
            this.value = value;
        }
    }
};
</script>
<style lang="scss">
</style>
