/**
 * @description 回到顶部
 * @param delay =0 无动画
*/
const toTop = (delay = 10) => {
    delay = delay <= 0 ? 1 : delay
    let timer = setInterval(() => {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let ispeed = Math.floor(-scrollTop / delay);
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
        if (scrollTop === 0) {
            clearInterval(timer);
        }
    }, 10);
}

export default toTop