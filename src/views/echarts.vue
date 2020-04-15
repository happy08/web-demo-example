<template>
    <div class="echarts">
        <cy-echarts :option="option"></cy-echarts>
        <cy-echarts :option="pOption"></cy-echarts> 
    </div>
</template>
<script>
import cyEcharts from "@/components/echarts/echarts";

export default {
    name: "echarts",
    components: {
cyEcharts
    },
    data() {
        return {
            option: {
                backgroundColor: "#02AFDB",
                title: {
                    // text: '在线设备分布',
                    left: "40%",
                    top: "0px",
                    textStyle: {
                        color: "#fff",
                        opacity: 0.7
                    }
                },
                dataRange: {
                    show: false,
                    min: 0,
                    max: 1000000,
                    text: ["High", "Low"],
                    realtime: true,
                    calculable: true,
                    color: ["orangered", "yellow", "lightskyblue"]
                },
                tooltip: {
                    trigger: "item",
                    triggerOn: "click", //触发方式
                    enterable: true, // 鼠标可移入tooltip中
                    formatter: function(params) {
                        console.log("params", params);
                        return `<a class="link" href="#${params.data.link}">显示的文本</a>`;
                    }
                },
                // geo: {
                //     show:true,
                //     map: "china",
                //     label: {
                //         emphasis: {
                //             show: false
                //         }
                //     },
                //     roam:"scale",
                //     silent: true,
                //     itemStyle: {
                //         normal: {
                //             areaColor: "#37376e",
                //             borderColor: "#000"
                //         },
                //         emphasis: {
                //             areaColor: "#2a333d"
                //         }
                //     }
                // },

                series: [
                    {
                        type: "map",
                        mapType: "china",
                        zoom: 1.2,
                        mapLocation: {
                            y: 100
                        },
                        roam: true, //缩放
                        scaleLimit: {
                            //所属组件的z分层，z值小的图形会被z值大的图形覆盖
                            min: 1, //最小的缩放值
                            max: 3 //最大的缩放值
                        },

                        data: [
                            {
                                name: "广东",
                                value: 1028397.812,
                                link: "/home"
                            },
                            {
                                name: "湖北",
                                value: 69549.124
                            }
                        ],
                        symbolSize: 12,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: "#fff",
                                borderWidth: 1
                            }
                        }
                    }
                ]
            },
            pOption: {
                series: [
                    {
                        type: "map",
                        mapType: "province/anhui",
                        roam: true, //缩放
                        selectedMode: "single",
                        map: "安徽",
                        itemStyle: {
                            normal: { label: { show: true } },
                            emphasis: { label: { show: true } }
                        }
                    }
                ]
            }
        };
    },
    mounted() {},
    methods: {}
};
</script>
<style lang="scss" scoped>
/deep/.link {
    pointer-events: all;
    color: #fff;
}
</style>