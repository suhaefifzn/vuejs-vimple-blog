<script setup>
import { useHead } from '@unhead/vue';

// Components
import ArticleCard from './ArticleCard.vue';

// JSON Assets
import posts from './assets/posts/anime.json';

const { articles } = posts;
const listArticles = articles;
const metaTags = {
    title: 'Anime Posts',
    meta: [
        { name: 'description', content: 'Find various interesting posts about anime on Nerd Counter.' },
        { name: 'keywords', content: 'Anime, Anime Posts, Nerd Counter' },
        { name: 'author', content: 'Inarien' },
        { name: 'rating', content: 'general' },
        { name: 'canonical', content: 'https://www.nerdcounter.com/anime' },
        { property: 'og:title', content: 'Anime Posts' },
        { property: 'og:url', content: 'https://www.nerdcounter.com/anime' },
        { property: 'og:description', content: 'Find various interesting posts about anime on Nerd Counter.' }
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
                Anime
            </li>
        </ol>
    </div>
    <h2 class="fs-4 fw-bold text-center border-bottom pb-3 mb-4 mt-5">
        Anime Posts
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