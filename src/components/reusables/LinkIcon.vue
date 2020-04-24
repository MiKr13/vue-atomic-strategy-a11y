<template>
  <a :href="link">
    <icon :name="name" size="xs"/>
  </a>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "LinkIcon",

  components: {
    Icon
  },

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
