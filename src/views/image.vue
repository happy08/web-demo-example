<template>
    <div>
        <base-header title="image"></base-header>

        <div>
            ## image
            <br />字段 类型 默认值 说明
            <br />src: String "" 图片路径
            <br />round: Boolean false 圆形
            <br />fit: String "cover" 填充模式
            <br />fit可选值 contain 保留最长边 cover 填满 fill 拉伸 none 原尺寸 scale-down 不放大或保留最长边
        </div>

        <div style="width:100px;height:100px">
            <cy-image round fit="cover" :src="require('@/assets/img/1.jpg')" />
        </div>

        <textarea>
            <cy-image round fit="cover" :src="require('@/assets/img/1.jpg')" />
        </textarea>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {};
    },
    components: {},
    created() {},
    computed: {},

    methods: {}
};
</script>
<style lang="scss">
</style>
