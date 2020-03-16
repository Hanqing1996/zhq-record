<template>
    <Layout>
<!--        <Types class="x" :type.sync="type" :classPrefix="classPrefix"/>-->

        <Tabs class="x" class-prefix="type" :data-source="dataSource2" :value.sync="value2"/>
        <Tabs class-prefix="interval" :data-source="dataSource" :value.sync="value"/>
    </Layout>
</template>


<script lang="ts">

    import Types from '@/components/money/Types.vue'

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue'

    @Component({
        components: {Types,Tabs},
    })

    export default class Statistics extends Vue {
        dataSource=[{text:'日',value:'day'},{text:'周',value:'week'},{text:'月',value:'month'}]
        value='week'

        dataSource2=[{text:'收入',value:'income'},{text:'支出',value:'output'}]
        value2='income'
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