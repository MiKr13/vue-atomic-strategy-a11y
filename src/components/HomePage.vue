<template>
  <div>
    <app-header v-if="!mobileView"/>
    <app-header-responsive v-else/>
    <landing-section/>
    <information-section/>
    <testimonial-section/>
    <form-section/>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppHeaderResponsive from "./AppHeaderResponsive";
import LandingSection from "./LandingSection";
import InformationSection from "./InformationSection";
import TestimonialSection from "./TestimonialSection";
import FormSection from "./FormSection";
import AppFooter from "./AppFooter";

export default {
  name: "HomePage",

  components: {
    AppHeader,
    AppHeaderResponsive,
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
    window.addEventListener("resize", this.handleView);
  },

  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  }
};
</script>
