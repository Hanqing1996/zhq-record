<template>
    <div class="tags">
        <ul class="current">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {

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