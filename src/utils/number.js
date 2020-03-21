
/** 千分位 ","逗号隔开
* @param num 价格
*/
export const toThousands = (num) => {
    return parseFloat(num).toFixed(2).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,")
}
/*
* 返回银行卡号，每隔四个数字添加一个空格
* @param str:string
*/
export const formatBankCard = (str) => {
    let newStr = str.replace(/\d(?=(?:\d{4})+\b)/g, `$& `)
    return String(newStr)
}

/** 四舍五入 保留N小数位
 * @param num:number
 * @param digit:number 保留小数位
*/
export const round = (num, digit = 2) => {
    if (typeof (num) == 'undefined') { // NaN，undefined，空值
        return '0.00'
    }
    else {
        return parseFloat(num).toFixed(digit)
    }
}

/** 大于1000转‘K’表示
 * @param value:number
 * @param digit:number 保留小数位
*/
export const toK = (value, digit = 1) => {
    const num = Number(value);
    if (num >= 1000) {
        return parseFloat(this.round((num / 1000), digit)) + "K";
    }
    return num;
}

/** 前置补N个0
 * @param num:number
 * @param length:number 总长度
*/
export const preZero = (num, length) => {
    return (Array(length).join('0') + num).slice(-length);
}
