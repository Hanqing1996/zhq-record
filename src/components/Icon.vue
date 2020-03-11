<template>
    <svg class="icon">
        <use :xlink:href="`#${name}`"></use>
    </svg>
</template>

<script lang="ts">

    import '@/helpers/importAllIcons'

    export default {
        name:'Icon',
        props:['name']
    }

</script>


<style lang="scss" scoped>
    .icon{width: 3em;height: 3em;}
</style>