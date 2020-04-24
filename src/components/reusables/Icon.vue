<template>
  <font-awesome-icon :icon="['fa', name]" style="icon" class="icon" :size="size"/>
</template>

<script>
export default {
  name: "Icon",

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
    }
  }
};
</script>
