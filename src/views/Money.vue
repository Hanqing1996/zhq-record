<template>
    <Layout prefix="money">
        <Tags/>
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

    export default {
        name: "Money",
        components:{Tags,Notes,Types,NumberPad}
    }
</script>

<style lang="scss">
    .money-content{
        display: flex;
        flex-direction: column;
    }
</style>
