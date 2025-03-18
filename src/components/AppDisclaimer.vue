<script setup>
import { useHead } from '@unhead/vue';

useHead({
    title: 'Disclaimer',
    meta: [
        {
            name: 'description',
            content: 'All information available on this site is published in good faith and for general informational purposes only.'
        },
        {
            name: 'author',
            content: 'Inarien'
        },
        {
            name: 'canonical',
            content: 'https://www.nerdcounter.com/disclaimer'
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
                    Disclaimer
                </li>
            </ol>
        </div>
        <article class="mt-3">
            <h1>Disclaimer</h1>
            <h2>
                Disclaimer for nerdcounter.com
            </h2>
            <p>
                All information available on this site is published in good faith and for general informational purposes
                only. nerdcounter.com makes no guarantees regarding the completeness, reliability, or accuracy of this
                information.
            </p>
            <p>
                Any actions you take based on the information found on this site (nerdcounter.com) are entirely at your
                own risk. nerdcounter.com is not responsible for any losses and/or damages related to the use of our
                site.
            </p>
            <p>
                Through our site, you may visit other websites by following links to external sites. We have no control
                over the content and nature of these websites.
            </p>
            <h2>
                Consent
            </h2>
            <p>
                By using our site, you hereby agree to our disclaimer and accept its terms.
            </p>
            <h2>
                Updates
            </h2>
            <p>
                This disclaimer was last updated on: March 18, 2025.
            </p>
        </article>
    </div>
</template>

<style scoped>
.container-single-article {
    min-height: 630px;
}
</style>