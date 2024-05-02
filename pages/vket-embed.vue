<script setup lang="ts">
useHead({
  title: "Vket Embed",
  meta: [
    {
      name: "description",
      content: "VketCloud埋め込むやつ",
    },
    {
      property: "og:title",
      content: "Vket Embed",
    },
    {
      property: "og:description",
      content: "VketCloud埋め込むやつ",
    },
    {
      property: "twitter:player",
      content:
        "https://myvketofficial.cloud.vket.com/worlds/24Summer_iframe/main.html?worldid=24Summer_iframe",
    },
    {
      property: "twitter:player:width",
      content: "1080",
    },
    {
      property: "twitter:player:height",
      content: "720",
    },
    {
      property: "og:type",
      content: "video.other",
    },
    {
      property: "og:video:url",
      content:
        "https://myvketofficial.cloud.vket.com/worlds/24Summer_iframe/main.html?worldid=24Summer_iframe",
    },
    {
      property: "og:video:secure_url",
      content:
        "https://myvketofficial.cloud.vket.com/worlds/24Summer_iframe/main.html?worldid=24Summer_iframe",
    },
    {
      property: "og:video:type",
      content: "text/html",
    },
    {
      property: "og:video:width",
      content: "1280",
    },
    {
      property: "og:video:height",
      content: "720",
    },
  ],
});
</script>

<template>
  <div>
    <iframe
      src="https://myvketofficial.cloud.vket.com/worlds/24Summer_iframe/main.html?worldid=24Summer_iframe"
      width="100%"
      height="100%"
      frameborder="0"
      class="iframe"
    ></iframe>
  </div>
</template>

<style scoped>
.iframe {
  width: 100vw;
  height: 100vh;
}
</style>
