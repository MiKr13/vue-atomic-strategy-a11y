<template>
  <div>
    <div class="testimonal">
      <icon name="quote-left" size="lg"/>
      <paragraph :text="text"/>
    </div>
    <user-avatar/>
  </div>
</template>

<script>
import Paragraph from "./Paragraph";
import Icon from "./Icon";
import UserAvatar from "./UserAvatar";

export default {
  name: "Testimonal",

  components: {
    Paragraph,
    Icon,
    UserAvatar
  },

  props: {
    text: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>
