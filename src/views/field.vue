<template>
    <div>
        <base-header title="field"></base-header>

        <cy-field v-model="value1" required labelIcon="eye" placeholder="请输入项目">
            <cy-btn sm>发送验证码</cy-btn>
        </cy-field>
        <cy-field
            v-model="value1"
            required
            type="password"
            :labelIcon="require('@/assets/img/1.jpg')"
            label="手机号"
            placeholder="请输入"
        >
            <template #default>
                <span class="text-yellow">发送验证码</span>
            </template>
        </cy-field>
        <cy-field v-model="value1" label="手机号" placeholder="请输入">
            <template #default>
                <span class="text-yellow">发送验证码</span>
            </template>
        </cy-field>
        <cy-field label="发送验证发" @click.native="selelct">
            <template #input>
                <span class="text-grey">请选择</span>
            </template>
            <cy-icon type="right" color="#ccc"></cy-icon>
        </cy-field>

        <div class="mgt-10">
            <cy-cell>## field 表单</cy-cell>
            <cy-cell>v-modle: String "" 值</cy-cell>
            <cy-cell>type: String "text" 类型</cy-cell>
            <cy-cell>required: Boolean false 必填左侧红星号</cy-cell>
            <cy-cell>label: String "" 标题</cy-cell>
            <cy-cell>labelIcon: String "" 标题icon</cy-cell>
            <cy-cell>labelWidth: String "" 标题宽度</cy-cell>
            <cy-cell>disabled: Boolean false input只读</cy-cell>
            <cy-cell>clearIcon: Boolean true 清空按钮</cy-cell>
            <cy-cell>eyeIcon: Boolean true type=password 时可见切换</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            value1: ""
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {
        selelct() {
            alert("selelct");
        }
    }
};
</script>
<style lang="scss">
</style>
