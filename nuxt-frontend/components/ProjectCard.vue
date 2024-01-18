<template>
  <li class="project grid gap-4 md:gap-8 md:grid-cols-7 items-center mb-8 md:mb-12">
    <header style="height: min-content;" class="md:grid md:col-start-5 md:col-end-8">

      <!-- TODO: Step 6 - Add project info -->

    </header>

    <div
      class="img-cont rounded-xl h-full max-h-40 md:max-h-72 row-start-1 md:col-start-1 md:col-end-5 overflow-hidden">
      <!-- TODO: Step 6 - Add img -->
    </div>
  </li>
</template>

<script>
  export default {
    props: ['project'],
    computed: {
      coverImageUrl(){
        <!-- TODO: Step 6 - Fetch img -->
      },
      projectCategories(){
        <!-- TODO: Step 6 - Fetch project categories -->
      }
    }
  }

</script>

<style scoped>
  @layer components {
    .project:nth-last-of-type(1) {
      @apply md:mb-0;
    }

    .project:nth-of-type(even) header {
      @apply md:col-start-1 md:col-end-4;
    }

    .project:nth-of-type(even) .img-cont {
      @apply md:col-start-4 md:col-end-8
    }
  }

</style>
