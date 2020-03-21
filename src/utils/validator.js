/**
 * @description 表单验证
*/
import schema from "async-validator";
import Toast from "@/components/toast";
import { Dialog } from "@/components/dialog";

export const regular = {
    // 银行卡号码
    bankCard: /^[1-9]\d{9,19}$/,
    bankCardMsg: '请输入正确的银行卡号码',

    // 网址, 仅支持http和https开头的
    url: /^(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/,
    urlMsg: '请输入以http和https开头的网址',

    // 0到20位的英文字符和数字
    enNum0to20: /^[a-z0-9A-Z]{0,20}$/,
    enNum0to20Msg: '请输入20位以内的英文字符和数字',

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
        let validator = new schema(rules);
        validator.validate(data, (errors, fields) => {
            if (errors) {
                Toast(errors[0].message)
            } else {
                if (confirmMsg) { //有确认消息
                    setTimeout(() => { Toast.clear() }, 0)
                    Dialog({
                        title: '提示',
                        content: confirmMsg,
                        confirm() {
                            Toast.loading("拼命加载中…")
                            resolve()
                        },
                        cancel() {
                            reject()
                        }
                    })
                } else {
                    resolve()
                }
            }
        });

    })
}

