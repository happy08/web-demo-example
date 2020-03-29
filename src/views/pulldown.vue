<template>
    <div>
        <cy-pulldown-refresh
            :tab="true"
            :top="44"
            @init="mescrollInit"
            @pullDown="onPullDown"
            @onIndexChange="onIndexChange"
            @upCallback="upCallback"
            :curIndex="curIndex"
        >
            <!---->

            <template #list>
                <ul class="data-list" v-show="curIndex===0">
                    <li v-for="pd in dataList" :key="pd.id">
                        <img class="pd-img" :imgurl="pd.pdImg" src="/static/mock/img/loading.png" />
                        <p class="pd-name">{{pd.pdName}}</p>
                        <p class="pd-price">{{pd.pdPrice}} 元</p>
                        <p class="pd-sold">已售{{pd.pdSold}}件</p>
                    </li>
                </ul>
                <ul class="data-list" v-show="curIndex===1">
                    <li v-for="pd in dataList" :key="pd.id">
                        <img class="pd-img" :imgurl="pd.pdImg" src="/static/mock/img/loading.png" />
                        <p class="pd-name">{{pd.pdName}}</p>
                        <p class="pd-price">{{pd.pdPrice}} 元</p>
                        <p class="pd-sold">已售{{pd.pdSold}}件</p>
                    </li>
                </ul>
            </template>
            <!-- <div class="nav" ref="navWarp">
                <p :class="getActiveCls(0)" @click="changeTab(0)">全部</p>
                <p :class="getActiveCls(1)" @click="changeTab(1)">奶粉</p>
                <p :class="getActiveCls(2)" @click="changeTab(2)">图书</p>
            </div>
            
            <ul id="dataList" class="data-list">
                <li v-for="pd in dataList" :key="pd.id">
                    <img class="pd-img" :imgurl="pd.pdImg" src="/static/mock/img/loading.png" />
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
            curIndex: 0,
            dataList: []
        };
    },

    methods: {
        mescrollInit(mescroll) {
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

            // 模拟联网
            this.getListDataFromNet(
                this.curIndex,
                page.num,
                page.size,
                arr => {
                    console.log("page.num", page.num);
                    // 如果是第一页需手动制空列表
                    if (page.num === 1) this.dataList = [];
                    console.log("arr", arr);
                    // 把请求到的数据添加到列表
                    this.dataList = this.dataList.concat(arr);
                    // 数据渲染成功后,隐藏下拉刷新的状态
                    this.$nextTick(() => {
                        this.mescroll.endSuccess(arr.length);
                    });
                },
                () => {
                    this.mescroll.endErr();
                }
            );
        },
        getListDataFromNet(
            curIndex,
            pageNum,
            pageSize,
            successCallback,
            errorCallback
        ) {
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
                        if (mockData[j].pdName.indexOf("奶") !== -1) {
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
                // 回调
                successCallback(listData);
                // }).catch((e)=> {
                //   //联网失败的回调,隐藏下拉刷新和上拉加载的状态;
                //   errorCallback&&errorCallback()
                // })
            }, 1000);
        }
    }
};
</script>
<style lang="scss">
</style>
