<template>
    <Layout prefix="money">
        <Tags :tags="tags" @update:value="onUpdateTags($event)"/>
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
    import {Component} from 'vue-property-decorator';

    @Component({
        components: {Tags, FormItem, Types, NumberPad},
    })
    export default class Money extends Vue {
        value = ""
        record: RecordItem = {
            tags: [],
            type: '+',
            notes: '',
            amount: 0
        }

        get tags(){

            return this.$store.state.tagList
        }

        created(){
            this.$store.dispatch('initializeTagList')
        }

        onUpdateTags(selectedTags: string[]) {
            this.record.tags = selectedTags
        }

        onUpdateNotes(notes: string) {
            this.record.notes = notes
        }

        setNewRecord() {
            this.record.createdAt = new Date().toISOString();
            this.$store.dispatch('addwithSaveRecord',this.record)

            // 重置
            this.record = {
                tags: [],
                type: '+',
                notes: '',
                amount: 0
            }
        }
    }
</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
