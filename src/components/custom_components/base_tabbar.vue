<template>
    <div class="base-tabbar">
        <div class="flex between pd-15 fs-14">
            <router-link to="/">Home</router-link>
            <router-link to="/about">about</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "base_tabbar",
    data() {
        return {};
    },
    components: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/css/_variable.scss";
.base-tabbar {
    background: #fff;
    z-index: 1080;
    transition: 0s;
    transform: translateY($tabbarHeight);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: $tabbarHeight;
}
.base-tabbar.show {
    transform: translateY(0px);
}
</style>
