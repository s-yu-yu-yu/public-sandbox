<script setup lang="ts">
useHead({
  title: "VRM Viewer",
  meta: [
    {
      name: "description",
      content: "VRMをTwitterに埋め込むやつ",
    },
  ],
});
</script>

<template>
  <div>
    <VrmContainer />
  </div>
</template>
