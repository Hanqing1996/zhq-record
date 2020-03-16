<template>
    <Layout>
<!--        <Types class="x" :type.sync="type" :classPrefix="classPrefix"/>-->

        <Tabs class="x" class-prefix="type" :data-source="typeList" :value.sync="intervalValue"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="intervalValue"/>
    </Layout>
</template>


<script lang="ts">

    import Types from '@/components/money/Types.vue'

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue'
    import intervalList from "@/constants/interval";
    import typeList from "@/constants/type";

    @Component({
        components: {Types,Tabs},
    })

    export default class Statistics extends Vue {
        typeList=typeList
        intervalList=intervalList

        typeValue='week'
        intervalValue='income'
    }
</script>

<style lang="scss" scoped>
    .x ::v-deep .type-item{
        background-color: white;
        &::after{
            display: none;
        }
        &.selected {
            background-color: #c4c4c4;
        }
    }
</style>