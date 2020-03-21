/* 日期格式化 YYYY-MM-DD hh:mm:ss
 * date: 2017.08.08
 * @date {Date, String, Number} 需要转换的日期，可以是Date类型，也可以是毫秒数，也可以是格式化好的日期
 * @completion {Boolean} 是否要补全0，默认是
 */
const formatDate = (date, type = 'YYYY-MM-DD hh:mm:ss', completion = true) => {

    if(!date) return null

    if(typeof date === 'string' && date.includes(' ')) {
        // 兼容苹果设备
        date = date.replace(' ', 'T') + '+08:00'
    }

    let d = new Date(date);
    let dates = null;

    dates = {
        'Y+': d.getFullYear(),
        'M+': d.getMonth() + 1,
        'D+': d.getDate(),
        'h+': d.getHours(),
        'm+': d.getMinutes(),
        's+': d.getSeconds()
    };

    for (const attr in dates) {
        const val = (dates[attr] < 10 && completion) ? ('0' + dates[attr]) : dates[attr];
        const reg = new RegExp(attr, 'g');
        type = type.replace(reg, val);
    }

    return type;
};

export default formatDate

export const semantics = time => {
    const oneDay = 24 * 60 * 60 * 1000
    const oneHours = 60 * 60 * 1000
    const oneMinutes = 60 * 1000

    const days = Math.floor(time / oneDay)
    const hours = Math.floor(time % oneDay / oneHours)
    const minutes = Math.floor(time % oneHours / oneMinutes)
    const seconds = Math.floor(time % oneMinutes / 1000)

    let date = ''
    if(days > 0) {
        date += `<em>${days}</em>天`
    }
    if(hours > 0) {
        date += `<em>${hours}</em>时`
    }
    if(minutes > 0) {
        date += `<em>${minutes}</em>分`
    }
    if(seconds > 0) {
        date += `<em>${seconds}</em>秒`
    }

    return date || `0秒`
}

// 格式化日期为中文
export const translateData = (date) => {
    if(!date) return ''
    let _date = ''

    if(typeof date === 'string' && date.includes(' ')) {
        // 兼容苹果设备
        _date = date.replace(' ', 'T') + '+08:00'
    }

    const oneDay = 24 * 60 * 60 * 1000
    const oneHours = 60 * 60 * 1000
    const oneMinutes = 60 * 1000

    const nowTimes = new Date().getTime()
    const times = new Date(_date).getTime()
    const differenceTimes = nowTimes - times

    if(differenceTimes < oneMinutes * 1) {
        return `刚刚`
    }else if(differenceTimes < oneHours) {
        // 不足一小时
        return `${Math.ceil(differenceTimes % oneHours / oneMinutes)}分钟前`
    }else if(differenceTimes < oneDay) {
        return `${Math.ceil(differenceTimes % oneDay / oneHours)}小时前`
    }else if(differenceTimes < oneDay * 2){
        return `昨天`
    }else {
        return date
    }

}

