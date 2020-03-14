<template>
    <label class="notes">
        <span class="name">{{fieldName}}</span>
        <input type="text" :placeholder="placeholder" v-model="value">
    </label>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
    value = '';
    @Prop({required:true}) fieldName!: string
    @Prop() placeholder!: string|undefined

    @Watch('value')
    onValueChanged(value: string){
       this.$emit('update:notes',value)
    }
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