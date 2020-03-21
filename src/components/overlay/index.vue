<!--遮罩层-->
<template>
    <transition name="cy-fade">
        <div v-show="show" class="cy-bg"></div>
    </transition>
</template>
<script>
export default {
    name: "cy-overlay",
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style lang="scss">
.cy-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
}
</style>
