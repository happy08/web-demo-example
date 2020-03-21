/** 防抖 delay毫秒后执行
 * @param func:Object
 * @param delay:Number 时间
 */
const debounce = (func, delay = 500) => {
    let timer = null
    return function () {
        let context = this, args = arguments;
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            timer = null
            func.apply(context, args);
        }, delay);
    };
}

export default debounce;