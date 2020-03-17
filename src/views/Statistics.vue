<template>
    <Layout>
        <!--        <Types class="x" :type.sync="type" :classPrefix="classPrefix"/>-->

        <Tabs class="x" class-prefix="type" :data-source="typeList" :value.sync="intervalValue"/>
        <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="typeValue"/>
        <div>
            <ol>
                <li v-for="(group,index) in groupList" :key="index">
                    <h3 class="title">{{beautify(group.title)}}</h3>
                    <ol>
                        <li v-for="(dataItem,index) in group.items" :key="index" class="record">
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
    import dayjs from 'dayjs'
    import clone from "@/lib/clone";

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


        get groupList() {

            // HashTable['2020-03-17']={title:'2020-03-17',items:[{type:'+',amount:10,createdAt:2020-03-17-TZ},{type:'-',amount:9,createdAt:2020-03-17-TZ}]}
            // HashTable['2020-03-18']={title:'2020-03-18',items:[{type:'-',amount:5,createdAt:2020-03-18-TZ}]}

            /*
            [
                {title:'今天',
                 items:[{type:'+',amount:11,createdAt:2020-03-17-TZ},
                        {type:'-',amount:21,createdAt:2020-03-17-TZ}]
                },
                {title:'昨天',
                    items:[{type:'+',amount:10,createdAt:2020-03-16-TZ},
                           {type:'-',amount:9,createdAt:2020-03-16-TZ},
                           {type:'-',amount:19,createdAt:2020-03-16-TZ}]
                },
                {title:'前天',
                    items:[{type:'+',amount:90,createdAt:2020-03-15-TZ}]
                }
            ]
             */
            const {recordList} = this
            if (recordList.length === 0) return []

            const newList = clone(recordList).sort((a: RecordItem, b: RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf())

            const result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];

            for (let i = 1; i < newList.length; i++) {
                const current = newList[i];
                const last = result[result.length - 1];
                if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
                    last.items.push(current);
                } else {
                    result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
                }
            }
            console.log(result);

            return result
        }

        // 下拉数据
        created() {
            this.$store.dispatch('initializeRecordList')
        }

        tagString(tags: TagList) {
            return tags.join('-')
        }

        beautify(string: string) {
            const day = dayjs(string);
            const now = dayjs();
            if (day.isSame(now, 'day')) {
                return '今天';
            } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
                console.log('hi');
                return '昨天';
            } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
                return '前天';
            } else if (day.isSame(now, 'year')) {
                return day.format('M月D日');
            } else {
                return day.format('YYYY年M月D日');
            }
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