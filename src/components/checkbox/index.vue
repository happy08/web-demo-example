<template>
  <label class="cy-checkbox">
    <input
      type="checkbox"
      :name="name"
      :disabled="disabled"
      :checked.prop="isChecked"
      :value="submittedValue"
      @change="handleChange"
    />
    <span :class="['cy-checkbox-label',{'cy-checkbox-disabled':disabled}]" v-if="label">{{label}}</span>
    <span :class="['cy-checkbox-label',{'cy-checkbox-disabled':disabled}]" v-else>
      <slot></slot>
    </span>
  </label>
</template>
<script>
export default {
  name: "cy-checkbox",
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ""
    },
    value: {
      required: true
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    submittedValue: {
      type: String,
      default: "on" // HTML default
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value() {
      this.isChecked = this.looseEqual(this.value, this.trueValue);
    },
    checked(newValue, oldValue) {
      this.isChecked = newValue;
    }
  },
  data() {
    return {
      isChecked: this.value == this.trueValue || this.checked
    };
  },

  mounted() {
    this.$emit(
      "update:checked",
      this.isChecked ? this.trueValue : this.falseValue,
      this.label
    );
    this.$emit(
      "input",
      this.isChecked ? this.trueValue : this.falseValue,
      this.label
    );
  },
  methods: {
    isObject(obj) {
      return obj !== null && typeof obj === "object";
    },
    looseEqual(a, b) {
      return (
        a == b ||
        (this.isObject(a) && this.isObject(b)
          ? JSON.stringify(a) === JSON.stringify(b)
          : false)
      );
    },
    handleChange(event) {
      const isCheckedPrevious = this.isChecked;
      const isChecked = event.target.checked;

      this.$emit(
        "input",
        isChecked ? this.trueValue : this.falseValue,
        this.label,
        event
      );
      if (isCheckedPrevious !== isChecked) {
        this.$emit(
          "onChange",
          isChecked ? this.trueValue : this.falseValue,
          this.label,
          event
        );
      }
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/css/_variable";
@import "../../assets/css/_mixin";

.cy-checkbox {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
  line-height: 1;
  .cy-checkbox-label {
    padding-left: 3px;
    font-size: $checkboxFontSize;
    pointer-events: none;
    vertical-align: middle;
  }
  .cy-checkbox-disabled {
    color: #999999;
  }
  input {
    position: relative;
    width: $checkboxWidth;
    height: $checkboxHeight;
    border: 1px solid $checkboxBorderColor;
    -webkit-appearance: none;
    background-size: cover;
    outline: 0;
    opacity: 1;
    vertical-align: middle;
    margin-top: 0px;
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: $checkboxBgColor;
      background-repeat: no-repeat;
      background-position: center;
      border-color: $checkboxBgColor;
      background-size: 60%;
      box-shadow: 0 4px 6px 0 rgba($checkboxBgColor, 0.15);
      opacity: 0;
      pointer-events: none;
      @include setRadioBg("FFFFFF");
    }
    &:checked:before {
      opacity: 1;
      animation: cy-zoom-in .5s;
    }
    &:after {
        position: absolute;
        left: 50%;
        top: 50%;
        content: "";
        width: 0;
        height: 0;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        background: $checkboxBgColor;
        opacity: 0;
        pointer-events: none;
    }
    &:checked:not(:disabled):after {
        animation: cy-zoom-none .3s;
    }
    &:disabled {
      border-color: #ccc;
      background-color: #e1e1e1;
      &:after {
        background-color: #e1e1e1;
        box-shadow: none;
        @include setRadioBg("aaaaaa");
      }
    }
  }
}
</style>