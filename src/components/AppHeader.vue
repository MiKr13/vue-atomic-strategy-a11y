<template>
  <header>
    <div role="navigation" class="row between-xs">
      <div class="col-xs" v-if="!mobileView">
        <logo/>
      </div>
      <div class="col-xs" v-if="mobileView">
        <link-icon name="bars" link="#"/>
      </div>
      <div class="col-xs align-center" v-if="mobileView">
        <logo/>
      </div>
      <div class="col-xs align-right" v-if="!mobileView">
        <flat-button name="About" link="#"/>
        <flat-button name="Services" link="#"/>
        <flat-button name="Solutions" link="#"/>
        <flat-button name="Blog" link="#"/>
        <round-button name="Get in touch" link="#" icon="desktop"/>
      </div>
      <div class="col-xs align-right" v-else>
        <link-icon name="desktop" link="#"/>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './reusables/Logo';
import FlatButton from './reusables/FlatButton';
import RoundButton from './reusables/RoundButton';
import LinkIcon from './reusables/LinkIcon';
export default {
  name: 'AppHeader',

  components: {
    Logo,
    FlatButton,
    RoundButton,
    LinkIcon
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
