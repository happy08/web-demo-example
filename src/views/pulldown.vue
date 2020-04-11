<template>
    <div>
        <cy-pulldown-refresh
            :tab="true"
            :tabList="tabList"
            :top="44"
            @init="pullInit"
            @pullDown="onPullDown"
            @onIndexChange="onIndexChange"
            @upCallback="upCallback"
            :curIndex="curIndex"
        >
            <!--
            <template #tab>
                <cy-tab
                    v-model="curTabIndex"
                    barWidth="80%"
                    :noScrollNum="4"
                    :barActiveColor="['#f33','#fa9']"
                    :barHeight="4"
                    @onIndexChange="onIndexChange"
                >
                    <cy-tab-item>
                        已发货2
                        <cy-badge text="3">4</cy-badge>
                    </cy-tab-item>
                    <cy-tab-item>未发货</cy-tab-item>
                    <cy-tab-item>全部订单</cy-tab-item>
                    <cy-tab-item>全部订单</cy-tab-item>
                    <cy-tab-item>未发货</cy-tab-item>
                </cy-tab>
            </template>-->

            <ul class="data-list">
                <li v-for="pd in dataList" :key="pd.id">
                    <img class="pd-img" :imgurl="pd.pdImg" src="/static/mock/img/loading.png" />
                    <p class="pd-name">{{pd.pdName}}</p>
                    <p class="pd-price">{{pd.pdPrice}} 元</p>
                    <p class="pd-sold">已售{{pd.pdSold}}件</p>
                </li>
            </ul>

            <template #empty>
                <div class="data-empty" @click="clickE">no data</div>
            </template>
            <!-- <ul class="data-list" v-show="curIndex===1">
                        <li v-for="pd in dataList" :key="pd.id">
                            <img
                                class="pd-img"
                                :imgurl="pd.pdImg"
                                src="/static/mock/img/loading.png"
                            />
                            <p class="pd-name">{{pd.pdName}}</p>
                            <p class="pd-price">{{pd.pdPrice}} 元</p>
                            <p class="pd-sold">已售{{pd.pdSold}}件</p>
                        </li>
            </ul>-->
        </cy-pulldown-refresh>
    </div>
</template>

<script>
import mockData from "./mescroll/mock/pdlist";

export default {
    components: {},
    data() {
        return {
            mescroll: null,
            tabList: [
                {
                    id: 1,
                    name: "测试"
                },
                {
                    id: 2,
                    name: "2"
                }
            ],
            curTabIndex: 0,
            curIndex: 0,
            dataList: []
        };
    },

    methods: {
        clickE() {
            console.log("sdsd");
        },
        pullInit(mescroll) {
            //mescroll.tabType = 0; // 加入标记,便于在回调中取到对应的list
            this.mescroll = mescroll;
        },
        //切换tab
        onIndexChange(newIndex) {
            this.dataList = [];
            this.curIndex = newIndex;
            console.log("onIndexChange2", newIndex);
            this.mescroll.resetUpScroll();
        },
        onPullDown() {
            console.log("onPullDown");
        },
        //上拉回调
        upCallback(page) {
            console.log("mescroll2", this.curIndex, page, this.mescroll);
            let curIndex = this.curIndex,
                pageNum = page.num,
                pageSize = page.size;
            // 延时一秒, 模拟联网
            setTimeout(() => {
                // axios.get("xxxxxx", {
                //   params: {
                //     num: page.num, //页码
                //     size: page.size //每页长度
                //   }
                // }).then((response)=> {
                let listData = [];
                console.log("curIndex2", curIndex);
                // curIndex 全部商品0; 奶粉1; 图书2;
                if (curIndex === 0) {
                    // 全部商品 (模拟分页数据)
                    for (
                        let i = (pageNum - 1) * pageSize;
                        i < pageNum * pageSize;
                        i++
                    ) {
                        if (i === mockData.length) break;
                        listData.push(mockData[i]);
                    }
                } else if (curIndex === 1) {
                    // 奶粉
                    for (let j = 0; j < mockData.length; j++) {
                        if (mockData[j].pdName.indexOf("奶2") !== -1) {
                            listData.push(mockData[j]);
                        }
                    }
                } else if (curIndex === 2) {
                    // 图书
                    for (let k = 0; k < mockData.length; k++) {
                        if (mockData[k].pdName.indexOf("图书") !== -1) {
                            listData.push(mockData[k]);
                        }
                    }
                }
                if (page.num === 1) this.dataList = [];
                console.log("listData", listData);
                // 把请求到的数据添加到列表
                this.dataList = this.dataList.concat(listData);
                // 数据渲染成功后,隐藏下拉刷新的状态
                this.$nextTick(() => {
                    this.mescroll.endSuccess(listData.length);
                });

                // 回调
                //successCallback(listData);
                // }).catch((e)=> {
                //   //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                //   errorCallback&&errorCallback()
                // })
            }, 1000);
        }
    }
};
</script>
<style lang="scss" scoped>
.data-empty {
    font-size: 50px;
}
</style>
