<template>
  <a :href="link">
    <font-awesome-icon :icon="['fa', name]" style="icon" class="icon"/>
  </a>
</template>

<script>
export default {
  name: "FlatButton",

  props: {
    name: {
      type: String,
      default() {
        return "Button";
      }
    },
    link: {
      type: String,
      default() {
        return "#";
      }
    }
  }
};
</script>
