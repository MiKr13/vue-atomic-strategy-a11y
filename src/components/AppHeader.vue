<template>
  <header>
    <div class="row between-xs">
      <div class="col-xs">
        <logo/>
      </div>
      <div class="col-xs align-right">
        <flat-button name="About" link="#"/>
        <flat-button name="Services" link="#"/>
        <flat-button name="Solutions" link="#"/>
        <flat-button name="Blog" link="#"/>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from "./reusables/Logo";
import FlatButton from "./reusables/FlatButton";
export default {
  name: "AppHeader",

  components: {
    Logo,
    FlatButton
  }
};
</script>
