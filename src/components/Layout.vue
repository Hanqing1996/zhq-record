<template>
    <div class="wrapper" :class="prefix&&`${prefix}-wrapper`">
        <div class="content" :class="prefix&&`${prefix}-content`">
            <slot></slot>
        </div>
        <Nav/>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        props:['prefix']
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
        overflow: auto;
        flex-grow: 1;
    }
</style>