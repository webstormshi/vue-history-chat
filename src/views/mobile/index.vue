<template>
    <div>
        <router-view></router-view>
        <v-tabs :user="$route.params" />
    </div>
</template>

<script>
import Tabs from '@/components/tabs.vue';
export default {
    name: 'Index',
    components: {
        'v-tabs': Tabs
    }
}
</script>

<style>

</style>
