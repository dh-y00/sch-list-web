<template>
    <ListSearch :searchTerms="searchTerms"/>
    12123123
</template>
<script>
import ListSearch from '@/components/list/ListSearch.vue';
export default {
    components: {
        ListSearch
    },
    data() {
        return {
            searchTerms: [
                {

                }
            ]
        }
    }
}
</script>

<style lang="css">
</style>