/** 节流 delay毫秒内执行
 * @param func:Object
 * @param delay:Number 时间
 */
const throttle = (func, delay = 500) => {
  let last
  let timer
  return function () {
    let context = this, args = arguments;
    let now = new Date()
    if (last && now - last < delay) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        func.apply(context, args)
      }, delay)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}

export default throttle;