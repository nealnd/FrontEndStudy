<template>
    <header id="head_top">
    <slot name="left"></slot>
    <slot name="mid"></slot>
    <slot name="right"></slot>
    </header>
</template>

<script setup>

</script>

<style scoped>
#head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;

}
</style>