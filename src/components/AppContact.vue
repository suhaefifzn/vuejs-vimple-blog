<script setup>
import { useHead } from '@unhead/vue';

useHead({
    title: 'Contact',
    meta: [
        {
            name: 'description',
            content: 'If you have any questions, constructive suggestions and feedback, or important matters to discuss, please send a message to the email.'
        },
        {
            name: 'author',
            content: 'Inarien'
        },
        {
            name: 'canonical',
            content: 'https://www.nerdcounter.com/contact'
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
                    Contact
                </li>
            </ol>
        </div>
        <article class="mt-3">
            <h1>Contact</h1>
            <p>
                If you have any questions, constructive suggestions and feedback, or important matters to discuss, please send a message to the email address below:
            </p>
            <p>
                📧 Email: kodefiksi[at]gmail[dot]com
            </p>
            <p>
                Thank you.
            </p>
        </article>
    </div>
</template>

<style scoped>
.container-single-article {
    min-height: 630px;
}
</style>