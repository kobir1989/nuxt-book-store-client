<script setup>
const { currentPosition } = useScrollPosition();
const isSearchOpen = useSearchModal();
const { width } = useWindowWidth();
const navDrawer = useShowNavDrawer();
</script>

<template>
  <main>
    <!-- Show scroll remaining of the Page -->
    <ScrollPositionTraker />
    <!-- Main Nav -->
    <Transition name="slide-fade">
      <div
        v-show="currentPosition > 400 || width < 976"
        class="z-[30] fixed inset-0 h-[4rem]"
      >
        <MainNav />
      </div>
    </Transition>
    <!-- Mobile Nav Drawer  -->
    <MobileNavDrawer v-show="navDrawer" />
    <!-- Full screen Search  -->
    <FullScreenSearch v-show="isSearchOpen" />

    <slot />
    <!-- Footer Section  -->
    <MainFooter />
  </main>
</template>
