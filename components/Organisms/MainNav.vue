<script setup>
import { navLinks } from "~/constants/navLinks";
const isSearchOpen = useSearchModal();
const navDrawer = useShowNavDrawer();
const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
const toggleDrawer = () => {
  navDrawer.value = !navDrawer.value;
};
</script>

<template>
  <nav
    class="bg-black-900 border-b border-gold-900 text-[#FFF] flex justify-between items-center py-4 px-[2rem] xl:px-[4rem]"
  >
    <div>
      <h2 class="text-[#FFF] text-[1.4rem] tracking-[2px] font-cairo">
        DREAMY DRIVE
      </h2>
    </div>
    <ul
      class="hidden lg:flex gap-[2rem] font-inconso tracking-[2px] text-sm links"
    >
      <li v-for="navLink in navLinks" :key="navLink?.id">
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
