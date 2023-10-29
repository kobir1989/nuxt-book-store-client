<script setup>
defineEmits(["btn-click"]);
defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  type: {
    type: String,
    default: "button",
  },
  txtColor: {
    type: String,
    default: "#FFF",
  },
  radius: {
    type: String,
    default: "6px",
  },
});
</script>

<template>
  <button
    :type="type"
    :class="{
      'flex items-center justify-center gap-2 text-sm py-3 px-12 border-[1px] transition_03s tracking-[2px]  hover:bg-gold-500': true,
      'border-gold-900 bg-none': variant === 'outlined',
      'bg-gold-900 border-none': variant === 'primary',
    }"
    :style="{ color: txtColor, 'border-radius': radius }"
    :varient="{ 'bg-gold-900': 'primary', 'bg-none': 'outlined' }"
    @click="$emit('btn-click', $event)"
  >
    <slot />
  </button>
</template>
