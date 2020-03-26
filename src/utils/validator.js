/**
 * @description 表单验证
*/
import schema from "async-validator";
import Toast from "@/components/toast";
import { dialog } from "@/components/dialog";

export const regular = {
    // 银行卡号码
    bankCard: /^[1-9]\d{9,19}$/,
    bankCardMsg: '请输入正确的银行卡号码',

    // 6到12位的英文字符和数字
    length6to12: /^[0-9a-zA-Z_]{6,12}$/,
    length6to12Msg: '6-12位的英文字符和数字',

    //自定义长度
    length: (rule, value, callback) => {
        const reg = new RegExp("^[0-9a-zA-Z]{" + rule.min + "," + rule.max + "}$", "gim");
        if (!value || !reg.test(value)) {
            return callback(new Error(`${rule.lable}长度${rule.min}-${rule.max}`));
        } else {
            callback();
        }
    },

    //自定义规则
    regularOrder: (rule, value, callback) => {
        if (parseInt(value) > 255) {
            return callback(new Error(`${rule.lable}数值不大于255`));
        } else {
            callback();
        }
    }
}


export const validator = (option) => {
    return new Promise((resolve, reject) => {
        let data = option.data || {},
            rules = option.rules || {},
            confirmMsg = option.confirmMsg

        const validator = new schema(rules);
        validator.validate(data, (errors, fields) => {
            if (errors) {
                Toast(errors[0].message)
            } else {
                if (confirmMsg) { //有确认消息
                    setTimeout(() => { Toast.clear() }, 0)
                    dialog({
                        title: '提示',
                        content: confirmMsg,
                        confirm() {
                            Toast.loading("加载中…")
                            resolve()
                        },
                        cancel() {
                            reject()
                        }
                    })
                } else {
                    console.log('resolve');
                    resolve()
                }
            }
        });

    })
}

