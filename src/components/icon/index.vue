<template>
    <svg v-if="iconSrc" class="cy-icon" :style="style" aria-hidden="true">
        <use :xlink:href="'#icon-'+type" />
    </svg>
    <i v-else-if="!!this.type" class="cy-icon" :style="style"></i>
</template>

<script>
import "./cy-fonts/iconfont.js";
export default {
    name: "cy-icon",
    props: {
        type: String,
        size: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: ""
        }
    },
    computed: {
        iconSrc() {
            return !!this.type && this.type.indexOf("/") === -1;
        },
        style() {
            return {
                width: `${this.size}px`,
                height: `${this.size}px`,
                color: this.color,
                "background-image": this.iconSrc ? "" : `url("${this.type}")`
            };
        }
    },
    methods: {}
};
</script>
<style lang="scss">
.cy-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    color: inherit;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
    background-size: cover;
    opacity: 0.8;
}
</style>
