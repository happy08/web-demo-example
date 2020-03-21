
/** 校验中英文姓名
* @param str:string
*/
export const isName = (str) => {
    return /[a-zA-Z\u4E00-\u9FA5]+$/.test(str)
},

/** 校验手机号码
* @param str:string
*/
export const isPhone = (str) => {
    return /^1[2,3,4,5,7,8]\d{9}$/.test(str)
},

/** 校验邮箱
* @param str:string
*/
export const isEmail = (str) => {
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str)
},

/** 校验纯数字
* @param num:string
*/
export const isNumber = (num) => {
    return /^[0-9]*$/.test(num);
},

/** 校验身份证号（15位或18位数字）
* @param str:string
*/
export const isUserId = (str) => {
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(str);
}
