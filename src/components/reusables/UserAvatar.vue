<template>
  <div class="avatar-inline">
    <div class="avatar-circle">
      <icon name="user" size="md"/>
    </div>
    <div class="avatar-details">
      <span class="avatar-username">{{ name }}</span>
      <span class="avatar-userrole">{{ position }}</span>
    </div>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  name: "UserAvatar",

  componenets: {
    Icon
  },

  props: {
    name: {
      type: String,
      default() {
        return "Client name";
      }
    },

    position: {
      type: String,
      default() {
        return "Position, ORG";
      }
    }
  }
};
</script>
