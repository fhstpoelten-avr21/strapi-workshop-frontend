<template>
  <main>
    <header class="px-4 mb-12">
      <div class="wrapper mt-28 m-auto max-w-6xl">
        <h1 class="hero-text">Our Projects</h1>
        <template v-if="projects.length > 0">
          <p>See our Projects which we have done in the mobile masterclass</p>
        </template>
      </div>
    </header>
    <ul class="m-auto px-4 max-w-5xl mb-12">
      <template v-if="projects.length > 0">
        <project-card v-for="project in projects" :key="project.id" :project="project.attributes" />
      </template>
      <template v-else>
        <p class="text-red-500">No projects found. Please check back later or contact us for more information.</p>
      </template>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ store }) {
    try {
      const { data } = await (
        await fetch(`${store.state.apiUrl}/projects?populate=*`)
      ).json();

      // Check if no projects are found
      if (!data || data.length === 0) {
        throw new Error('No projects found');
      }

      return { projects: data };
    } catch (error) {
      console.error(error);
      // If an error occurs during fetching, you can handle it here.
      return { projects: [] }; // Set projects to an empty array to avoid rendering issues.
    }
  },
};
</script>

<style></style>
