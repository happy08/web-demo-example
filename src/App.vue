<template>
    <div id="app" class="layout">
        <transition :name="transition">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view class="wrapper"></router-view>
            </keep-alive>
            <router-view class="wrapper" v-else></router-view>
        </transition>
        <base-tabbar :class="{'show':tabbarShow}" />
    </div>
</template> 

<script>
export default {
    name: "App",
    data() {
        return {
            transition: "",
            tabbarShow: false
        };
    },
    watch: {
        // 监听路由
        $route(to, from) {
            //判断前进后退
            if (
                to.meta.index == from.meta.index ||
                from.meta.index == undefined
            ) {
                this.transition = "slide-fade";
            } else if (to.meta.index > from.meta.index) {
                this.transition = "slide-left";
            } else {
                this.transition = "slide-right";
            }

            //判断是否显示tabbar
            if (to.path == "/" || to.path == "/home" || to.path == "/about") {
                this.tabbarShow = true;
            } else {
                this.tabbarShow = false;
            }
        }
    }
};
</script>

<style lang="scss" scope>
@import "./assets/css/_variable.scss";
/*fade切换效果*/
.slide-fade-enter-active {
    position: fixed;
    width: 100%;
    top: 0;
    opacity: 1;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-to {
    opacity: 0;
}

/*slide切换效果*/
.slide-right-leave-active,
.slide-left-enter-active {
    position: fixed;
    will-change: transform;
    transition: transform 300ms;
    transition-timing-function: ease-out;
    overflow-y: hidden !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1070 !important;
}
.slide-right-enter-active,
.slide-left-leave-active {
    position: relative;
    will-change: margin-left;
    transition: margin-left 300ms;
    transition-timing-function: ease-out;
    width: 100%;
}
.slide-right-enter-active {
    margin-left: 0;
    z-index: 8 !important;
}
.slide-right-enter {
    margin-left: -30%;
}
.slide-right-leave-active {
    z-index: 9 !important;
    transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
    transform: translate3d(100%, 0, 0);
}
// .slide-left-enter-active {
// }
.slide-left-leave-active {
    margin-left: -30%;
}

//子路由动画
// .slide-child-enter-active,
// .slide-child-leave-active {
//   transition: transform 400ms;
// }
// .slide-child-enter,
// .slide-child-leave-active {
//   transform: translateX(100%);
// }
</style>
