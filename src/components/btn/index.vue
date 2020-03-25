<template>
    <button
        class="cy-btn"
        :style="style"
        :class="classes"
        :disabled="disabled"
        @click="handleClick"
    >
        <slot>{{ text }}</slot>
    </button>
</template>

<script>
import cyIcon from "../icon";
export default {
    name: "cy-btn",
    components: {
        cyIcon
    },
    props: {
        type: {
            default: "blue"
        },
        disabled: Boolean,
        lg: Boolean,
        sm: Boolean,
        xs: Boolean,
        round: Boolean,
        angle: Boolean,
        plain: Boolean,
        inline: Boolean,
        block: Boolean,
        shadow: String,
        text: String,
        link: String,
        background: {
            type: [String, Array]
        }
    },
    methods: {
        handleClick() {
            this.link &&
                !this.disabled &&
                this.$utils.go(this.link, this.$router);
        }
    },
    computed: {
        isArray() {
            return Array.isArray(this.background);
        },
        style() {
            let style = {};
            if (this.background) {
                if (this.plain) {
                    style["border-color"] =
                        this.background || this.background[0];
                    style["color"] = this.background || this.background[0];
                } else {
                    if (this.isArray) {
                        style.background = `linear-gradient(${
                            this.background[2] == "vertical" ? "180" : "90"
                        }deg, ${this.background[0]}, ${this.background[1]})`;
                    } else {
                        style.background = this.background;
                    }
                }
            }
            if (this.shadow) {
                style["box-shadow"] = this.shadow;
            }
            return style;
        },
        classes() {
            return [
                {
                    "cy-btn-disabled": !this.plain && this.disabled,
                    "cy-btn-plain-disabled": this.plain && this.disabled,
                    "cy-btn-lg": this.lg,
                    "cy-btn-sm": this.sm,
                    "cy-btn-xs": this.xs,
                    "cy-btn-inline": this.inline,
                    "cy-btn-block": this.block,
                    "cy-btn-radius": this.round,
                    "cy-btn-angle": this.angle,
                    "cy-btn-no-border": this.background && !this.plain
                },
                !this.plain ? `cy-btn-${this.type}` : "",
                this.plain ? `cy-btn-plain-${this.type}` : ""
            ];
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/css/_variable.scss";
@import "../../assets/css/_mixin.scss";

.cy-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-left: 14px;
    padding-right: 14px;
    box-sizing: border-box;
    font-size: $btnFontSize;
    text-align: center;
    text-decoration: none;
    color: $btnFontColor;
    height: $btnHeight;
    line-height: 1;
    border-radius: $btnBorderRadius;
    @include setTapColor();
    overflow: hidden;
}
button,
input {
    &.cy-btn {
        width: 100%;
        outline: 0;
        border-width: 1px;
        border-style: solid;
        -webkit-appearance: none;
        &:focus {
            outline: 0;
        }
    }
    &.cy-btn-inline,
    &.cy-btn-sm,
    &.cy-btn-xs {
        width: auto;
    }
    &.cy-btn-block {
        display: block;
        width: 100%;
    }
}

.cy-btn-inline {
    display: inline-block;
}

.cy-btn-radius {
    border-radius: 999px !important;
}
.cy-btn-angle {
    border-radius: 0px !important;
}
.cy-btn-lg {
    height: $btnLgHeight;
    line-height: 1;
    font-size: $btnLgFontSize;
}
.cy-btn-sm {
    display: inline-block;
    padding: 0 8px;
    height: $btnSmHeight;
    line-height: 1;
    font-size: $btnSmFontSize;
    border-radius: 3px;
}
.cy-btn-xs {
    display: inline-block;
    padding: 0 4px;
    min-width: 22px;
    height: $btnXsHeight;
    line-height: 1;
    font-size: $btnXsFontSize;
    border-radius: 2px;
}

.cy-btn.cy-btn-no-border {
    border: 0px solid rgba(0, 0, 0, 0);
}

.cy-btn-disabled,
.cy-btn-plain-disabled {
    cursor: not-allowed;
    background: #e9e9e9 !important;
    border: 1px solid rgba(0, 0, 0, 0) !important;
    color: #ffffff !important;
}

@mixin setCyBtn($name: "blue", $background: #1989fa, $color: #1989fa) {
    .cy-btn-#{$name} {
        border-color: $background;
        background-color: $background;
        &:not(.cy-btn-disabled):active {
            opacity: 0.8;
        }
    }
    .cy-btn-plain-#{$name} {
        color: $color;
        border-color: $background;
        &:not(.cy-btn-plain-disabled):active {
            opacity: 0.8;
        }
    }
}
//$name, $background, $color
@include setCyBtn("blue", #1989fa, #1989fa);
@include setCyBtn("green", #4fc08d, #4fc08d);
@include setCyBtn("yellow", #eb7f51, #eb7f51);
@include setCyBtn("red", #e64340, #e64340);
@include setCyBtn("grey", #bebebe, #5f5e5e);
@include setCyBtn("white", #ffffff, #333333);
</style>
