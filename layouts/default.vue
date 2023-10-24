<script setup>
const { currentPosition } = useScrollPosition();
</script>

<template>
  <main>
    <Transition name="slide-fade">
      <div v-show="currentPosition > 300" class="z-[20] fixed inset-0">
        <MainNav />
      </div>
    </Transition>

    <slot />
  </main>
</template>

<style lang="scss" scoped>
.slide-fade-enter-from {
  transform: translateY(-60px);
}
.slide-fade-enter-to {
  transform: translateY(0);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-to {
  transform: translateY(-60px);
  transition: all 0.3s ease-in-out;
}
</style>
