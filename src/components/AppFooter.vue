<script setup></script>

<template>
    <footer class="text-center bg-body-tertiary py-5">
        <ul class="navbar navbar-nav d-flex flex-row justify-content-center gap-3 gap-md-4">
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/disclaimer">Disclaimer</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/privacy-policy">Privacy Policy</router-link>
            </li>
        </ul>
        <p><b>Copyright &copy; 2025 Nerd Counter</b>.<br/>All rights reserved</p>
    </footer>
</template>

<style scoped>
.nav-link:hover {
    color: #fff;
}
</style>