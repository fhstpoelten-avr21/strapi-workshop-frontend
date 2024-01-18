<template>
  <main>
    <div v-if="article">
      <header class="">
        <div class="cover img-cont h-full max-h-96">
          <img v-if="coverImageUrl" class="rounded-b-2xl" :src="coverImageUrl" alt="" />
        </div>
      </header>
      <div class="cont relative bg-gray-50 p-12 z-10 m-auto max-w-6xl rounded-2xl">
        <article class="prose prose-xl m-auto w-full">
          <!-- TODO: Step 9 - show article informations -->
        </article>
      </div>
    </div>
    <div v-else class="h-screen flex items-center justify-center text-center">
      <header class="">
        <h1 class="hero-text">Oops..</h1>
        <p>That article doesnt exist</p>
      </header>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ params, store }) {
    try {
      // TODO: Step 9 - fetch data by slug using Strapi query filters

      return null
    } catch (error) {
      console.log(error)
    }
  },

  computed: {
    coverImageUrl() {
      const url = this.$store.state.url
      const imagePath = this.article.cover.data.attributes.formats.medium.url
      return url + imagePath
    },
    articleCategories() {
      return this.article.categories.data
        .map((x) => x.attributes['name'])
        .toString()
    },
  },
}
</script>
