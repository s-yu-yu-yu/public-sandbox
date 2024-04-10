// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        { property: "twitter:card", content: "player" },
        {
          property: "twitter:player",
          content: "https://public-sandbox.vercel.app/",
        },
        {
          property: "twitter:player:width",
          content: "480",
        },
        {
          property: "twitter:player:height",
          content: "480",
        },
        {
          property: "twitter:image",
          content: "https://public-sandbox.vercel.app/avatar-ogp.png",
        },
        {
          property: "og:image",
          content: "https://public-sandbox.vercel.app/avatar-ogp.png",
        },
      ],
      link: [],
      style: [],
      script: [],
      noscript: [],
    },
  },
  devtools: { enabled: true },
});
