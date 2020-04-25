<template>
  <p :class="`paragraph ${textClass}`" v-html="text"/>
</template>

<script>
export default {
  name: 'Paragraph',

  props: {
    text: {
      type: String,
      default() {
        return '';
      }
    },
    textClass: {
      type: String,
      default() {
        return 'text-dark';
      }
    }
  }
};
</script>
