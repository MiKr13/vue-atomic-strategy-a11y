<template>
  <div class="avatar-inline">
    <div class="avatar-circle">
      <!-- <app-icon name="user" size="md"/> -->
      <font-awesome-icon role="img" alt="icons" icon="user" style="icon" class="icon" size="2x"/>
    </div>
    <div class="avatar-details">
      <span class="avatar-username">{{ name }}</span>
      <span class="avatar-userrole">{{ position }}</span>
    </div>
  </div>
</template>

<script>
import AppIcon from './AppIcon';
export default {
  name: 'UserAvatar',

  componenets: {
    'app-icon': AppIcon
  },

  props: {
    name: {
      type: String,
      default() {
        return 'Client name';
      }
    },

    position: {
      type: String,
      default() {
        return 'Position, ORG';
      }
    }
  }
};
</script>
