<template>
    <Layout prefix="labelsEdit">
        <div class="navBar">
            <router-link to="/labels">
                <Icon name="left" class="left-icon"/>
            </router-link>
            <span class="title">编辑标签</span>
            <Icon class="right-icon"/>
        </div>
        <FormItem class="edit" field-name="标签名" placeholder="请在这里输入标签名" :value="tag.name"
                  @update:value="updateTagName(($event))"/>
        <div class="deleteTag-wrapper">
            <Button @click.native="removeTag">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from "vue-property-decorator";


    import FormItem from '@/components/money/FormItem .vue'

    @Component({components: {FormItem}})
    export default class EditLabel extends Vue {
        tag?: Tag = undefined

        created() {
            const targetId = Number(this.$route.params.id) // 路由操作
            this.$store.commit('findTag', targetId)

            if (this.$store.state.findedTag.id) {
                this.tag = this.$store.state.findedTag
            } else {
                this.$router.replace('/404')
            }
            // 这里 push 和 replace 是有区别的，涉及到 hash模式等前端路由知识。用 replace 的话用户可以通过浏览器的后退键回到刚才页面，所以更好
            // 路由器操作，'/labels/edit/3000'将跳转到'/404',即 404页面
        }

        updateTagName(newName: string) {
            this.tag && this.$store.dispatch('updatewithSaveTag', {id: this.tag.id, name: newName})
        }

        removeTag() {
            this.tag&&this.$store.dispatch('removewithSaveTag', this.tag.id)
            if (this.$store.state.tagStatusMessage=== 'success') {
                this.$router.replace('/labels')
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
    }
    a {
        > .left-icon {
            width: 24px;
            height: 24px;
        }
    }
    .right-icon {
        width: 24px;
        height: 24px;
    }
    .edit {
        background: white;
        margin-top: 8px;
    }
    .button-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
    .deleteTag-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>