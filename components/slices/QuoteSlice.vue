<template>
  <div class="quote-slice mt5 pb4">
    <blockquote>{{ $prismic.asText(data.primary.quote)}}</blockquote>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss" scoped>
// CHANGE
blockquote {
  display: inline-block;
  &::before {
    content: "« ";
  }
  &::after {
    content: " »";
  }
}
</style>