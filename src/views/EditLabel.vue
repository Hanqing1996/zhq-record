<template>
    <Layout prefix="labelsEdit">
        <div>编辑标签</div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    import tagListModel from '@/models/tagListModel'

    @Component
    export default class EditLabel extends Vue {
        created(){
            const {id:targetId}=this.$route.params // 路由操作
            tagListModel.fetch()
            const tags=tagListModel.data
            const tag=tags.filter(tag => tag.id === targetId)[0]
            if(tag){
                console.log(tag);
            }else{
                // 这里 push 和 replace 是有区别的，涉及到 hash模式等前端路由知识。用 replace 的话用户可以通过浏览器的后退键回到刚才页面，所以更好
                this.$router.replace('/404') // 路由器操作，'/labels/edit/3000'将跳转到'/404',即 404页面
            }
        }
    }

</script>
<style scoped>

</style>