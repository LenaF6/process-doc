<template>
  <div class="music-slice pb4">
    <iframe width="100%" height="180" :src="$prismic.asLink(data.primary.embedurl)" frameborder="0"></iframe>
  </div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style>
</style>