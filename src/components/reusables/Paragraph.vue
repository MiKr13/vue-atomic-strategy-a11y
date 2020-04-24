<template>
  <p class="paragraph">{{ text }}</p>
</template>

<script>
export default {
  name: "Paragraph",

  props: {
    text: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
