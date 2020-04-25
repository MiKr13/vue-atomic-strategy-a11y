<template>
  <footer>
    <div class="row between-xs" v-if="mobileView">
      <div class="col-xs-12 align-center">
        <paragraph role="contentinfo" text="&copy; 2017 Company, All Rights Reserved" textClass="text-white"/>
      </div>
      <div class="col-xs-12 align-center">
        <link-icon name="facebook-square" link="#" faOrFas="fab"/>
        <link-icon name="instagram-square" link="#" faOrFas="fab"/>
        <link-icon name="twitter-square" link="#" faOrFas="fab"/>
        <link-icon name="envelope" link="#"/>
      </div>
    </div>
    <div class="row between-xs" v-else>
      <div class="col-xs-6">
        <paragraph role="contentinfo" text="&copy; 2017 Company, All Rights Reserved" textClass="text-white"/>
      </div>
      <div class="col-xs-6 align-right">
        <link-icon name="facebook-square" link="#" faOrFas="fab"/>
        <link-icon name="instagram-square" link="#" faOrFas="fab"/>
        <link-icon name="twitter-square" link="#" faOrFas="fab"/>
        <link-icon name="envelope" link="#"/>
      </div>
    </div>
  </footer>
</template>

<script>
import LinkIcon from './reusables/LinkIcon';
import Paragraph from './reusables/Paragraph';
export default {
  name: 'AppFooter',

  components: {
    LinkIcon,
    Paragraph
  },

  props: {
    mobileView: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
