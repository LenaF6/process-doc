<template>
  <main class="about">
    <header id="header">
      <div class="header-content mr7-ns">
        <div class="f1-ns f3 tl ml7-ns ml3 mr2 mb2-l mb2">{{ $prismic.asText(document.abouttitle) }}</div>
        <div class=" tl ml7-ns ml3 mr3 mr7-ns " v-html="$prismic.asHtml(document.description)"></div>
      </div>
    </header>
    
    
  </main>
</template>

<script>
export default {
  async asyncData ({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle("about")).data;
      return {
        document,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
