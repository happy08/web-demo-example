<template>
    <div class="cy-col" :class="classObject">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "cy-col",
    props: {
        span: {
            type: [String, Number],
            default: "24"
        },
        offset: {
            type: [String, Number],
            default: "0"
        }
    },
    data() {
        return {
            classObject: {}
        };
    },
    watch: {
        span: {
            handler(val) {
                if (val) {
                    this.classObject = Object.assign(this.classObject, {
                        ["cy-col-" + val]: this.span == val
                    });
                }
            },
            immediate: true
        },
        offset: {
            handler(val) {
                if (val) {
                    this.classObject = Object.assign(this.classObject, {
                        ["cy-col-offset-" + val]: this.offset == val
                    });
                }
            },
            immediate: true
        }
    },
    methods: {}
};
</script>

<style lang="scss">
.cy-col {
    float: left;
    box-sizing: border-box;
    word-break: break-all;
}

@for $i from 1 through 24 {
    .cy-col-offset-#{$i} {
        margin-left: 100/24 * $i * 1%;
    }

    .cy-col-#{$i} {
        width: 100/24 * $i * 1%;
    }
}
</style>