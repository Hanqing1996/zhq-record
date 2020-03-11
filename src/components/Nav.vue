<template>
    <div class="nav">
        <router-link to="/money">
            <Icon name="money"></Icon>
        </router-link>
        |
        <router-link to="/labels">
            <Icon name="labels"></Icon>
        </router-link>
        |
        <router-link to="/statistics">
            <Icon name="statistics"></Icon>
        </router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    }
</script>

<style scoped>
    .nav {

    }
</style>