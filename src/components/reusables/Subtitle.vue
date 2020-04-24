<template>
  <h3 class="subtitle">{{ text }}</h3>
</template>

<script>
export default {
  name: "SubTitle",

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
