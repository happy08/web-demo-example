<template>
    <div>
        <base-header title="cell"></base-header>

        <cy-cell title="日期" link="javascript:">
            <template #desc>
                <cy-popup-datetime
                    v-model="value"
                    format="YYYY-MM-DD HH:mm"
                    :minute-list="['00', '15', '30', '45']"
                    @onChange="change"
                ></cy-popup-datetime>
            </template>
        </cy-cell>

        <cy-popup-datetime v-model="value2" format="YYYY-MM-DD HH" @on-change="change2"></cy-popup-datetime>

        <div>
            <cy-cell>## picker</cy-cell>
            <cy-cell>字段 类型 默认值 说明</cy-cell>

            <cy-cell>format string YYYY-MM-DD 时间格式，不支持特殊字符，只能类似 YYYY-MM-DD HH:mm 这样的格式（不支持秒 ss）, 另外支持 YYYY-MM-DD A 这样的格式(A为上下午)</cy-cell>
            <cy-cell>title string 标题</cy-cell>
            <cy-cell>value string 表单值，v-model绑定</cy-cell>
            <cy-cell>inline-desc string 描述字符</cy-cell>
            <cy-cell>placeholder string 提示文字，当value为空时显示</cy-cell>
            <cy-cell>min-year number 可选择的最小年份</cy-cell>
            <cy-cell>max-year number 可选择的最大年份</cy-cell>
            <cy-cell>min-hour number 0 限定小时最小值</cy-cell>
            <cy-cell>max-hour number 23 限定小时最大值</cy-cell>
            <cy-cell>confirm-text string ok(确认) 确认按钮文字</cy-cell>
            <cy-cell>cancel-text string cancel(取消) 取消按钮文字</cy-cell>
            <cy-cell>clear-text string 显示在中间的自定义按钮的文字</cy-cell>
            <cy-cell>year-row string {value} 年份的渲染模板</cy-cell>
            <cy-cell>month-row string {value} 月份的渲染模板</cy-cell>
            <cy-cell>day-row string {value} 日期的渲染模板</cy-cell>
            <cy-cell>hour-row string {value} 小时的渲染模板</cy-cell>
            <cy-cell>minute-row string {value} 分钟的渲染模板</cy-cell>
            <cy-cell>start-date string 限定最小日期，格式必须为 YYYY-MM-DD，注意该限制只能限定到日期，不能限定到小时分钟。小时限定请使用min-hour和max-hour</cy-cell>
            <cy-cell>end-date string 限定最大日期，格式必须为 YYYY-MM-DD，注意该限制只能限定到日期，不能限定到小时分钟</cy-cell>
            <cy-cell>required boolean false 是否必填</cy-cell>
            <cy-cell>display-format function 自定义显示值</cy-cell>
            <cy-cell>readonly string 只读模式，显示类似于 cell</cy-cell>
            <cy-cell>show boolean 控制显示，要求 vue^2.3</cy-cell>
            <cy-cell>minute-list array 定义分钟列表，比如 ['00', '15', '30', '45']</cy-cell>
            <cy-cell>hour-list array 定义小时列表，比如 ['09', '10', '11', '12']</cy-cell>
            <cy-cell>default-selected-value string 设置默认选中日期，当前 value 为空时有效</cy-cell>
            <cy-cell>compute-hours-function function 动态设置小时列表，参数为 (value, isToday, generateRange)</cy-cell>
            <cy-cell>compute-days-function function 动态设置日期列表，参数为 ({year, month, min, max}, generateRange)</cy-cell>
            <cy-cell>order-map object 自定义列顺序, 如 {year: 1, month: 2, day: 3, hour: 4, minute: 5, noon: 6}</cy-cell>

            <cy-cell>字段 参数 说明</cy-cell>
            <cy-cell>@onChange (value) 表单值变化时触发, 参数 (newVal)</cy-cell>
            <cy-cell>@onClear 点击显示在中间的自定义按钮时触发</cy-cell>
            <cy-cell>@onShow 弹窗显示时触发</cy-cell>
            <cy-cell>@onHide (type), type is one of [cancel, confirm] 弹窗关闭时触发</cy-cell>
            <cy-cell>@onCancel 点击取消按钮或者遮罩时触发，等同于事件 onHide(cancel)</cy-cell>
            <cy-cell>@onConfirm (value) v2.9.0 支持该参数 点击确定按钮时触发，等同于事件 onHide(confirm)</cy-cell>
        </div>
    </div>
</template>

<script>
export default {
    name: "home",

    data() {
        return {
            value: "2012-12-12 12:15",
            value2: "2012-12-12 12"
        };
    },
    components: {},
    created() {},
    computed: {},
    methods: {
        change(v) {
            console.log("v", v);
        },
        change2() {}
    }
};
</script>
<style lang="scss">
</style>
