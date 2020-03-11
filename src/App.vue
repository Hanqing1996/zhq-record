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
        font-family: $font-hei;
        line-height: 1.5em;
    }

</style>
