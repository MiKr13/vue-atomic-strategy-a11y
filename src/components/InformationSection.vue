<template>
  <div role="main" class="row">
    <div class="col-xs-12 col-md-6 align-center padding-block">
      <app-title type="h2"
        text="Morbi et nulla lacinia, posuere arcu ac, venenatis elit. Morbi eget enim ultricies enim molestie sollicitudin vel ac eros. Praesent sed enim turpis."
      />
      <paragraph
        text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam volutpat porta maximus. Phasellus nisi erat, consequat quis viverra ut, posuere vitae augue. Duis in gravida elit. Duis ac diam sit amet lorem interdum varius id et massa. Donec vel arcu eget purus viverra volutpat sed eget est. Ut sodales vitae metus quis venenatis. Curabitur vitae venenatis dui, ut vulputate diam."
      />
    </div>
    <div class="col-xs-12 col-md-6 align-center padding-block image-container">
      <img src="../assets/people-world-map.png" alt="people world map" class="image-style">
    </div>
  </div>
</template>

<script>
import Title from './reusables/Title';
import Paragraph from './reusables/Paragraph';
export default {
  name: 'InformationSection',

  components: {
    "app-title": Title,
    Paragraph
  }
};
</script>
