<template>
    <textarea
      :name="id"
      :id="id"
      class="textarea"
      :placeholder="placeholder"
      :aria-placeholder="placeholder"
    />
</template>

<script>
export default {
  name: 'TextArea',

  props: {
    id: String,
    placeholder: String
  }
};
</script>
