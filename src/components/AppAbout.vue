<script setup>
import { useHead } from '@unhead/vue';

useHead({
    title: 'About',
    meta: [
        {
            name: 'description',
            content: 'Nerd Counter is a website that contains various discussions related to anime and games—whether important or not. The main goal is simply to have fun.'
        },
        {
            name: 'author',
            content: 'Inarien'
        },
        {
            name: 'canonical',
            content: 'https://www.nerdcounter.com/about'
        }
    ]
});
</script>

<template>
    <div class="container-single-article">
        <div aria-label="breadcrumb" class="border-bottom breadcrumb-wrapper">
            <ol class="breadcrumb">
                <li class="breadcrumb-item small">
                    <a href="/" class="text-decoration-none">Home</a>
                </li>
                <li class="breadcrumb-item small active" aria-current="page">
                    About
                </li>
            </ol>
        </div>
        <article class="mt-3">
            <h1>About</h1>
            <p>
                <b>Nerd Counter</b> is a website that contains various discussions related to anime and games—whether important or not. The main goal is simply to have fun.
            </p>
            <p>
                To be honest, this website was created while learning and experimenting with Vue.js. So, please understand if you come across certain parts that are not quite right or might not work at all.
            </p>
            <p>
                This site fetches data from an API provided by my main website, kodefiksi[dot]com. So, besides learning Vue.js programming and multi-language API responses, I decided to use this space to share my thoughts on anime and games.
            </p>
            <p>
                There’s no special meaning behind the name Nerd Counter. I got the domain nerdcounter.com after finding it on an expired domain site. Initially, I wanted to take this more seriously, but since I haven’t found the right rhythm, it ended up a bit messy. And now, this is what Nerd Counter has become.
            </p>
        </article>
    </div>
</template>

<style scoped>
.container-single-article {
    min-height: 630px;
}
</style>