<script setup>
import { onMounted } from 'vue';
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutNav from './components/LayoutNav.vue';

import {useCategoryStore} from '@/stores/categoryStore'

const categoryStore=useCategoryStore()
onMounted(()=>{categoryStore.getCategory()})

</script>

<template>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>
    <RouterView></RouterView>
    <LayoutFooter></LayoutFooter>
</template>