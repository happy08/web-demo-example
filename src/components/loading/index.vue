<template>
    <span class="cy-loading">
        <cy-icon type="loading" class="cy-loading-icon" :style="style && style.loading" />
        <span class="cy-loading-text" v-if="text" :style="style && style.text">{{ text }}</span>
    </span>
</template>

<script>
import cyIcon from "../icon";
export default {
    name: "cy-loading",
    components: {
        cyIcon
    },
    props: {
        text: String,
        size: [Number, String],
        color: String
    },
    computed: {
        style() {
            return {
                loading: {
                    width: `${this.size}px`,
                    height: `${this.size}px`,
                    color: this.color
                },
                text: {
                    fontSize: `${this.size / 2}px`,
                    color: this.color
                }
            };
        }
    }
};
</script>

<style lang="scss">
.cy-loading {
    display: flex;
    align-items: center;
    .cy-loading-icon {
        position: relative;
        display: block;
        width: 20px;
        height: 20px;
        transform: scale(1);
        color: inherit;
        animation: cy-rotate 1s infinite linear;
    }
    .cy-loading-text {
        padding-left: 5px;
        display: block;
        font-size: 14px;
        color: #888888;
    }
}
</style>