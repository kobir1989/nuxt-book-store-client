<script setup lang="ts">
defineEmits(["btn-click"]);
</script>

<template>
  <div>
    <button
      class="flex items-center gap-2 text-sm py-3 px-12 border-[1px] border-gold-900 text-[#FFF] tracking-[2px] hover:bg-gold-900 transition duration-300 ease-out"
      @click="$emit('btn-click', $event)"
    >
      <slot />
    </button>
  </div>
</template>
