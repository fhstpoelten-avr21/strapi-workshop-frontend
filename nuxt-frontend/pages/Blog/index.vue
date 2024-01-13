<template>
  <main>
    <header class="px-4 mb-12">
      <div class="wrapper mt-28 m-auto max-w-6xl">
        <h1 class="hero-text">Our Blog</h1>
        <template v-if="articles.length > 0">
          <p>Front-end & back-end expertise from development to delivery</p>
        </template>
      </div>
    </header>
    <ul class="m-auto px-4 max-w-5xl grid gap-8 mb-12">
      <template v-if="articles.length > 0">
        <article-card
          v-for="article in articles"
          :key="article.id"
          :article="article.attributes"
        />
      </template>
      <template v-else>
        <p class="text-red-500">No articles found. Please check back later or contact us for more information.</p>
      </template>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    try {
      const { data } = await (
        await fetch(`${store.state.apiUrl}/articles?populate=*`)
      ).json();

      return { articles: data };
    } catch (error) {
      console.error(error);
      // If an error occurs during fetching, you can handle it here.
      return { articles: [] }; // Set articles to an empty array to avoid rendering issues.
    }
  },
};
</script>
