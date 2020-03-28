<template>
    <div>
        <base-header title="keyboard_car"></base-header>
        <cy-btn @click.native="show=true">显示键盘</cy-btn>

        <cy-keyboard-car v-model="carNo" :show.sync="show"></cy-keyboard-car>

        <cy-field label="车牌号" v-model="carNo" :clearIcon="false" @click.native="show=true">
            <template #input>
                {{carNo}}
                <span v-show="show" class="cursor-blink iblock"></span>
                <span v-show="!carNo" class="text-grey iblock">请输入</span>
            </template>
        </cy-field>

        <cy-field label="车牌号" v-model="carNo" placeholder="车牌号"></cy-field>

        <div>
            <cy-cell>## badge</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>
            <cy-cell>text: [String, Number] “” 文字</cy-cell>
            <cy-cell>color: String “” 颜色</cy-cell>
            <cy-cell>plain: Boolean “” 边框模式</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "keyboard",
    data() {
        return {
            show: false,
            carNo: ""
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {
        onBlur(val) {
            console.log("carNo", val);
        }
    }
};
</script>
<style lang="scss">
.cursor-blink {
    width: 1px;
    height: 20px;
    background-color: #333;
    animation: cursor-blink 1s infinite steps(1, start);
}
@keyframes cursor-blink {
    0%,
    100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
