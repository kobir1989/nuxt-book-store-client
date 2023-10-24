export default defineNuxtConfig({
  devtools: { enabled: true },

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
