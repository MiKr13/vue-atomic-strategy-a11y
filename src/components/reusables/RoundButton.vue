<template>
  <button v-if="icon" type="submit" :formaction="link" class="btn btn-accent btn-icon btn-rounded">
    <font-awesome-icon :icon="['fas', 'desktop']"/>
    {{ name }}
  </button>
  <button v-else type="submit" :formaction="link" class="btn btn-accent btn-rounded">{{ name }}</button>
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
    },
    icon: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.btn-accent {
  background-color: $accent-color;
  border: 2px solid $accent-color;
  color: $accent-color;
}

.btn-rounded {
  border-radius: $radius;
}
</style>

