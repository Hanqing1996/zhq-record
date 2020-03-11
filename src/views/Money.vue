<template>
    <Layout>
        <div class="tags">
            <ul class="current-tages">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <div class="new-tages"></div>
        </div>
        <div>
            <label>
                <span class="notes">备注</span>
                <input type="text">
            </label>
        </div>
        <div >
            <ul class="types">
                <li>收入</li>
                <li>支出</li>
            </ul>
        </div>
        <div class="number-pad">
            <div class="output">100</div>
            <div class="buttons">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>删除</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>清空</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>OK</button>
                <button>0</button>
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

<style lang="scss" scoped>
</style>