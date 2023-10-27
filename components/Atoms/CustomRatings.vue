<script setup>
defineProps({
  rating: {
    type: Number,
    default: 4,
  },
});
</script>

<template>
  <div class="flex gap-2 items-center">
    <span
      v-for="star in parseInt(rating)"
      :key="star"
      class="text-gold-900 text-[1.2rem]"
    >
      <StarFillIcon />
    </span>
    <span
      v-for="star in parseInt(5 - rating)"
      :key="star"
      class="text-gold-900 text-[1.1rem]"
    >
      <StarOutlined />
    </span>
  </div>
</template>

<style lang="scss" scoped></style>
