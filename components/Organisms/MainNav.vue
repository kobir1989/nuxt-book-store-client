<script setup>
import { navLinks } from "~/constants/navLinks";
const route = useRoute();

const isSearchOpen = useSearchModal();
const navDrawer = useShowNavDrawer();
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
const toggleDrawer = () => {
  navDrawer.value = !navDrawer.value;
};
defineProps({
  lightMood: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <nav
    class="flex justify-between items-center py-4 px-[2rem] xl:px-[4rem]"
    :class="{
      'bg-black-900 border-b border-gold-900 text-[#FFF]':
        !lightMood && route.path === '/',
      'bg-[#FFF]  text-black-900 shadow-sm': lightMood || route.path !== '/',
    }"
  >
    <div>
      <NuxtLink
        to="/"
        class="text-inherit text-[1.4rem] tracking-[2px] font-cairo"
      >
        DREAMY DRIVE
      </NuxtLink>
    </div>
    <ul
      class="hidden lg:flex gap-[2rem] font-inconso tracking-[2px] text-sm"
      :class="{ 'links dark_nav ': !lightMood, 'links light_nav': lightMood }"
    >
      <li v-for="navLink in navLinks.slice(0, 4)" :key="navLink?.id">
        <NuxtLink :to="navLink?.linkTo">{{ navLink?.lebel }}</NuxtLink>
      </li>
    </ul>
    <div class="flex gap-8">
      <button class="text-[1.5rem]" @click="toggleSearch">
        <SearchIcon />
      </button>
      <button class="block lg:hidden text-[2rem]" @click="toggleDrawer">
        <MenuIcon />
      </button>
    </div>
  </nav>
</template>
