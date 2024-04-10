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
        { name: "twitter:card", content: "player" },
        {
          name: "twitter:player",
          content: "https://public-sandbox.vercel.app/",
        },
        {
          name: "twitter:player:width",
          content: "480",
        },
        {
          name: "twitter:player:height",
          content: "480",
        },
        {
          name: "twitter:image",
          content: "https://public-sandbox.vercel.app/avatar-ogp.png",
        },
        {
          name: "og:image",
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
