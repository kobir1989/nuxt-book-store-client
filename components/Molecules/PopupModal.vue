<script setup>
defineEmits(["close"]);
defineProps({
  isShown: {
    type: Boolean,
    default: false,
  },
  isVideo: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Teleport to="body">
    <Transition name="bounce-fade">
      <div
        v-show="isShown"
        class="fixed inset-0 w-full h-full z-40 bg-[#141a1caf] backdrop-blur-md"
        @click="$emit('close')"
      >
        <div
          class="fixed inset-0 md:inset-1/2 md:gold-border w-[100%] h-[100%] md:w-[50%] md:h-[70%] z-50 lg:rounded-lg md:-translate-x-[50%] md:-translate-y-[50%]"
          :class="{ 'border border-gold-900 p-[2rem] shadow-xl': !isVideo }"
          @click.stop
        >
          <button
            class="gold-border rounded-lg absolute right-4 p-2 top-4 text-[1rem] text-[#fff] hover:bg-gold-900 transition-all hover:shadow-md"
            @click="$emit('close')"
          >
            <CloseIcon />
          </button>
          <div
            class="w-full mt-[3.8rem]"
            :class="{ 'px-4 mt-[6rem]': !isVideo }"
          >
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.gold-border {
  @apply border border-gold-900;
}
</style>
