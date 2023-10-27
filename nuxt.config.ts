export default defineNuxtConfig({
  devtools: { enabled: true },
  image: {
    domains: [
      "https://github.com/kobir1989/nuxt-car-rental-service-client/tree/master/public",
    ],
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/scss/main.scss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "vue3-carousel-nuxt",
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-headlessui",
  ],
});
