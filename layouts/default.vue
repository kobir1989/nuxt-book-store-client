<script setup>
const { currentPosition } = useScrollPosition();
const { width } = useWindowWidth();
const navDrawer = useShowNavDrawer();
</script>

<template>
  <main>
    <!-- Main Nav -->
    <Transition name="slide-fade">
      <div
        v-show="currentPosition > 300 || width < 976"
        class="z-[30] fixed inset-0 h-[4rem]"
      >
        <MainNav />
      </div>
    </Transition>
    <!-- Mobile Nav Drawer  -->
    <MobileNavDrawer v-show="navDrawer" />
    <slot />
  </main>
</template>
