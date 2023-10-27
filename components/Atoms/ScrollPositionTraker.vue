<script setup>
const { currentPosition } = useScrollPosition();
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <div
    class="z-[100] fixed bottom-[10%] right-[5%] z[100]"
    :class="{ hidden: currentPosition < 600 }"
  >
    <button
      class="flex items-center gap-4 text-[1rem] gold_text_long_spacing"
      @click="scrollToTop"
    >
      TOP
      <span>
        <ScrollIcon />
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
span {
  border: 1px solid #8f7c6167;
  border-radius: 50%;
}
</style>
