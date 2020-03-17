<template>
    <Layout>
        <!--        <Types class="x" :type.sync="type" :classPrefix="classPrefix"/>-->

        <Tabs class="x" class-prefix="type" :data-source="typeList" :value.sync="intervalValue"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="typeValue"/>
        <div>
            <ol>
                <li v-for="(group,index) in result" :key="index">
                    <h3 class="title">{{group.title}}</h3>
                    <ol>
                        <li v-for="dataItem in group.items" :key="dataItem.createdAt" class="record">
                            <span>{{tagString(dataItem.tags)}}</span>
                            <span style="margin-right: auto;margin-left: 8px;color:#999">{{dataItem.notes}}</span>
                            <span>{{dataItem.amount}}</span>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </Layout>
</template>


<script lang="ts">

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue'
    import intervalList from "@/constants/interval";
    import typeList from "@/constants/type";

    type HashTable = {
        [key: string]: { title: string; items: RecordList };
    }

    @Component({
        components: {Tabs},
    })



    export default class Statistics extends Vue {
        get recordList() {
            return this.$store.state.recordList
        }

        get result() {

            // HashTable['2020-03-17']={title:'2020-03-17',items:[{type:'+',amount:10,createdAt:2020-03-17-TZ},{type:'-',amount:9,createdAt:2020-03-17-TZ}]}
            // HashTable['2020-03-18']={title:'2020-03-18',items:[{type:'-',amount:5,createdAt:2020-03-18-TZ}]}


            const {recordList} = this
            const hashTable: HashTable = {}

            for (let i = 0; i < recordList.length; i++) {
                const [date, time] = recordList[i].createdAt!.split('T')
                hashTable[date] = hashTable[date] || {title: date, items: []}
                hashTable[date].items.push(recordList[i])

            }
            return hashTable

        }

        // 下拉数据
        created() {
            this.$store.dispatch('initializeRecordList')
        }

        tagString(tags: TagList) {
            return tags.join('-')
        }


        typeList = typeList
        intervalList = intervalList

        typeValue = 'week'
        intervalValue = 'income'
    }
</script>

<style lang="scss" scoped>
    ::v-deep {
        .type-item {
            background-color: white;
            &::after {
                display: none;
            }
            &.selected {
                background-color: #c4c4c4;
            }
        }
        .interval-item {
            height: 48px;
        }
    }
    %item {
        padding: 8px 16px;
        line-height: 24px;
        display: flex;
        justify-content: space-between;
        align-content: center;
    }
    .title {
        @extend %item;
    }
    .record {
        background: white;
        @extend %item;
    }
</style>