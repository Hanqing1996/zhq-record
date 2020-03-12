<template>
    <ul class="types">
        <li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
        <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Types extends Vue{
        type='-';

        selectType(type: '+'|'-'){
            this.type=type
        }
    }

</script>

<style lang="scss" scoped>
    /*types*/
    .types{
        display: flex;
        flex-direction: row;
        background-color: #c4c4c4;
        font-size: 24px;
        > li{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            text-align: center;
            &.selected::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }

</style>