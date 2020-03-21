<template>
    <label :class="['cy-radio',$slots.default || 'no-text']" @click="onClick">
        <input
            type="radio"
            :value="currentValue"
            :checked="currentValue === label"
            :disabled="isDisabled"
            :label="label"
        />
        <span v-show="$slots.default" :class="['cy-radio-label',isDisabled && 'cy-radio-disabled']">
            <slot></slot>
        </span>
    </label>
</template>
<script>
export default {
    name: "cy-radio",
    props: {
        value: {
            type: [String, Number, Boolean],
            default: false
        },
        label: [String, Number, Boolean],
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            parent: null
        };
    },
    computed: {
        currentValue: {
            get() {
                return this.parent ? this.parent.value : this.value;
            },
            set(val) {
                (this.parent || this).$emit("input", val);
            }
        },
        isDisabled() {
            return this.parent
                ? this.parent.disabled || this.disabled
                : this.disabled;
        }
    },
    created() {
        this.findCptUpward("cy-radiogroup");
    },
    methods: {
        onClick(event) {
            if (this.isDisabled) {
                return false;
            }
            this.currentValue = this.label;
        },
        findCptUpward(cptName) {
            let parentCpt = this.$parent;
            while (parentCpt) {
                if (parentCpt.$options.name === cptName) {
                    this.parent = parentCpt;
                    break;
                }
                parentCpt = parent.$parent;
            }
        }
    }
};
</script>

<style lang="scss">
@import "../../assets/css/_variable";
@import "../../assets/css/_mixin";

.cy-radio {
    display: flex;
    align-items: center;
    margin-right: 10px;
    line-height: 1;
    &.no-text {
        margin-right: 0px;
    }
    .cy-radio-label {
        padding-left: 3px;
        font-size: $radioFontSize;
        pointer-events: none;
        vertical-align: middle;
    }
    .cy-radio-disabled {
        color: #999999;
    }
    input {
        position: relative;
        width: $radioWidth;
        height: $radioHeight;
        border: 1px solid $radioBorderColor;
        -webkit-appearance: none;
        border-radius: 50%;
        background-size: cover;
        outline: 0;
        opacity: 1;
        vertical-align: middle;
        margin-top: 0px;
        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: $radioBgColor;
            background-repeat: no-repeat;
            background-position: center;
            border-color: $radioBgColor;
            background-size: 60%;
            box-shadow: 0 4px 6px 0 rgba($radioBgColor, 0.15);
            border-radius: 50%;
            opacity: 0;
            pointer-events: none;
            @include setRadioBg("FFFFFF");
        }
        &:checked::before {
            opacity: 1;
            animation: cy-zoom-in 0.5s;
        }
        &:after {
            position: absolute;
            left: 50%;
            top: 50%;
            content: "";
            width: 0;
            height: 0;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            background: $checkboxBgColor;
            border-radius: 50%;
            opacity: 0;
            pointer-events: none;
        }
        &:checked:not(:disabled):after {
            animation: cy-zoom-none 0.3s;
        }

        &:disabled {
            border-color: #ccc;
            background-color: #e1e1e1;
            &::before {
                background-color: #e1e1e1;
                box-shadow: none;
                @include setRadioBg("aaaaaa");
            }
        }
    }
}
</style>