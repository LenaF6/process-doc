<template>
  <div class="kachel">
    <nuxt-link :to="`/${path}/${post.uid}`">
      <img
        :src="post.data.previewimage.lowres.url"
        class="img-fluid"
        :alt="post.data.previewimage.alt"
      />
      <div class="f4">{{ $prismic.asText(post.data.title) }}</div>
      <div class="f5">{{ formatDate(post.data.date) }}</div>
      <div>{{ getFirstParagraph(post) }}</div>
    </nuxt-link>
  </div>
</template>

<script>
import PrismicDom from "prismic-dom";

export default {
  props: ["path", "post"],
  methods: {
    formatDate(date) {
      const _date = PrismicDom.Date(date);
      return new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }).format(_date);
    },
    getFirstParagraph(post) {
      const textLimit = 130;
      const slices = post.data.body;
      let firstParagraph = "";
      let haveFirstParagraph = false;

      slices.map(function(slice) {
        if (!haveFirstParagraph && slice.slice_type == "text") {
          slice.primary.text.forEach(function(block) {
            if (block.type == "paragraph" && !haveFirstParagraph) {
              firstParagraph += block.text;
              haveFirstParagraph = true;
            }
          });
        }
      });

      const limitedText = firstParagraph.substr(0, textLimit);

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(" ")) + "...";
      } else {
        return firstParagraph;
      }
    },
  },
};
</script>
