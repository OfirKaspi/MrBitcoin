<template>
    <section class="filter">
        <input v-debounce:input.500="onSetFilterBy" v-model="filterBy.txt" placeholder="Search" type="text">
    </section>
</template>

<script>
import { debounce } from '@/directives/debounce.js'

export default {
    data() {
        return {
            filterBy: { txt: '' }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    },
    directives: {
        debounce
    }
}
</script>

<style lang="scss">
.filter {
    padding: 10px;
    background-color: lightgray;
    margin-block: 10px;
}
</style>