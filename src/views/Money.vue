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

    import Model from '@/model.ts'


    /**
     * 数据库版本迁移
     * 迁移应该是复用的。比如0.01=>0.03,应该去调用之前已经写好的 0.01=>0.02,0.02=>0.03 的迁移规则
     * @param newVersion
     */
    function translateData(newVersion: string) {
        const oldVersion = Model.fetch('version')
        const oldRecordList: RecordItem [] = Model.fetch('recordList')
        if (oldVersion === '0.01') {
            const newRecordList = oldRecordList.map(record => {
                return {...record, createdAt: new Date(0)}
            })
            Model.save('recordList', newRecordList)
        }
        Model.save('version',newVersion)
    }

    const currentRecordList: RecordItem [] = Model.fetch('recordList')

    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })

    export default class Money extends Vue {
        tags = ['衣', '食', '住', '行']
        record: RecordItem = {
            tags: [],
            type: '+',
            notes: '',
            amount: 0
        }
        recordList: RecordItem [] = currentRecordList

        onUpdateTags(selectedTags: string[]) {
            this.record.tags = selectedTags
        }

        onUpdateNotes(notes: string) {
            this.record.notes = notes
        }

        setNewRecord() {
            this.record.createdAt = new Date();
            const newRecord = Model.cloneRecord(this.record)
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
            Model.save('recordList',this.recordList)
        }
    }


</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
