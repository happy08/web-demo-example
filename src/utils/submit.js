/**
 * @description 提交表单 + 验证
 * @param option
*/
import { regular, validator } from "./validator";
import Toast from "@/components/toast";

const submit = (option) => {
    const data = option.data || {},
        api = option.api
    return new Promise((resolve, reject) => {
        validator(option)
            .then(() => {
                Toast.loading("加载中…")
                api(data)
                    .then((res) => {
                        console.log('!!res', !!res);
                        !!res && resolve(res)
                    })
                    .catch((err) => { //接口报错
                        reject(err)
                    })
            })
            .catch(() => { //有提示信息时的 取消 on cancel
                reject()
            })
    })
}

export {
    regular,
    submit
}

