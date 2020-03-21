<!--获取验证码60秒倒计时-->
<template>
    <div></div>
    <!-- <van-button slot="button" size="small" :disabled="authTime > 0" @click="getSmsCode" type="primary">
      {{ authTime ? authTime + 's' : '发送'}}
    </van-button slot="button">-->
</template>
<script>
//import { Button } from 'vant';

export default {
    name: "count_down",
    props: {
        imgCode: {
            type: String,
            required: false,
            default: ""
        },
        phone: {
            type: String,
            required: true, //必填
            default: ""
        },
        code: {
            type: [String, null],
            required: false,
            default: null
        }
    },
    components: {},
    data() {
        return {
            authTime: 0, // 倒计时
            timer: null
        };
    },

    methods: {
        //获取验证码
        getSmsCode() {
            if (!!this.imgCode) {
                console.log("图形验证码错误");
                return;
            }
            if (this.phone == "" || this.phone == undefined) {
                console.log("请填写手机号");
                return;
            } else if (!this.$utils.isPhone(this.phone)) {
                console.log("手机号输入有误", this.phone);
                return;
            }
            this.isShow = false; // 显示隐藏
            this.authTime = 60;
            this.timer = setInterval(() => {
                this.authTime--;
                if (this.authTime <= 0) {
                    this.isShow = true;
                    window.clearInterval(this.timer);
                }
            }, 1000);
        }
    },
    destroyed() {
        window.clearInterval(this.timer);
    }
};
</script>