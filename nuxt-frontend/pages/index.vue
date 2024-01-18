<template>
  <main :style="{ backgroundImage: `url(${require('@/assets/img/cover4.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <section class="site-section hero-section h-screen">
      <div class="wrapper flex items-center justify-center h-full m-auto max-w-6xl">
        <header class="text-center md:w-2/3">
          <h1 class="hero-text md:text-7xl">Welcome to our STRAPI & NUXT Workshop</h1>
          <p class="mb-4">
            We are pleased to present you our nuxt and strapi workshop. Enjoy :)
          </p>
        </header>
      </div>
    </section>
    <section class="site-section services-section">
      <div class="wrapper m-auto py-12 max-w-6xl">
        <header class="relative grid md:grid-cols-3 gap-6 z-10 text-center">
          <div class="wrapper col-start-2">
            <h1 class="header-text">Our Services</h1>
            <p class="mb-4">
              We at FHSTP are obsessed with beautiful innovation.
            </p>
          </div>
        </header>
          <!-- TODO: Step 7 - Show Services here -->
      </div>
    </section>
    <section class="site-section projects-section">
      <div class="wrapper py-12 m-auto max-w-4xl">
        <header class="text-center mb-6">
          <h1 class="header-text">Our Projects</h1>
          <p>We at FHSTP are obsessed with beautiful innovation.</p>
        </header>
        <!-- TODO: Step 7 - Show Projects here -->
        <div class="action-cont text-center mt-12">
          <nuxt-link to="/projects">
            <button class="cta">View more</button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <section class="site-section blog-section">
      <div class=" wrapper py-12 md:grid gap-8 grid-cols-7 items-center m-auto max-w-6xl">
        <header style="height: min-content" class="md:grid col-start-1 col-end-3 mb-8">
          <h1 class="header-text">Our Blog</h1>
          <p class="mb-2">Helpful content from from the team to you.</p>
          <button class="cta w-max">Explore our blog</button>
        </header>
        <!-- TODO: Step 7 - Show Articles here -->
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    async asyncData({ $strapi, store }) {
      try {

        // TODO: Step 4 - Fetch Data

        return { projects: projects.data, articles: articles.data, services: services.data }
      } catch (error) {
        console.log(error)
      }
    },
  }
</script>
