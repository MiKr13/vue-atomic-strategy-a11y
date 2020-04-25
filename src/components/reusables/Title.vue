<template>
  <h1 aria-label="heading" v-if="type === 'h1'">{{ text }}</h1>
  <h2 aria-label="heading" v-else>{{ text }}</h2>
</template>

<script>
export default {
  name: 'Title',

  props: {
    text: {
      type: String,
      default() {
        return '';
      }
    },

    type: {
      type: String,
      default() {
        return 'h2';
      }
    }
  }
};
</script>
