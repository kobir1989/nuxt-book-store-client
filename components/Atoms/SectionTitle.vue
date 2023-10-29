<script setup>
defineProps({
  color: {
    type: String,
    default: "#FFF",
  },
});
</script>

<template>
  <h1 class="text-[2rem] md:text-lg" :style="{ color: color }">
    <slot />
  </h1>
</template>
