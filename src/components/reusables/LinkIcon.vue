<template>
  <a class="link-button" :href="link" :aria-label="`button`">
    <app-icon :name="name" size="xs" :faOrFas="faOrFas"/>
  </a>
</template>

<script>
import AppIcon from './AppIcon';
export default {
  name: 'LinkIcon',

  components: {
    AppIcon
  },

  props: {
    name: {
      type: String,
      default() {
        return '';
      }
    },
    link: {
      type: String,
      default() {
        return '#';
      }
    },
    faOrFas: {
      type: String,
      default() {
        return 'fa';
      }
    }
  }
};
</script>
