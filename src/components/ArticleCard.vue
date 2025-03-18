<script setup>
const { articles } = defineProps(['articles']);
</script>

<template>
    <template v-for="article in articles" :key="article.slug">
        <div class="col">
            <div class="card">
                <div class="card-img-wrapper">
                    <img :src="article.img_thumbnail" class="card-img-top" :alt="`Thumbnail of ${article.title}`">
                </div>
                <div class="card-body">
                    <h2 class="card-title fs-4 fw-bold">
                        <router-link :to="`/${article.slug}`">
                            {{ article.title }}
                        </router-link>
                    </h2>
                    <p class="card-text text-elipsis">
                        {{ article.excerpt }}
                    </p>
                </div>
                <div class="card-footer">
                    <span class="text-body-secondary small">
                        By <b>Inarien</b> | <time class="small">{{ article.created_at.split('T')[0] }}</time>
                    </span>
                </div>
            </div>
        </div>
    </template>
</template>

<style scoped></style>