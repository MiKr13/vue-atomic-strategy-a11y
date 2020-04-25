<template>
  <div role="region" class="row fullheight align-center relative-content">
    <div class="image-background"/>
    <div class="image-overlay"/>
    <div class="image-content align-center">
      <app-title type="h1" text="Lorem ipsum dolor sit amet"/>
      <tile-section :mobileView="mobileView" />
    </div>
  </div>
</template>

<script>
import Title from './reusables/Title';
import TileSection from './reusables/TileSection';
export default {
  name: 'LandingSection',

  components: {
    'app-title': Title,
    TileSection
  },

  props: {
    mobileView: Boolean
  }
};
</script>
