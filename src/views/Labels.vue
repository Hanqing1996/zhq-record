<template>
    <Layout prefix="labels">
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key=tag.id :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button @click.native="createTag">
                新建标签
            </Button>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Labels extends Vue {
        get tags() {
            return this.$store.state.tagList
        }

        createTag() {
            const name = window.prompt('请输入标签名');
            if (!name) {
                window.alert('标签名不能为空');
            } else {
                this.$store.dispatch('addwithSaveTag', name)
                if (this.$store.state.tagStatusMessage === 'duplicated') {
                    window.alert('标签名重复');
                } else {
                    // 添加成功

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags {
        background: white;
        font-size: 16px;
        padding-left: 16px;
        > .tag {
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #e6e6e6;
            > svg {
                width: 18px;
                height: 18px;
                color: #666;
                margin-right: 16px;
            }
        }
    }
    .createTag-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>