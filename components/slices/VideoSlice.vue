<template>
  <div class="video-slice pt2 pb4">
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe
        :src="`https://player.vimeo.com/video/${data.primary.videoembed.video_id}?title=0&byline=0&portrait=0`"
        style="position:absolute;top:0;left:0;width:100%;height:100%;"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </div>
</template>

<script>
export default {
  props: ["data"],
}
</script>

<style>
</style>