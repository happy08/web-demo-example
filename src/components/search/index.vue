<template>
    <div class="cy-search">
        <cy-field v-model="currentValue" :placeholder="placeholder">
            <template #label>
                <cy-icon class="cy-search-icon" type="search" color="#888"></cy-icon>
            </template>

            <template #default>
                <div class="cy-search-btn" @click.stop="onSearch">搜索</div>
            </template>
        </cy-field>
    </div>
</template>
<script>
import cyField from "../field";

export default {
    name: "cy-search",
    components: {
        cyField
    },
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        placeholder: String
    },
    data() {
        return {};
    },
    watch: {},
    computed: {
        currentValue: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit("input", val);
            }
        }
    },
    methods: {
        onSearch() {
            this.$emit("search", this.currentValue);
        }
    }
};
</script>
<style lang="scss">
.cy-search {
    .cy-search-icon {
        position: absolute;
        z-index: 2;
        left: 25px;
    }
    .cy-field-inner {
        padding: 0 8px 0 40px;
        border-radius: 50px;
        background: #f0f0f0;
    }
    .cy-search-btn {
        color: #666666;
    }
}
</style>