<script setup>
import { navLinks } from "~/constants/navLinks";
const navDrawer = useShowNavDrawer();
const closeDrawer = () => {
  navDrawer.value = false;
};
</script>

<template>
  <Transition name="slide-up">
    <div
      class="z-[100] px-8 py-6 fixed right-0 top-0 w-[100vw] h-[100vh] bg-[#141a1caf] backdrop-blur-md flex flex-col items-center"
    >
      <div class="mb-12">
        <h2 class="text-[#FFF] text-[1.4rem] tracking-[2px] font-cairo">
          DREAMY DRIVE
        </h2>
      </div>
      <ul
        class="flex flex-col text-[#FFF] gap-[2rem] font-inconso tracking-[2px] text-sm links w-[10rem]"
      >
        <li v-for="navLink in navLinks" :key="navLink?.id">
          <NuxtLink :to="navLink?.linkTo">{{ navLink?.lebel }}</NuxtLink>
        </li>
      </ul>
      <button
        class="absolute bottom-[5rem] border border-[#d1d1d1] rounded-full p-3 text-[#d1d1d1] text-[1.2rem] hover:text-red-900 hover:border-red-900"
        @click="closeDrawer"
      >
        <CloseIcon />
      </button>
    </div>
  </Transition>
</template>
