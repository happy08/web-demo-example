/** 常用
*/

var utils = {

    /** 跳转
    * @param url:string 链接
    * @param $router:obj
    */
    go(url, $router) {
        if (/^javas/.test(url) || !url) return
        const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url))
        if (useRouter) {
            if (typeof url === 'object' && url.replace === true) {
                $router.replace(url)
            } else {
                url === 'BACK' ? $router.go(-1) : $router.push(url)
            }
        } else {
            window.location.href = url
        }
    },

    /** 获取路径
    * @param url:string
    */
    getUrl(url, $router) {
        // Make sure the href is right in hash mode
        if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
            return '#!' + url
        }
        return url && typeof url !== 'object' ? url : 'javascript:void(0);'
    },

    /** 去空格
    * @param str:string
    */
    trim(str) {
        str = str.replace(/^\s\s*/, '');
        let ws = /\s/,
            i = str.length;
        while (ws.test(str.charAt(--i)));
        return str.slice(0, i + 1);
    }

}
export default utils