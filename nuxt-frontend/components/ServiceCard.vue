<template>
  <li class="service rounded-xl shadow-lg">
    <header>
      <div class="img-cont h-36 overflow-hidden rounded-xl">
        <!-- TODO: Step 6 - Add img -->
      </div>
      <div class="text-wrapper p-4">
        <!-- TODO: Step 6 - Add service info -->
      </div>
    </header>
  </li>
</template>

<script>
export default {
  props: ['service'],
  computed: {
    coverImageUrl(){
      <!-- TODO: Step 6 - fetch img -->
    }
  }
}
</script>

<style scoped>
.service:nth-of-type(3n + 2) {
  @apply transform md:translate-y-20;
}
</style>
