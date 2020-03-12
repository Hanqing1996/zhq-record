<template>
    <Layout prefix="money">
        <Tags :tags.sync="tags"/>
        <Notes/>
        <Types/>
        <NumberPad/>
    </Layout>
</template>
<script>
    import Tags from '@/components/money/Tags.vue'
    import Notes from '@/components/money/Notes.vue'
    import Types from '@/components/money/Types.vue'
    import NumberPad from '@/components/money/NumberPad.vue'

    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component({
        components: {
            Tags,
            Notes,
            Types,
            NumberPad
        }
    })
    export default class Money extends Vue {
        tags=['衣','食','住','行']
    }


</script>

<style lang="scss">
    .money-content {
        display: flex;
        flex-direction: column;
    }
</style>
