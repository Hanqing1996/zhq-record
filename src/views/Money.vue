<template>
    <Layout prefix="money">
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
                <li>行</li>                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>                <li>衣</li>
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
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="在这里输入备注">
        </label>
        <ul class="types">
            <li class="selected">收入</li>
            <li>支出</li>
        </ul>
        <div class="number-pad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">OK</button>
                <button class="zero">0</button>
                <button>.</button>
            </div>
        </div>
    </Layout>
</template>

<script>
    export default {
        name: "Money"
    }
</script>

<style lang="scss">
    .money-content{
        display: flex;
        flex-direction: column;
    }
</style>

<style lang="scss" scoped>

    @import "~@/assets/style/var.scss";

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
            max-height: 90px;
            overflow: auto;
            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
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


    /*notes*/
    .notes {
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name {
            padding-right: 16px;
        }
        input {
            height: 64px;
            background: transparent;
            border: none;
            padding-right: 16px;
        }
    }

    /*types*/
    .types{
        display: flex;
        flex-direction: row;
        background-color: #c4c4c4;
        font-size: 24px;
        > li{
            width: 50%;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            text-align: center;
            &.selected::after{
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 4px;
                background: #333;
            }
        }
    }


    /*number-pad*/
    .number-pad{
        >.output{
            font-size: 36px;
            font-family: Consolas;
            padding: 9px 0;
            text-align: right;
            @extend %innerShadow;
        }
        >.buttons{
            @extend %clearFix;
            > button{
                width: 25%;
                height: 64px;
                float: left;
                border: none;
                background: transparent;
                &.ok{
                    height: 128px;
                    float: right;
                }
                &.zero{
                    width:50%;
                }
                $bg: #f2f2f2;
                &:nth-child(1) {
                    background: $bg;
                }
                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }
                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }
                &:nth-child(4), &:nth-child(7), &:nth-child(10) {
                    background: darken($bg, 4*3%);
                }
                &:nth-child(8), &:nth-child(11), &:nth-child(13) {
                    background: darken($bg, 4*4%);
                }
                &:nth-child(14) {
                    background: darken($bg, 4*5%);
                }
                &:nth-child(12) {
                    background: darken($bg, 4*6%);
                }
            }
        }
    }
</style>