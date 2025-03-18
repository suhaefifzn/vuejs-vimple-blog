<script setup></script>

<template>
    <header class="position-relative">
        <nav class="navbar bg-purple-3 fixed-top navbar-expand-lg">
            <div class="container">
                <router-link class="navbar-brand fs-4 fw-bold" :to="{ name: 'home' }" title="Nerd Counter">
                    <img src="/favicon/android-chrome-192x192.png" alt="Nerd Counter" width="45">
                </router-link>
                <button class="navbar-toggler my-2 mb-md-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item px-2">
                            <router-link class="nav-link" :to="{ name: 'anime' }">
                                Anime
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link px-2" :to="{ name: 'game' }">
                                Game
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped>
.bg-purple-3 {
    background-color: #563A9C;
}

.nav-item:hover {
    border-radius: 0.5em;
    background-color: #6A42C2;
    transition: all 0.3s ease-in-out;
}

.nav-item:hover a {
    color: #fff;
}
</style>
