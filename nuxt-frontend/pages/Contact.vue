<template>
  <main>
    <div class="px-4">
      <div class="cover img-cont h-full max-h-96">
        <img class="rounded-b-2xl max-h-100" src="~/assets/img/fhbuilding3.jpg" alt="" />
      </div>
    </div>
    <div class="section relative bg-gray-50 p-12 z-10 m-auto max-w-4xl rounded-2xl overflow-hidden">
      <header class="mb-8">
        <h1 class="hero-text">Contact Us</h1>
        <p>Submit a project request or send a message</p>
      </header>

      <form ref="form" @submit.prevent="submitForm()">
        <div class="wrapper flex flex-col gap-8 mb-8">
          <div class="form-group">
            <!-- TODO: Step 10 - add fullname input -->
          </div>
          <div class="form-control">
            <!-- TODO: Step 10 - add email input -->
          </div>
          <div class="wrapper">
            <h3 class="">Pick a service</h3>
            <div class="form-group check">
              <!-- TODO: Step 10 - add service checkboxes -->
            </div>
          </div>
          <div class="form-control">
            <!-- TODO: Step 10 - add text input -->
          </div>
        <div class="action-cont">
          <button class="cta" >Send message</button>
        </div>
        </div>
        <div  v-if="success" class=" absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white" >
          <h1 class="header-text w-8/12">Great! Your message is on it's way to us!</h1>
        </div>
      </form>
    </div>

  </main>
</template>

<script>
  export default {
    data(){
      return{
        success: false,
        // TODO: Step 10 - add input variables
      }
    },
    methods: {
      async submitForm(){
        try {
          //TODO: Step 10 - add data validation
          // send a POST request to create a new entry
          console.log('Send POST request to strapi')
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

</script>

<style scoped>
  .form-group {
    @apply flex flex-wrap gap-4;
  }

  .form-control {
    @apply flex flex-col flex-grow;
  }

  .form-control label {
    @apply font-bold text-gray-600 mb-2;
  }

  .form-control input,
  .form-control textarea {
    @apply p-4 bg-gray-200 rounded-lg;
  }

  .form-control.check {
    @apply relative flex items-center justify-center cursor-pointer;
  }

  .form-control.check label {
    @apply m-0 w-full h-full p-4 text-center;
  }

  .form-control.check input {
    @apply absolute opacity-0;
  }

  .form-control.check input:checked ~ label{
    @apply border-opacity-0 text-gray-50 bg-gray-700;
  }

  .form-control.check label:hover {
    @apply border-opacity-100
  }

  .form-control.check label {
    @apply border-2 border-gray-600 border-opacity-30 rounded-lg;
  }

</style>
