<template>
    <div class="tags">
        <ul class="current">
            <li v-for="item in tags" :key=item.id @click="toggle(item.name)" :class="{selected:selectedTags.indexOf(item)>=0}">
                {{item.name}}
            </li>
        </ul>
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {
        selectedTags: TagList = []

        // readonly 会禁止我们修改作为 prop 的 tags
        @Prop(Array) readonly tags: TagList | undefined;

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            index >= 0 ? this.selectedTags.splice(index, 1) : this.selectedTags.push(tag)
            this.$emit('update:value', this.selectedTags)
        }

        create() {
            const name = window.prompt('请输入标签名');
            if (!name) {
                window.alert('标签名不能为空');
            } else {
                this.$emit('update:tags', [...(this.tags as TagList), {id:name,name}])
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*tags*/
    .tags {
        font-size: 14px;
        padding: 8px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        flex-wrap: wrap;
        > .current {
            display: flex;
            flex-wrap: wrap;
            max-height: 12vh;
            overflow: auto;
            > li {
                $bg:#d9d9d9;
                background: $bg;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h / 2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
                &.selected {
                    background: darken($bg, 50%);
                    color: white;
                }
            }
        }
        > .new {
            padding-top: 16px;
            button {
                background: transparent;
                border: none;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px;
            }
        }
    }

</style>