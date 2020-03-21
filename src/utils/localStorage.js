const storage = {

    /** 设置 
    * @param key 键
    * @param value 值
    */
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },

    /** 读取
    * @param key 键
    */
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },

    /** 删除
    */
    remove() {
        localStorage.removeItem(key)
    }

}

export default storage;
