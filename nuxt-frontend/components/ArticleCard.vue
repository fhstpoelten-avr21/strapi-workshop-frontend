<template>
  <li class="article md:grid gap-6 grid-cols-7 items-center mb-6 md:mb-0">
    <div class="img-cont h-full overflow-hidden rounded-xl col-start-1 col-end-3">
      <!-- fetch media from strapi using the STRAPI_URL -->
      <!-- TODO: Step 5 - Add img -->
    </div>
    <header class=" col-start-3 col-end-8">

      <!-- TODO: Step 5 - Add article info -->

    </header>
  </li>
</template>

<script>
  export default {
    props: ['article'],
    computed: {
      coverImageUrl(){

        // TODO: Step 5 - Fetch Article data

      }
    }
  }
</script>
