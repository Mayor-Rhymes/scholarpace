<script>
export default {
  data() {
    return {};
  },

  props: {
    class: String,
  }
};
</script>

<template>
  <div class="d-flex flex-column-reverse flex-lg-row-reverse align-items-center justify-content-around py-4">
    <slot />
  </div>
</template>
