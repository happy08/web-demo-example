<template>
    <div>
        <base-header title="popup-picker"></base-header>

        <cy-btn @click.native="show=true">联动</cy-btn>
        <cy-btn @click.native="show2=true">非联动自定义头部</cy-btn>
        {{value1}} {{name1}}
        <!-- 联动必须:columns -->
        <cy-popup-picker
            ref="popupPicker"
            v-model="value1"
            :columns="2"
            :show.sync="show"
            cancelText="取消"
            confirmText="确认"
            title="标题"
            @onChange="onChange"
            :data="list3"
        ></cy-popup-picker>
        {{value2}} {{name2}}
        <!-- 非联动 自定义头 -->
        <cy-popup-picker
            ref="popupPicker"
            v-model="value2"
            :show.sync="show2"
            @onChange="onChange2"
            :data="list2"
        >
            <div slot="header">
                <cy-btn sm @click.native="onCancel">取消</cy-btn>
                <cy-btn sm @click.native="onConfirm">确认</cy-btn>
            </div>
        </cy-popup-picker>

        <div>
            <cy-cell>## popup-picker</cy-cell>
            <cy-cell>show: Boolean false 是否显示 使用:show.sync="show"</cy-cell>
            <cy-cell>cancelText: String "取消" 取消文字</cy-cell>
            <cy-cell>confirmText: String "确认" 确认文字</cy-cell>
            <cy-cell>data:Array [] 初始数据</cy-cell>
            <cy-cell>value:Array [] 选中到选项</cy-cell>
            <cy-cell>columns:Number 0 指定联动模式下的列数，当不指定时表示非联动</cy-cell>
            <cy-cell>displayColumns: Number 0 指定显示多少列，隐藏多余的</cy-cell>
            <cy-cell>columnWidth: Array 每一列宽度，只需除最后一列宽度，最后一列自动宽度， 如对于3列选择：[1/2, 1/5]</cy-cell>
            <cy-cell>popupTitle: String "" 中间标题</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>@onChange(value,name) 选择值变化时触发 value选中值 name选中名称</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
            show: false,
            value1: ["USA", "jjs"],
            name1: "",

            show2: false,
            value2: ["2"],
            name2: "",

            // data数据格式示例：
            // --非联动
            list1: [
                ["小米", "iPhone", "iPhone", "iPhone"],
                ["小米1", "iPhone2", "iPhone2", "iPhone2"]
            ],
            list2: [
                [
                    { name: "小米", value: "1" },
                    { name: "小米1", value: "2" },
                    { name: "小米2", value: "3" }
                ]
            ],
            //--联动
            list3: [
                {
                    name: "中国",
                    value: "china",
                    parent: "0" // 为一级时可以不写 parent，但是此时允许为数字 0、空字符串或者字符串 '0'
                },
                {
                    name: "美国",
                    value: "USA",
                    parent: "0"
                },
                {
                    name: "广东",
                    value: "china001",
                    parent: "china"
                },
                {
                    name: "广西",
                    value: "china002",
                    parent: "china"
                },
                {
                    name: "旧金山",
                    value: "jjs",
                    parent: "USA"
                }
            ]
        };
    },
    components: {},
    created() {},
    computed: {},

    methods: {
        onChange(value, name) {
            this.name1 = name;
            console.log(value, name);
        },

        onChange2(value, name) {
            this.name2 = name;
            console.log(value, name);
        },

        onCancel() {
            this.$refs.popupPicker.onHide(false);
        },
        onConfirm() {
            this.$refs.popupPicker.onHide(true);
        }
    }
};
</script>
<style lang="scss">
</style>
