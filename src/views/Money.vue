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

    
    type Record={
        tags: string[];
        type: '+'|'-';
        notes: string;
        amount: number;
        createdAt?: Date;
    }

    const recordList: Record []=JSON.parse(window.localStorage.getItem('recordList') || '[]');

    @Component({
        components: {Tags, Notes, Types, NumberPad}
    })
    
    export default class Money extends Vue {
        tags=['衣','食','住','行']
        record: Record={
            tags:[],
            type:'+',
            notes:'',
            amount:0
        }
        recordList: Record []=recordList

        onUpdateTags(selectedTags: string[]){
            this.record.tags=selectedTags
        }
        onUpdateNotes(notes: string){
            this.record.notes=notes
        }

        setNewRecord() {
            this.record.createdAt= new Date();
            const newRecord=JSON.parse(JSON.stringify(this.record))
            this.recordList.push(newRecord)
            // 重置
            this.record={
                tags:[],
                type:'+',
                notes:'',
                amount:0
            }
        }

        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
        }
    }


</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
