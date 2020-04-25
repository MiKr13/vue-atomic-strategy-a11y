<template>
  <div>
    <div class="testimonal">
      <app-icon name="quote-left" size="lg" color="accent" style="display: inline-block"/>
      <paragraph :text="text" style="display: inline-block"/>
    </div>
    <user-avatar/>
  </div>
</template>

<script>
import Paragraph from './Paragraph';
import AppIcon from './AppIcon';
import UserAvatar from './UserAvatar';

export default {
  name: 'Testimonal',

  components: {
    Paragraph,
    AppIcon,
    UserAvatar
  },

  props: {
    text: {
      type: String,
      default() {
        return '';
      }
    }
  }
};
</script>
