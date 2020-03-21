// 解析url参数
const parseUrl = (url) => {
    if (url.charAt(0) == '#' || url.charAt(0) == '?') {
        url = url.substring(1);
    }
    if(url.indexOf('=') === -1) {
        return {}
    }
    let urls = url.split('&');
    let obj = {};

    urls.map(item => {
        const name = item.split('=')[0]
        let value = item.split('=')[1]

        if(value.indexOf('#') !== -1) {
            value = value.split('#')[0]
        }
        if(value.indexOf('?') !== -1) {
            value = value.split('?')[0]
        }
        
        obj[name] = value
    });
    return obj;
}

export default parseUrl
