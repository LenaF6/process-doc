<template>
  <div class="image-with-caption-slice mt5 pb4">
    <img :src="data.primary.image.url" class="img-fluid" :alt="data.primary.image.alt" />
    <div class="f3">{{ $prismic.asText(data.primary.caption) }}</div>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang="scss" scoped>
// CHANGE
.img-fluid {
  max-width: 50vw;
}
</style>