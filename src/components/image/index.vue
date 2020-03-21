<template>
    <div :class="['cy-image',{'cy-image-round':round}]">
        <img :src="src" class="cy-image-img" :style="{'object-fit':fit}" />
    </div>
</template>

<script>
export default {
    name: "cy-image",
    props: {
        src: {
            type: String,
            required: true,
            default: false
        },
        round: {
            type: Boolean,
            default: false
        },
        fit: {
            type: String,
            default: "cover"
        }
    },
    computed: {
        iconSrc() {
            return !!this.type && this.type.indexOf("/") === -1;
        }
    },
    methods: {}
};
</script>
<style lang="scss">
.cy-image {
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
    &.cy-image-round {
        overflow: hidden;
        border-radius: 50%;
        img {
            border-radius: inherit;
        }
    }
    .cy-image-img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>
