<template>
    <div :class="['cy-totop',{'none':!show}]" @click="onTotop">
        <slot>
            <div class="cy-totop-inner">
                <cy-icon type="vertical-align-top" color="#ffffff" size="26"></cy-icon>
            </div>
        </slot>
    </div>
</template>
<script>
import cyIcon from "../icon";
import toTop from "../../utils/toTop";
export default {
    name: "cy-totop",
    components: {
        cyIcon
    },
    data() {
        return {
            show: false
        };
    },
    watch: {},
    mounted() {
        window.addEventListener("scroll", this.onScroll, true);
    },
    methods: {
        onTotop() {
            toTop();
        },
        onScroll() {
            //获取滚动距顶部的距离
            let scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (scrollTop > 200) {
                this.show = true;
            } else {
                this.show = false;
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
};
</script>
<style lang="scss">
.cy-totop {
    position: fixed;
    bottom: 60px;
    right: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 1000;
    &.none {
        display: none;
    }
}
</style>

