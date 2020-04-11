<template>
    <div>
        <base-header title="field"></base-header>

        <cy-field v-model="form.name" required labelIcon="eye" placeholder="请输入姓名"></cy-field>
        <cy-field
            v-model="form.password"
            required
            type="password"
            :labelIcon="require('@/assets/img/1.jpg')"
            label="手机号"
            placeholder="请输入"
        ></cy-field>
        <cy-field v-model="form.phone" label="手机号" placeholder="请输入">
            <template #default>
                <span class="text-yellow">发送验证码</span>
            </template>
        </cy-field>
        <cy-field v-model="form.money" label="金额" placeholder="只能输入数字 保留2位小数"></cy-field>
        <cy-field label="发送验证发">
            <template #input>
                <span class="text-grey">请选择</span>
            </template>
            <cy-icon type="right" color="#ccc"></cy-icon>
        </cy-field>

        <div class="pd-15">
            <cy-btn @click.native="onSubmit">提交</cy-btn>
        </div>
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
import { regular, submit } from "../utils/submit";

export default {
    name: "home",
    data() {
        return {
            form: {
                value1: "",
                value2: "",
                value3: "",
                money: ""
            },
            rules: {
                // name: {
                //     type: "string",
                //     //required: true,
                //     message: "姓名3-6个字符",
                //     validator: (rule, value) => /^[\S]{3,6}$/.test(value)
                // }
                // password: [
                //     {
                //         type: "string",
                //         required: true,
                //         message: "密码不能为空"
                //     },
                //     {
                //         min: 5, //最小长度
                //         max: 10, //最大长度
                //         lable: "密码",
                //         validator: regular.length
                //     }
                // ],
                // phone: {
                //     type: "string",
                //     required: true,
                //     lable: "手机号",
                //     min: 5, //最小长度
                //     max: 10, //最大长度
                //     validator: regular.length
                // }
            },
            disabled: false
        };
    },
    components: {},
    created() {},
    watch: {
        "form.money"(nVal, oVal) {
            console.log("dd", nVal);
            this.form.money = nVal
                .replace(/^(\d{0,9}(\.\d{0,2})?).*/, "$1")
                .replace(/^\./g, "");
        }
    },
    computed: {},

    methods: {
        onSubmit() {
            this.disabled = true;

            let option = {
                rules: this.rules,
                data: this.form,
                api: this.$api.qu
                //confirmMsg: "确定提交？"
            };
            submit(option)
                .then(res => {
                    console.log("then", res);
                    //this.$toast.success("成功");
                })
                .catch(err => {
                    if (err) {
                        console.log("catch");
                    }
                })
                .finally(() => {
                    console.log("finally");
                    this.disabled = false;
                });
        }
    }
};
</script>
<style lang="scss">
</style>
