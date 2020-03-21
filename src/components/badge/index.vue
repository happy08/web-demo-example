<!--徽标-->
<template>
    <span
        v-text="text"
        :class="['cy-badge',{'cy-badge-plain': !!plain}, {'cy-badge-dot': typeof text === 'undefined'}]"
        :style="style"
    ></span>
</template>

<script>
export default {
    name: "cy-badge",
    props: {
        text: [String, Number],
        color: String,
        plain: Boolean
    },
    computed: {
        style() {
            return {
                background: this.plain ? "transparent" : this.color,
                color: this.plain ? this.color : "",
                "border-color": this.color
            };
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/css/_variable";

.cy-badge {
    display: inline-block;
    text-align: center;
    background: $bradgeColor;
    border: solid 1px $bradgeColor;
    color: #fff;
    font-size: 12px;
    height: 16px;
    line-height: 14px;
    border-radius: 99px;
    padding: 0 6px;
    background-clip: padding-box;
    vertical-align: middle;
    &.cy-badge-plain {
        background: transparent;
        color: $bradgeColor;
    }
    &.cy-badge-dot {
        height: auto;
        padding: 5px;
    }
}
</style>
