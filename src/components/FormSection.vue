<template>
  <div role="form" class="relative-content form-section">
    <div class="image-background"/>
    <div class="image-overlay"/>
    <div class="image-content align-center-horizontal">
      <app-title type="h2" text="Conviced to work with us?" class="capitalize"/>
      <paragraph
        text="Company has helped agencies keep their promises to client since 2005"
        textClass="text-white"
      />
      <div class="row block-pad">
        <div class="col-xs-12 col-md-4 small-padding">
          <text-input id="full-name" type="text" placeholder="Full Name"/>
        </div>
        <div class="col-xs-12 col-md-4 small-padding">
          <text-input id="email-input" type="email" placeholder="Email Address"/>
        </div>
        <div class="col-xs-12 col-md-4 small-padding">
          <text-input id="phone-input" type="tel" placeholder="Phone Number"/>
        </div>
      </div>
      <div class="row block-pad">
        <text-area id="message" placeholder="Message in brief"/>
      </div>
      <div class="align-center">
        <round-button name="Submit" link="#"/>
      </div>
    </div>
  </div>
</template>

<script>
import Title from './reusables/Title';
import Paragraph from './reusables/Paragraph';
import TextInput from './reusables/TextInput';
import TextArea from './reusables/TextArea';
import RoundButton from './reusables/RoundButton';
export default {
  name: 'FormSection',

  components: {
    'app-title': Title,
    Paragraph,
    TextInput,
    TextArea,
    RoundButton
  }
};
</script>
