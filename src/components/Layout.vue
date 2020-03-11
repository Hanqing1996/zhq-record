<template>
    <div class="wrapper">
        <div class="content">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script>
    export default {
        name: "Layout"
    }
</script>

<style scoped>
    .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        border: 1px solid black;
    }

    .content {
        border: 1px solid red;
        overflow: auto;
        flex-grow: 1;
    }
</style>