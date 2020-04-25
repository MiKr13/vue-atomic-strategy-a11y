<template>
  <div>
    <label :for="id"></label>
    <input
      :name="id"
      :id="id"
      :type="type"
      class="input"
      :placeholder="placeholder"
      :aria-placeholder="placeholder"
    >
  </div>
</template>

<script>
export default {
  name: 'TextInput',

  props: {
    id: String,
    type: String,
    placeholder: String
  }
};
</script>
