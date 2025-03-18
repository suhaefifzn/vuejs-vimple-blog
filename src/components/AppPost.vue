<script setup>
import { ref, onBeforeMount, watch, nextTick, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useHead } from '@unhead/vue';
import { ArticleService } from '../services/articleService';

const articleService = new ArticleService();
const route = useRoute();
const article = ref(null);
const internalErrorStatus = ref(false);
const message = ref('Loading...');

onBeforeMount(async () => {
    try {
        const response = await articleService.getArticleBySlug(route.params.slug);

        if (response.statusCode == 404) {
            article.value = null;
            message.value = 'Article not found.';
        }

        const { data } = response;
        article.value = data;
    } catch (error) {
        console.error('Error:', error);
        internalErrorStatus.value = true;
    }
});

const metaTags = computed(() => {
    if (internalErrorStatus.value) {
        return {
            title: 'Internal server error',
            meta: [
                { name: 'description', content: 'Internal server error' }
            ]
        };
    } else if (!article.value && !internalErrorStatus.value) {
        return {
            title: 'Loading...',
            meta: [
                { name: 'description', content: 'Article not found' }
            ]
        };
    }

    return {
        title: article.value.title,
        meta: [
            { name: 'description', content: article.value.excerpt },
            { name: 'keywords', content: article.value.title },
            { name: 'author', content: 'Inarien' },
            { name: 'rating', content: 'general' },
            { name: 'canonical', content: `https://www.nerdcounter.com/${article.value.slug}` },
            { property: 'og:title', content: article.value.title },
            { property: 'og:type', content: 'article' },
            { property: 'og:url', content: `https://www.nerdcounter.com/${article.value.slug}` },
            { property: 'og:description', content: article.value.excerpt },
            { property: 'og:image', content: article.value.img_thumbnail },
            { property: 'article:published_time', content: article.value.created_at },
            { property: 'article:modified_time', content: article.value.updated_at },
            { property: 'article:author', content: 'Inarien' },
            { property: 'article:section', content: article.value.category.name },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: article.value.title },
            { name: 'twitter:description', content: article.value.description },
            { name: 'twitter:image', content: article.value.image },
            { name: 'twitter:url', content: article.value.url },
        ]
    };
});

useHead(metaTags);

// Fungsi untuk menambahkan class 'img-fluid' setelah artikel dimuat
const addImgFluidClass = async () => {
    await nextTick(); // Pastikan DOM sudah diupdate setelah perubahan reaktif
    const figureElements = document.querySelectorAll('figure');

    figureElements.forEach(figure => {
        figure.classList.add('my-4')
        figure.querySelectorAll('img').forEach(img => {
            img.classList.add('img-fluid');
            img.classList.add('rounded-4');
        });
    });
};

// Watch perubahan article dan jalankan fungsi saat berubah
watch(article, async (newVal) => {
    if (newVal) {
        addImgFluidClass();
    }
});
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