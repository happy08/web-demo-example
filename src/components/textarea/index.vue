<template>
    <div class="cy-txtarea">
        <div class="cy-txt-area" :class="{'cy-txtarea-error':errorState}">
            <textarea
                :placeholder="placeholder"
                v-model="textInfo"
                @input="txtLength"
                :maxlength="max"
            ></textarea>
            <span v-show="limitShow">{{txtNum}}/{{max}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "cy-txtarea",
    props: {
        max: {
            type: [String, Number],
            default: 200
        },
        placeholder: {
            type: String,
            default: "请输入"
        },
        limitShow: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            textInfo: "",
            errorState: false,
            txtNum: 0
        };
    },
    methods: {
        txtLength() {
            let txtVal = this.textInfo.length;
            this.txtNum = txtVal;
            if (txtVal > this.max) {
                this.errorState = true;
                this.$emit("onError");
            } else {
                this.errorState = false;
            }
            this.$emit("input", this.textInfo);
        }
    }
};
</script>
<style lang="scss">
.cy-txtarea {
    background: #fff;
    .cy-txt-area {
        position: relative;
        textarea {
            resize: none;
            width: 100%;
            border: none;
            outline: none;
            margin: 0;
            padding: 0;
            background: transparent;
            display: block;
        }
        span {
            color: #666;
            position: absolute;
            right: 10px;
            bottom: 5px;
            font-size: 12px;
        }
        &.cy-txtarea-error {
            border: 1px solid #e2231a;
            span {
                color: #e2231a;
            }
        }
    }
}
</style>
