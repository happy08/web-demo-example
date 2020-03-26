<template>
    <div class="base-tabbar">
        <router-link
            class="tabbar-nav"
            v-for="(value,index) in tabList"
            :class="[{'active':value.active}]"
            :key="value.title"
            @click="changeTabs(value,index)"
            :to="value.href"
        >
            <span class="icon-box">
                <cy-badge class="tips" v-if="value.num" :text="value.num"></cy-badge>

                <div
                    class="icon"
                    v-show="value.active"
                    :style="{backgroundImage: 'url('+value.activeIcon+')'}"
                ></div>
                <div
                    class="icon"
                    v-show="!value.active"
                    :style="{backgroundImage: 'url('+value.icon+')'}"
                ></div>

                <span :class="['tabbar-nav-title']">{{value.title}}</span>
            </span>
        </router-link>
    </div>
</template>

<script>
import cyBadge from "@/components/badge";
export default {
    name: "base_tabbar",
    components: {
        cyBadge
    },
    data() {
        return {
            tabList: [
                {
                    title: "首页",
                    active: true,
                    href: "/home",
                    icon: require("@/assets/img/1.jpg"),
                    activeIcon: require("@/assets/img/2.jpg")
                },
                {
                    title: "button",
                    active: false,
                    num: 3,
                    href: "/button",
                    icon: require("@/assets/img/3.jpg"),
                    activeIcon: require("@/assets/img/2.jpg")
                },
                {
                    title: "image",
                    active: false,
                    href: "/image",
                    icon: require("@/assets/img/2.jpg"),
                    activeIcon: require("@/assets/img/2.jpg")
                }
            ]
        };
    },
    components: {},
    methods: {
        changeTabs: function(value, index) {
            let newArr = [...this.tabList];
            newArr.forEach((item, idx) => {
                if (index == idx) {
                    item.active = true;
                } else {
                    item.active = false;
                }
            });
            this.tabList = newArr;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/_variable.scss";
.base-tabbar {
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: $tabbarHeight;
    transform: translateY($tabbarHeight);
    background: #fff;
    border-top: 1px solid #eee;
    z-index: 1080;
    transition: 0s;
    &.show {
        transform: translateY(0px);
    }
}

.tabbar-nav {
    flex: 1;
    text-align: center;
    text-decoration: none;
    color: #999999;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &.active {
        color: #fa8909;
    }

    .icon-box {
        position: relative;
        display: inline-block;
        padding: 0px;
        line-height: 1;
        .tips {
            position: absolute;
            top: -2px;
            right: 0;
            transform: translateX(60%);
        }
    }
    .icon-box {
        .icon {
            margin: 0 auto;
            width: 25px;
            height: 25px;
            display: block;
            background-size: 100% 100%;
            background-position: center center;
        }
        .tabbar-nav-title {
            margin-top: 2px;
            font-size: 12px;
            line-height: 1;
        }
    }
}
</style>
