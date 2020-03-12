<template>
    <Layout prefix="money">
        <Tags :tags.sync="tags" @update:value="onUpdateTags($event)"/>
        <Notes @update:notes="onUpdateNotes($event)"/>
        <Types :type.sync="record.type"/>
        <NumberPad :value.sync="record.amount" @submit="setNewRecord"/>
    </Layout>
</template>
<script lang="ts">

    import Tags from '@/components/money/Tags.vue'
    import Notes from '@/components/money/Notes.vue'
    import Types from '@/components/money/Types.vue'
    import NumberPad from '@/components/money/NumberPad.vue'

    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';


    type Record = {
        tags: string[];
        type: '+' | '-';
        notes: string;
        amount: number;
        createdAt?: Date;
    }


    /**
     * 数据库版本迁移
     * 迁移应该是复用的。比如0.01=>0.03,应该去调用之前已经写好的 0.01=>0.02,0.02=>0.03 的迁移规则
     * @param newVersion
     */
    function translateData(newVersion: string) {
        const oldVersion = window.localStorage.getItem('version')
        const oldRecordList: Record [] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        if(oldVersion==='0.01'){
            const newRecordList=oldRecordList.map(record=>{
                return {...record,createdAt:new Date(0)}
            })
            window.localStorage.setItem('recordList', JSON.stringify(newRecordList))
        }
        window.localStorage.setItem('version',newVersion)
    }

    const currentRecordList: Record [] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })

    export default class Money extends Vue {
        tags = ['衣', '食', '住', '行']
        record: Record = {
            tags: [],
            type: '+',
            notes: '',
            amount: 0
        }
        recordList: Record [] = currentRecordList

        onUpdateTags(selectedTags: string[]) {
            this.record.tags = selectedTags
        }

        onUpdateNotes(notes: string) {
            this.record.notes = notes
        }

        setNewRecord() {
            this.record.createdAt= new Date();
            const newRecord = JSON.parse(JSON.stringify(this.record))
            this.recordList.push(newRecord)
            // 重置
            this.record = {
                tags: [],
                type: '+',
                notes: '',
                amount: 0
            }
        }

        @Watch('recordList')
        onRecordListChange() {
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
        }
    }


</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
