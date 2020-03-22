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
.cy-col {
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    word-break: break-all;
}
.cy-col-offset-1 {
    margin-left: 4.16667%;
}
.cy-col-1 {
    width: 4.16667%;
}
.cy-col-offset-2 {
    margin-left: 8.33333%;
}
.cy-col-2 {
    width: 8.33333%;
}
.cy-col-offset-3 {
    margin-left: 12.5%;
}
.cy-col-3 {
    width: 12.5%;
}
.cy-col-offset-4 {
    margin-left: 16.66667%;
}
.cy-col-4 {
    width: 16.66667%;
}
.cy-col-offset-5 {
    margin-left: 20%;
}
.cy-col-5 {
    width: 20%;
}
.cy-col-offset-6 {
    margin-left: 25%;
}
.cy-col-6 {
    width: 25%;
}
.cy-col-offset-8 {
    margin-left: 33.33333%;
}
.cy-col-8 {
    width: 33.33333%;
}
.cy-col-offset-12 {
    margin-left: 50%;
}
.cy-col-12 {
    width: 50%;
}
.cy-col-offset-24 {
    margin-left: 100%;
}
.cy-col-24 {
    width: 100%;
}
// @for $i from 1 through 24 {
//     .cy-col-offset-#{$i} {
//         margin-left: 100/24 * $i * 1%;
//     }

//     .cy-col-#{$i} {
//         width: 100/24 * $i * 1%;
//     }
// }
</style>