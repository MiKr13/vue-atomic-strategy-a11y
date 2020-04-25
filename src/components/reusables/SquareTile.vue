<template>
  <div v-if="mobileView" class="tile medium-padding align-normal">
    <app-icon size="lg" color="accent" :name="icon"/>
    {{ text }}
  </div>
  <div v-else class="tile small-padding align-center">
    <app-icon size="3x" color="accent" :name="icon"/>
    <br>
    {{ text }}
  </div>
</template>

<script>
import AppIcon from './AppIcon';
export default {
  name: 'SquareTile',

  components: {
    AppIcon
  },

  props: {
    mobileView: {
      type: Boolean,
      default() {
        return false;
      }
    },
    icon: String,
    text: String
  }
};
</script>
