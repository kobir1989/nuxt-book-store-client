<script setup>
const isSearchOpen = useSearchModal();
</script>

<template>
  <main class="bg-black-900">
    <FullScreenSearch v-show="isSearchOpen" />

    <HeroSection />
    <div class="h-[200vh]">fdfd</div>
  </main>
</template>

<style lang="scss" scoped></style>
