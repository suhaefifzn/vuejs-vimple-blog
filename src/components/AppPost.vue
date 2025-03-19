<script setup>
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';

// JSON Assets
import animePosts from '../assets/posts/anime.json';
import gamePosts from '../assets/posts/game.json';

const posts = [...animePosts.articles, ...gamePosts.articles];
const slug = useRoute().params.slug;
const article = posts.find((post) => post.slug === slug);

const metaTags = {
    title: article.title,
    meta: [
        { name: 'description', content: article.excerpt },
        { name: 'keywords', content: article.title },
        { name: 'author', content: 'Inarien' },
        { name: 'rating', content: 'general' },
        { name: 'canonical', content: `https://www.nerdcounter.com/${article.slug}` },
        { property: 'og:title', content: article.title },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `https://www.nerdcounter.com/${article.slug}` },
        { property: 'og:description', content: article.excerpt },
        { property: 'og:image', content: article.img_thumbnail },
        { property: 'article:published_time', content: article.created_at },
        { property: 'article:modified_time', content: article.updated_at },
        { property: 'article:author', content: 'Inarien' },
        { property: 'article:section', content: article.category.name },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: article.title },
        { name: 'twitter:description', content: article.description },
        { name: 'twitter:image', content: article.image },
        { name: 'twitter:url', content: article.url },
    ]
};

useHead(metaTags);
</script>

<template>
    <div class="container-single-article">
        <template v-if="article">
            <div aria-label="breadcrumb" class="border-bottom breadcrumb-wrapper">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item small">
                        <a href="/" class="text-decoration-none">Home</a>
                    </li>
                    <li class="breadcrumb-item small">
                        <a href="/anime" class="text-decoration-none">Anime</a>
                    </li>
                    <li class="breadcrumb-item small active" aria-current="page">
                        {{ article.title }}
                    </li>
                </ol>
            </div>
            <article class="mt-3">
                <h1>{{ article.title }}</h1>
                <div class="identity-wrapper border-top border-bottom pt-1 pb-2">
                    <span class="small">
                        By <b>Inarien</b> | <time class="small">{{ article.created_at.split('T')[0] }}</time> | In {{ article.category.name }}
                    </span>
                </div>
                <div class="img-wrapper my-3 overflow-hidden rounded-4">
                    <img :src="article.img_thumbnail" alt="" class="img-fluid">
                </div>
                <div v-html="article.body" id="articleBody"></div>
            </article>
        </template>
        <template v-else-if="internalErrorStatus">
            <div style="min-height: 720px;">
                <p>Internal server error.</p>
            </div>
        </template>
        <template v-else-if="article == null && !internalErrorStatus">
            <div style="min-height: 720px;">
                <p>{{ message }}</p>
            </div>
        </template>
        <template v-else>
            <div style="min-height: 720px;">
                <p>Loading...</p>
            </div>
        </template>
    </div>
</template>

<style scoped>
@media (max-width: 1028px) {
    .breadcrumb-wrapper .active {
        width: 210px !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        text-overflow: ellipsis !important;
    }

    .breadcrumb-wrapper .breadcrumb {
        display: -webkit-inline-box !important;
        flex-wrap: nowrap !important;
    }
}
</style>