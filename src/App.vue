<template>
    <router-view/>
</template>
<script lang="ts">
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import "~@/assets/style/reset.scss";
    @import "~@/assets/style/font.scss";
    @import "~@/assets/style/var.scss";
    body{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #333;
        font-family: $font-hei;
        font-size: 16px;
        line-height: 1.5;
    }

</style>
