<script setup>
import { ref, onMounted, computed, onBeforeMount } from 'vue';
import { ArticleService } from '../services/articleService';
import { useHead } from '@unhead/vue';

// Components
import ArticleCard from './ArticleCard.vue';

const articleService = new ArticleService();
const response = ref(null);
const listArticles = ref([]);
const errorMessage = ref('');
const pageNumber = ref(1);
const hasNextPage = ref(true);
const isLoading = ref(false);
const internalErrorStatus = ref(false);

const metaTags = computed(() => {
    if (internalErrorStatus.value) {
        return {
            title: 'Internal server error',
            meta: [
                { name: 'description', content: 'Internal server error' },
                { name: 'robots', content: 'noindex, nofollow' }
            ]
        };
    } else if (listArticles.value.length === 0 && !internalErrorStatus.value) {
        return {
            title: 'Loading...',
            meta: [
                { name: 'description', content: 'Article not found' },
                { name: 'robots', content: 'noindex, nofollow' }
            ]
        };
    }

    return {
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
});

// Register meta tags
useHead(metaTags);

const fetchArticles = async () => {
    if (isLoading.value) return;
    isLoading.value = true;

    try {
        response.value = await articleService.getArticlesByCategory('anime', pageNumber.value);
        const { data: { articles, meta } } = response.value;
        listArticles.value = [...listArticles.value, ...articles];
        pageNumber.value = meta.current_page + 1;
        hasNextPage.value = meta.next_page_url !== null;
    } catch (error) {
        console.error('Error:', error);
        errorMessage.value = 'Articles not found.';
    } finally {
        isLoading.value = false;
    }
};

const handleScroll = () => {
    if (!hasNextPage.value) return;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && pageNumber.value) {
        fetchArticles();
    }
};

onBeforeMount(async () => {
    await fetchArticles();
});

onMounted(async () => {
    window.addEventListener('scroll', handleScroll);
});

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
                <p class="text-center">Articles not found.</p>
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