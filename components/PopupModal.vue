<script setup lang="ts">
defineEmits(["close"]);
defineProps({
  isShown: Boolean,
});
</script>

<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <div
        v-show="isShown"
        class="fixed inset-0 w-full h-full z-40 bg-[#141a1caf]"
        @click="$emit('close')"
      >
        <div
          class="fixed inset-0 md:inset-1/2 gold-border bg-[#2a3336] w-[100%] h-[100%] md:w-[50%] md:h-[50%] z-50 rounded-lg shadow-xl p-4 md:-translate-x-[50%] md:-translate-y-[50%]"
          @click.stop
        >
          <button
            class="gold-border rounded-lg absolute right-4 p-2 top-4 text-[1rem] text-[#fff] hover:bg-gold-900 transition-all hover:shadow-md"
            @click="$emit('close')"
          >
            <CloseIcon />
          </button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.slide-fade-enter-from {
  opacity: 0;
  transform: scale(1.2);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: scale(1);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: scale(1.2);
  transition: all 0.2s ease-in-out;
}
.gold-border {
  @apply border border-gold-900;
}
</style>
