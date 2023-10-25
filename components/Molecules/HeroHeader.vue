<script setup>
defineEmits(["open-search"]);
const isSearchOpen = useSearchModal();

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
};
</script>

<template>
  <header class="hidden lg:block">
    <div class="flex justify-between items-center py-5 px-[10%]">
      <h2 class="text-[#FFF] text-[1.4rem] tracking-[2px] font-cairo">
        DREAMY DRIVE
      </h2>
      <div class="flex gap-8">
        <p
          class="text-[#FFF] text-sm flex items-center gap-2 leading-6 tracking-[2px] divider"
        >
          <phone-icon />
          +880174-0000000
        </p>
        <div class="text-[#FFF]">|</div>
        <p
          class="text-[#FFF] text-sm flex items-center gap-2 leading-6 tracking-[2px]"
        >
          <location-icon />
          Dhaka, Bangladesh
        </p>
      </div>
    </div>
    <div class="flex justify-between border-t-[1px] border-white w-full">
      <ul
        class="text-[#FFF] w-full flex items-center gap-[2rem] ml-[10%] my-5 font-inconso tracking-[2px] text-sm nav_hover_dot"
      >
        <li>PREMIUM VEHICLES</li>
        <li>LUXURY VEHICLES</li>
        <li>OUR DRIVERS</li>
        <li>PRICING PACKAGES</li>
        <li>OUR SERVICES</li>
      </ul>
      <button
        class="text-[#FFF] text-[2rem] mr-[10%] my-5"
        @click="toggleSearch"
      >
        <search-icon />
      </button>
    </div>
  </header>
</template>
