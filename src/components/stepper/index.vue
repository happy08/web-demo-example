<template>
    <div class="cy-stepper">
        <span @click="reduce()" :class="{'cy-stepper-grey': isGrey}">
            <cy-icon type="minus"></cy-icon>
        </span>
        <input
            type="number"
            :min="minNum"
            :max="max"
            :readonly="readonly"
            :value="num | maxv(minNum, max)"
            @focus="focus"
            @blur="blur"
        />
        <span @click="add()" :class="{'cy-stepper-grey': max&&(Number(num) > max - step)}">
            <cy-icon type="plus"></cy-icon>
        </span>
    </div>
</template>
<script>
export default {
    name: "cy-stepper",
    props: {
        min: {
            type: [Number, String],
            default: 0
        },
        max: {
            type: [Number, String],
            default: Infinity
        },
        step: {
            type: [Number, String],
            default: 1
        },
        readonly: {
            type: Boolean,
            default: false
        },

        value: {
            type: [String, Number],
            required: true
        },
        decimal: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            tempNum: "",
            focusing: false,
            num: this.value,
            minNum: this.min
        };
    },
    filters: {
        maxv(v, min, max) {
            let val = v;
            if (val > max) val = max;
            if (val < min) val = min;
            return val;
        }
    },
    watch: {},
    computed: {
        isGrey() {
            return (
                (this.focusing ? this.tempNum : this.num) - this.step < this.min
            );
        }
    },
    methods: {
        focus(e) {
            if (this.readonly) return;
            const v = this.num;
            this.tempNum = v;
            this.minNum = "";
            this.focusing = true;
            this.$emit("input", this.num);
        },
        blur(e) {
            if (this.readonly) return;
            let v = e.target.value;
            this.minNum = this.min;
            this.focusing = false;
            if (v) {
                if (v > this.max) v = this.max;
                if (v < this.minNum) v = this.minNum;
                this.num = v;
            } else {
                this.num = this.tempNum;
            }
            this.$emit("input", this.num);
        },

        add() {
            this.num = Number(this.num);
            if (this.num <= this.max - this.step && this.max > this.minNum) {
                this.num += Number(this.step);
                this.$emit("input", this.num);
            }
        },

        reduce() {
            if (this.num - this.step >= this.minNum) {
                this.num -= Number(this.step);
                this.$emit("input", this.num);
            }
        }
    }
};
</script>
<style lang="scss">
.cy-stepper {
    border: 1px solid #dedede;
    width: 100px;
    height: 30px;
    line-height: 30px;
    display: flex;
    border-radius: 4px;
    position: relative;
    overflow: hidden;

    span {
        color: #666;
        width: 25%;
        text-align: center;
        cursor: pointer;
        padding: 0;
        box-sizing: border-box;
        -webkit-user-select: none;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input {
        border: none;
        width: 50%;
        text-align: center;
        border-radius: 0;
        padding: 0;
        appearance: none;
        box-sizing: border-box;
        outline: none;
        font-family: initial;
        color: #333;
    }
    .cy-stepper-grey {
        color: #ececee;
    }
}
</style>