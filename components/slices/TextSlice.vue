<template>
  <div class="text-slice mt5 pb4" v-html="$prismic.asHtml(data.primary.text)"></div>
</template>

<script>
export default {
  props: ["data"]
}
</script>

<style>
</style>