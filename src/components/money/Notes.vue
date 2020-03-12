<template>
    <label class="notes">
        <span class="name">备注</span>
        <input type="text" placeholder="在这里输入备注">
    </label>
</template>

<script>
    export default {
        name: "Notes"
    }
</script>

<style lang="scss" scoped>

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
</style>