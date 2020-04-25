<template>
  <font-awesome-icon
    :icon="[faOrFas, name]"
    style="icon"
    class="icon"
    :style="{ color: color === 'accent' ? '#b54c0aff' : '#c1c1c1aa' }"
    :size="size"
  />
</template>

<script>
export default {
  name: "AppIcon",

  props: {
    name: {
      type: String,
      default() {
        return "Button";
      }
    },

    size: {
      type: String,
      default() {
        return "xs";
      }
    },

    color: {
      type: String,
      default() {
        return "#c1c1c1aa";
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
