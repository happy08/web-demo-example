<!--圆点-->
<template>
    <div class="cy-round-dot" :style="style"></div>
</template>

<script>
export default {
    name: "cy-round-dot",
    props: {
        size: {
            type: [String, Number],
            default: 8
        },
        color: String,
        background: String,
        position: {
            type: String,
            default: "bottom"
        },
    },
    computed: {
        style() {
            let style = {
                "background-color": this.background,
                "background-image": this.color ? `radial-gradient(${this.color} 60%, transparent 0), radial-gradient(${this.color} 0%, transparent 0)` : "",
                "background-size": this.size ? `${this.size}px ${this.size}px` : "",
                [this.position]: this.position ? `-${this.size / 2}px` : ""
            };
            if (this.position == "top" || this.position == "bottom") {
                style.width = "100%"
                style.height = `${this.size}px`
            } else {
                style.width = `${this.size}px`
                style.height = "100%"

            }
            return style
        }
    }
};
</script>

<style lang="scss">
.cy-round-dot {
    position: absolute;
    background: #f33;
    background-image: radial-gradient(#fff 50%, transparent 0),
        radial-gradient(#fff 0, transparent 0);
}
</style>
