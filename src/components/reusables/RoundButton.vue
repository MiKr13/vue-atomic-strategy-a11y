<template>
  <button v-if="icon" type="submit" :formaction="link" class="btn btn-accent btn-icon btn-rounded">
    <font-awesome-icon :icon="['fa', icon]"/>
    {{ name }}
  </button>
  <button v-else type="submit" :formaction="link" class="btn btn-accent btn-rounded">{{ name }}</button>
</template>

<script>
export default {
  name: "RoundedButton",

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
