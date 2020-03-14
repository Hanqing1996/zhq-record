<template>
    <Layout prefix="money">
        <Tags :tags.sync="tags" @update:value="onUpdateTags($event)"/>
        <FormItem field-name="备注" placeholder="请在这里输入备注" :value.sync="value" @update:value="onUpdateNotes($event)"/>
        <Types :type.sync="record.type"/>
        <NumberPad :value.sync="record.amount" @submit="setNewRecord"/>
    </Layout>
</template>
<script lang="ts">

    import Tags from '@/components/money/Tags.vue'
    import FormItem from '@/components/money/FormItem .vue'
    import Types from '@/components/money/Types.vue'
    import NumberPad from '@/components/money/NumberPad.vue'

    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';

    import versionModel from '@/models/versionModel'
    import moneyModel from '@/models/moneyModel'
    import tagListModel from '@/models/tagListModel'

    /**
     * 数据库版本迁移
     * 迁移应该是复用的。比如0.01=>0.03,应该去调用之前已经写好的 0.01=>0.02,0.02=>0.03 的迁移规则
     * @param newVersion
     */
    function translateData(newVersion: string) {

        const oldVersion = versionModel.fetch()
        const oldRecordList: RecordItem [] = moneyModel.fetch()
        if (oldVersion === '0.01') {
            const newRecordList = oldRecordList.map(record => {
                return {...record, createdAt: new Date(0)}
            })
            moneyModel.save( newRecordList)
        }
        versionModel.save(newVersion)
    }

    const currentRecordList: RecordItem [] = moneyModel.fetch()

    @Component({
        components: {Tags, FormItem, Types, NumberPad}
    })

    export default class Money extends Vue {
        value=""
        tags = tagListModel.fetch()
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
            const newRecord = moneyModel.cloneRecord(this.record)
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
            moneyModel.save(this.recordList)
        }

        @Watch('tags')
        onTagListChange(){
            const length=this.tags.length
            tagListModel.add(this.tags[length-1].name)
        }

    }


</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
