<template>
    <div class="tags">
        {{selectedTags}}
        <ul class="current">
            <li v-for="item in tags" :key=item @click="toggle(item)" :class="{selected:selectedTags.indexOf(item)>=0}">
                {{item}}
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
        selectedTags: string [] = []

        @Prop(Array) tags: string[] | undefined;

        toggle(tag: string) {
            const index = this.selectedTags.indexOf(tag)
            index >= 0 ? this.selectedTags.splice(index, 1) : this.selectedTags.push(tag)
        }

        create() {
            const name = window.prompt('请输入标签名');
            if (!name) {
                window.alert('标签名不能为空');
            } else {
                this.$emit('update:tags', [...(this.tags as string[]), name])
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
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h / 2;
                padding: 0 16px;
                margin-right: 12px;
                margin-top: 4px;
                &.selected {
                    background-color: darken(red, 0.5);
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