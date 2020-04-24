<template>
  <div class="row around-xs bg-grey testimonial-section align-center">
    <title type="h2" text="Testimonial"/>
    <div v-for="(el, index) in testimonals" :key="index" class="col-xs">
      <testimonal :text="el"/>
    </div>
  </div>
</template>

<script>
import Testimonal from "./reusables/Testimonal";
import Title from "./reusables/Title";
export default {
  name: "TestimonialSection",

  components: {
    Testimonal,
    Title
  },

  data: () => ({
    testimonals: [
      "Vivamus tempus sem in augue sagittis, eget hendrerit mauris aliquet. Mauris scelerisque nibh id euismod blandit. Maecenas lorem turpis, faucibus ac erat et, venenatis cursus ante.",
      "Aenean rutrum lacus nec massa faucibus semper. Morbi et nulla lacinia, posuere arcu ac, venenatis elit. Morbi eget enim ultricies enim molestie sollicitudin vel ac eros.",
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
    ]
  })
};
</script>
