<template>
    <nav class="nav">
        <router-link to="/money" class="nav-item" :class="selected" @onclick="">
            <Icon name="money"></Icon>
        </router-link>
        <router-link to="/labels" class="nav-item">
            <Icon name="labels"></Icon>
        </router-link>
        <router-link to="/statistics" class="nav-item">
            <Icon name="statistics"></Icon>
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    }
</script>

<style scoped lang="scss">
    .nav {
        display: flex;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
        flex-direction: row;
        font-size: 12px;
        > .nav-item {
            padding: 2px 0;
            width: 33.33333%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        > .nav-item.selected {
            color: red;
        }
    }
</style>