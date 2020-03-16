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

    // import store from "@/store/index2";

    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import store from '@/store';
    import store2 from "@/store/index2";

    @Component({
        components: {Tags, FormItem, Types, NumberPad},
        computed: {
            recordList(){
                return store.state.recordList
            }
        }
    })
    export default class Money extends Vue {
        value = ""
        tags = store2.tagList
        record: RecordItem = {
            tags: [],
            type: '+',
            notes: '',
            amount: 0
        }

        created(){
            store.dispatch('initializeRecordList')
        }


        onUpdateTags(selectedTags: string[]) {
            this.record.tags = selectedTags
        }

        onUpdateNotes(notes: string) {
            this.record.notes = notes
        }

        setNewRecord() {
            this.record.createdAt = new Date();
            store.dispatch('addwithSaveRecord',this.record)

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
            store2.addTag(this.tags[length - 1].name)
        }
    }
</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
