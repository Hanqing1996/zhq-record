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

    import store from "@/store/index2";

    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';

    @Component({
        components: {Tags, FormItem, Types, NumberPad},
        computed: {}
    })
    export default class Money extends Vue {
        value = ""
        tags = store.tagList
        record: RecordItem = {
            tags: [],
            type: '+',
            notes: '',
            amount: 0
        }
        recordList: RecordItem [] = store.recordList


        onUpdateTags(selectedTags: string[]) {
            this.record.tags = selectedTags
        }

        onUpdateNotes(notes: string) {
            this.record.notes = notes
        }

        setNewRecord() {
            this.record.createdAt = new Date();
            store.addRecord(this.record)

            // 重置
            this.record = {
                tags: [],
                type: '+',
                notes: '',
                amount: 0
            }
        }


        @Watch('tags')
        onTagListChange() {
            const length = this.tags.length
            store.addTag(this.tags[length - 1].name)
        }
    }
</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
