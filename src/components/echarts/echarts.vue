<template>
    <div class="echarts" ref="echarts" :style="{height:height,width:width}"></div>
</template>
<script>
import echarts from "echarts";

export default {
    name: "cy-echarts",
    components: {},
    props: {
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "400px"
        },
        option: Object
    },
    data() {
        return {
            chart: null
        };
    },
    created() {
        const map = this.option.series[0].mapType || "china";
        require(`echarts/map/js/${map}.js`);
    },
    mounted() {
        this.initChart();
    },
    watch: {
        option: {
            handler(nVal, oVal) {
                this.$nextTick(() => {
                    nVal && this.chart && this.chart.setOption(nVal); // 配置和数据
                });
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        initChart() {
            this.chart = echarts.init(this.$refs.echarts);
            //window.onresize = echarts.init(this.$refs.echarts).resize;
            //this.chart.setOption(this.option)  // 配置和数据
        }
    },
    beforeDestroy() {
        if (!this.chart) {
            return;
        }
        this.chart.dispose();
        this.chart = null;
    }
};
</script>
<style lang="scss" scoped>
</style>