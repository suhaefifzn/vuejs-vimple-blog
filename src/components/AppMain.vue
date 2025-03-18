<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
    <RouterView name="navbar"/>
    <RouterView v-slot="{ Component }">
        <div class="container my-5 pt-5">
            <component :is="Component"/>
        </div>
    </RouterView>
    <RouterView name="footer"/>
</template>

<style scoped></style>