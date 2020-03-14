<template>
    <Layout prefix="labelsEdit">
        <div class="navBar">
            <Icon name="left"></Icon>
            <span class="title">编辑标签</span>
        </div>
        <FormItem field-name="标签名" placeholder="请在这里输入标签名"/>
        <div class="deleteTag-wrapper">
            <button class="deleteTag">删除标签</button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component, Prop} from "vue-property-decorator";

    import tagListModel from '@/models/tagListModel'
    import FormItem from '@/components/money/FormItem .vue'

    @Component({components: {FormItem}})
    export default class EditLabel extends Vue {
        created() {
            const {id: targetId} = this.$route.params // 路由操作
            tagListModel.fetch()
            const tags = tagListModel.data
            const tag = tags.filter(tag => tag.id === targetId)[0]
            if (tag) {
                console.log(tag);
            } else {
                // 这里 push 和 replace 是有区别的，涉及到 hash模式等前端路由知识。用 replace 的话用户可以通过浏览器的后退键回到刚才页面，所以更好
                this.$router.replace('/404') // 路由器操作，'/labels/edit/3000'将跳转到'/404',即 404页面
            }
        }
    }

</script>
<style lang="scss" scoped>
    .navBar {
        font-size: 16px;
        padding: 12px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > .title {
            padding-right: 50px;
        }
        > svg {
            width: 24px;
            height: 24px;
        }
    }
    .button-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
    .deleteTag {
        background: #767676;
        color: white;
        border-radius: 4px;
        border: none;
        height: 40px;
        padding: 0 16px;
        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-16px;
        }
    }

</style>