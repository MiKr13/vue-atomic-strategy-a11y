<template>
  <button type="submit" :formaction="link" class="btn btn-flat">{{ name }}</button>
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

<style lang="sass" scoped>
.btn-flat {
  background-color: transparent;
}
</style>

