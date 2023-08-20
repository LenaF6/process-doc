<template>
  <main class="index">
     <header id="header">
      <div class="header-content">
        <div class="f1">{{ $prismic.asText(document.headline) }}</div>
        <div v-html="$prismic.asHtml(document.description)"></div>
      </div>
    </header>
    <div class="row no-gutters">
      <div v-for="(post, index) in posts" class="col-lg-4 col-md-6 grow" :key="index">
        <PostPreview :path="'post'" :post="post" />
      </div>
    </div>
  </main>
</template>

<script>
import PostPreview from "@/components/parts/PostPreview";

export default {
  components: {
    PostPreview,
  },
  data () {
    return {
      carouseldata: [],
    };
  },
  async asyncData ({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle("bloghome")).data;
      const posts = (
        await $prismic.api.query(
          $prismic.predicates.at("document.type", "post"),
          { pageSize : 100, orderings: "[document.first_publication_date desc]" }
        )
      ).results;
      return {
        document,
        posts,
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  },
};
</script>
