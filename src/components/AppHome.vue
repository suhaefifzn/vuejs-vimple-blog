<script setup>
import { useHead } from '@unhead/vue';

// Components
import ArticleCard from './ArticleCard.vue';

// JSON Assets
import posts from '../assets/posts/home.json';

const { articles: { latest, per_categories } } = posts;
const latestArticle = latest;
const articlesPerCategory = per_categories;

const metaTags = {
    title: 'Nerd Counter',
    meta: [
        { name: 'description', content: 'Find various interesting posts about anime and games only on Nerd Counter.' },
        { name: 'keywords', content: 'Nerd Counter, Anime, Game' },
        { name: 'author', content: 'Inarien' },
        { name: 'rating', content: 'general' },
        { name: 'canonical', content: 'https://www.nerdcounter.com' },
        { property: 'og:title', content: 'Nerd Counter' },
        { property: 'og:url', content: 'https://www.nerdcounter.com' },
        { property: 'og:description', content: 'Find various interesting posts about anime and games only on Nerd Counter.' }
    ]
};

// Register meta tags
useHead(metaTags);
</script>

<template>
    <div class="border-bottom">
        <h1 class="fs-4 fw-bold">Home</h1>
    </div>
    <template v-if="latestArticle">
        <div class="mt-3">
            <h2 class="d-none">Featured Post</h2>
            <div class="card mb-3 min-h-300" aria-hidden="true">
                <div class="row g-0 h-100">
                    <div class="col-md-7 card-img-wrapper">
                        <img :src="latestArticle.img_thumbnail" class="img-fluid rounded-start"
                            :alt="latestArticle.title">
                    </div>
                    <div class="col-md-5 d-flex flex-column">
                        <div class="card-body flex-grow-1">
                            <h3 class="card-title fw-bold">
                                <router-link :to="`/${latestArticle.slug}`" class="text-decoration-none">
                                    {{ latestArticle.title }}
                                </router-link>
                            </h3>
                            <p class="card-text">
                                {{ latestArticle.excerpt }}
                            </p>
                        </div>
                        <div class="card-footer w-100 align-items-center">
                            <span class="text-body-secondary small">
                                By <b>Inarien</b> | <time class="small">{{ latestArticle.created_at.split('T')[0] }}</time>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-wrapper">
            <template v-for="category in articlesPerCategory" :key="category.slug">
                <h2 class="fs-4 fw-bold text-center border-bottom pb-3 mb-4 mt-5">
                    <router-link :to="{ name: category.slug }">{{ category.name }}</router-link>
                </h2>
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <ArticleCard :articles="category.articles" />
                </div>
            </template>
        </div>
    </template>
    <template v-else>
        <div style="min-height: 1000px;">
            <p>Loading...</p>
        </div>
    </template>
</template>

<style scoped>
.min-h-300 {
    min-height: 300px;
}
</style>