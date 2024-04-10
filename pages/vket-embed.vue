<script setup lang="ts">
useHead({
  title: "Vket Embed",
  meta: [
    {
      name: "description",
      content: "Vket Embed",
    },
    {
      property: "twitter:player",
      content:
        "https://myvketofficial.cloud.vket.com/worlds/24Summer_iframe/main.html?worldid=24Summer_iframe",
    },
    {
      property: "twitter:player:width",
      content: "640",
    },
    {
      property: "twitter:player:height",
      content: "480",
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
