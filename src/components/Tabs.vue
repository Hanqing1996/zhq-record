<template>
    <ul class="tabs">
        <li class="item" v-for="item in dataSource" :key=item.value :style="itemStyle"
            :class="[`${classPrefix}-item`,value===item.value&&'selected']" @click="select(item.value)">
            {{item.text}}
        </li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Tabs extends Vue {
        @Prop(Array) readonly dataSource: Array<{ text: string; value: string }> | undefined
        @Prop(String) readonly value: string | undefined
        @Prop(String) readonly classPrefix: string | undefined

        // 动态计算每个 item 宽度
        get itemStyle() {
            return {
                width: `${1 / this.dataSource!.length * 100}%`
            }
        }

        select(value: string) {
            this.$emit('update:value', value)
        }
    }

</script>
<style lang="scss" scoped>
    .tabs {
        display: flex;
        flex-direction: row;
        background-color: #c4c4c4;
        font-size: 24px;
    }
    .item {
        height: 64px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        text-align: center;
        &.selected::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #333;
        }
    }
</style>