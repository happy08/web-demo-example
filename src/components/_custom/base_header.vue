<template>
    <div>
        <div class="base-header-slot"></div>
        <div class="base-header">
            <div class="flex between pd-10">
                <div class="left">
                    <slot name="left">
                        <div @click="onBack">
                            <cy-icon type="left" color="#999"></cy-icon>
                        </div>
                    </slot>
                </div>
                <div class="fs-16">
                    <slot name="title">{{title}}</slot>
                </div>
                <div class="right">
                    <slot name="right"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "base_header",
    props: {
        title: {
            type: String,
            default: ""
        }
    },
    components: {},
    created() {},
    methods: {
        onBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped lang="scss">
@import "../../assets/css/_variable.scss";
.base-header {
    background: #fff;
    height: $headerHeight;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: content-box;
    padding-top: calc(constant(safe-area-inset-top)); /*20*/
    padding-top: calc(env(safe-area-inset-top));
    .left,
    .right {
        min-width: 44px;
    }
}
.base-header-slot {
    height: $headerHeight;
}
</style>
