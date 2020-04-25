<template>
  <div role="application">
    <app-header :mobileView="mobileView"/>
    <landing-section :mobileView="mobileView"/>
    <information-section/>
    <testimonial-section :mobileView="mobileView"/>
    <form-section/>
    <app-footer :mobileView="mobileView"/>
  </div>
</template>

<script>
import AppHeader from './AppHeader';
import LandingSection from './LandingSection';
import InformationSection from './InformationSection';
import TestimonialSection from './TestimonialSection';
import FormSection from './FormSection';
import AppFooter from './AppFooter';

export default {
  name: 'HomePage',

  components: {
    AppHeader,
    LandingSection,
    InformationSection,
    TestimonialSection,
    FormSection,
    AppFooter
  },

  data: () => ({
    mobileView: false
  }),

  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  }
};
</script>
