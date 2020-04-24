<template>
  <div class="row fullheight align-center relative-content">
    <div class="image-background"/>
    <div class="image-overlay"/>
    <div class="image-content">
      <app-title type="h1" text="Lorem ipsum dolor sit amet"/>
    </div>
  </div>
</template>

<script>
import Title from "./reusables/Title";
export default {
  name: "LandingSection",

  components: {
    "app-title": Title
  }
};
</script>
