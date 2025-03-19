<script setup>
import { useHead } from '@unhead/vue';

// Components
import ArticleCard from './ArticleCard.vue';

// JSON Assets
import posts from '../../public/assets/posts/game.json';

const { articles } = posts;
const listArticles = articles;

const metaTags = {
    title: 'Game Posts',
    meta: [
        { name: 'description', content: 'Find various interesting posts about game on Nerd Counter.' },
        { name: 'keywords', content: 'Game, Game Posts, Nerd Counter' },
        { name: 'author', content: 'Inarien' },
        { name: 'rating', content: 'general' },
        { name: 'canonical', content: 'https://www.nerdcounter.com/game' },
        { property: 'og:title', content: 'Game Posts' },
        { property: 'og:url', content: 'https://www.nerdcounter.com/game' },
        { property: 'og:description', content: 'Find various interesting posts about game on Nerd Counter.' }
    ]
};

// Register meta tags
useHead(metaTags);
</script>

<template>
    <div aria-label="breadcrumb" class="border-bottom">
        <ol class="breadcrumb">
            <li class="breadcrumb-item small">
                <a href="/" class="text-decoration-none">Home</a>
            </li>
            <li class="breadcrumb-item small active" aria-current="page">
                Game
            </li>
        </ol>
    </div>
    <h2 class="fs-4 fw-bold text-center border-bottom pb-3 mb-4 mt-5">
        Game Posts
    </h2>
    <template v-if="listArticles">
        <template v-if="listArticles.length > 0">
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <ArticleCard :articles="listArticles"/>
            </div>
        </template>
        <template v-else>
            <div style="min-height: 720px;">
                <p>{{ message }}</p>
            </div>
        </template>
    </template>
    <template v-else>
        <div style="min-height: 720px;">
            Loading...
        </div>
    </template>
</template>

<style scoped></style>