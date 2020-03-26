<!--上拉加载更多-->
<template>
    <div
        class="cy-pulldown-loading"
        ref="scroller"
        @touchstart="onTouchStart($event)"
        @touchmove="onTouchMove($event)"
    >
        <slot></slot>
        <div class="cy-pulldown-loading-more">
            <div class="cy-pulldown-bottom-tips">
                <cy-loading v-if="isLoading" text="加载中…" color="#666" />
                <span v-else-if="!hasMore" class="cy-pulldown-tips-txt">我是有底线的</span>
            </div>
        </div>
    </div>
</template>
<script>
import cyLoading from "../loading";

export default {
    name: "cy-pullup-loading",
    components: {
        cyLoading
    },
    props: {
        hasMore: {
            type: Boolean,
            default: true
        },
        isLoading: {
            type: Boolean,
            default: false
        },

        isShowMod: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            startX: 0,
            startY: 0,
            diffX: 0,
            diffY: 0,
            beforeScrollTop: 0
        };
    },

    mounted: function() {
        this.scrollListener();
    },

    methods: {
        onTouchStart(e) {
            try {
                this.startX = Number(e.changedTouches[0].pageX);
                this.startY = Number(e.changedTouches[0].pageY);
            } catch (e) {
                console.log(e.message);
            }
        },
        onTouchMove(e) {
            let endX = Number(e.changedTouches[0].pageX);
            let endY = Number(e.changedTouches[0].pageY);
            this.diffX = endX - this.startX;
            this.diffY = endY - this.startY;
        },

        scrollListener() {
            window.addEventListener("scroll", this.onScroll, false);
            window.addEventListener("resize", this.onScroll, false);
        },

        requestAniFrame() {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                }
            );
        },

        onScroll() {
            this.requestAniFrame()(() => {
                if (
                    !this.hasMore ||
                    !this.isScrollAtBottom() ||
                    this.isLoading ||
                    !this.isShowMod
                ) {
                    return false;
                } else {
                    this.$emit("loadmore");
                }
            });
        },

        calculateTopPosition(el) {
            if (!el) {
                return 0;
            }
            return el.offsetTop + this.calculateTopPosition(el.offsetParent);
        },

        getWindowScrollTop() {
            return window.pageYOffset !== undefined
                ? window.pageYOffset
                : (
                      document.documentElement ||
                      document.body.parentNode ||
                      document.body
                  ).scrollTop;
        },

        isScrollAtBottom() {
            let offsetDistance;

            const windowScrollTop = this.getWindowScrollTop();

            offsetDistance =
                this.calculateTopPosition(this.$refs.scroller) +
                this.$refs.scroller.offsetHeight -
                windowScrollTop -
                window.innerHeight;

            // 保证是往下滑动的
            let beforeScrollTop = this.beforeScrollTop;
            this.beforeScrollTop = windowScrollTop;

            return (
                offsetDistance <= 20 && windowScrollTop >= this.beforeScrollTop
            );
        }
    },

    activated() {
        if (this.keepAlive) {
            this.keepAlive = false;
            this.scrollListener();
        }
    },

    deactivated() {
        this.keepAlive = true;
        window.removeEventListener("scroll", this.onScroll, false);
        window.removeEventListener("resize", this.onScroll, false);
    },

    destroyed() {
        window.removeEventListener("scroll", this.onScroll, false);
        window.removeEventListener("resize", this.onScroll, false);
    }
};
</script>

<style lang="scss">
.cy-pulldown-loading {
    .cy-pulldown-bottom-tips {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #bfbfbf;
        font-size: 12px;
        .cy-pulldown-tips-txt {
            position: relative;
            &:after,
            &:before {
                content: "";
                height: 1px;
                width: 20px;
                background-color: #bfbfbf;
                position: absolute;
                top: 50%;
                margin-top: -0.5px;
            }
            &:before {
                left: -25px;
            }
            &:after {
                right: -25px;
            }
        }
    }
}
</style>