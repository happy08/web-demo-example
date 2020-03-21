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
        text: String,
        link: String,
        gradients: {
            type: Array
        }
    },
    methods: {
        handleClick() {
            this.link &&
                !this.disabled && this.$utils.go(this.link, this.$router);
        }
    },
    computed: {
        noBorder() {
            return Array.isArray(this.gradients);
        },
        style() {
            if (this.gradients) {
                if (this.gradients[1]) {
                    return {
                        background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
                        color: "#FFFFFF"
                    };
                }
                return {
                    background: this.gradients[0],
                    color: "#FFFFFF"
                };
            }
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
                    "cy-btn-radius": this.round,
                    "cy-btn-angle": this.angle,
                    "cy-btn-no-border": this.noBorder
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
    line-height: $btnHeight - 2px;
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
}

.cy-btn-inline {
    display: inline-block;
}

.cy-btn-disabled,
.cy-btn-plain-disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

.cy-btn-radius {
    border-radius: 999px !important;
}
.cy-btn-angle {
    border-radius: 0px !important;
}
.cy-btn-lg {
    height: $btnLgHeight;
    line-height: $btnLgHeight - 2px;
    font-size: $btnLgFontSize;
}
.cy-btn-sm {
    display: inline-block;
    padding: 0 8px;
    height: $btnSmHeight;
    line-height: $btnSmHeight - 2px;
    font-size: $btnSmFontSize;
    border-radius: 3px;
}
.cy-btn-xs {
    display: inline-block;
    padding: 0 2px;
    min-width: 22px;
    height: $btnXsHeight;
    line-height: $btnXsHeight - 2px;
    font-size: $btnXsFontSize;
    border-radius: 2px;
}

.cy-btn.cy-btn-no-border {
    border-top: 1px solid rgba(0, 0, 0, 0);
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    border-left: 0px solid rgba(0, 0, 0, 0);
    border-right: 0px solid rgba(0, 0, 0, 0);
}

//default
.cy-btn-default {
    border-color: #b5b5b5;
    color: #333333;
    background-color: #f8f8f8;
    &:not(.cy-btn-disabled):active {
        opacity: 0.8;
    }
}
//plain-default
.cy-btn-plain-default {
    color: #353535;
    border: 1px solid #b5b5b5;
    &:not(.cy-btn-plain-disabled):active {
        opacity: 0.8;
    }
}

@mixin setCyBtn($name: "blue", $color: #1989fa) {
    .cy-btn-#{$name} {
        border-color: $color;
        background-color: $color;
        &:not(.cy-btn-disabled):active {
            opacity: 0.8;
        }
    }
    .cy-btn-plain-#{$name} {
        color: $color;
        border: 1px solid $color;
        &:not(.cy-btn-plain-disabled):active {
            opacity: 0.8;
        }
    }
}
@include setCyBtn("blue", #1989fa);
@include setCyBtn("green", #4fc08d);
@include setCyBtn("yellow", #eb7f51);
@include setCyBtn("red", #e64340);
//·······可继续扩展·······
</style>
