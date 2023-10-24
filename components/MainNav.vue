<script>
export default {};
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
      class="hidden lg:flex gap-[2rem] font-inconso tracking-[2px] text-sm nav_hover_dot"
    >
      <li>PREMIUM VEHICLES</li>
      <li>LUXURY VEHICLES</li>
      <li>OUR DRIVERS</li>
      <li>PRICING PACKAGES</li>
    </ul>
    <div class="flex gap-8">
      <button class="text-[1.5rem]"><SearchIcon /></button>
      <button class="block lg:hidden text-[2rem]">
        <MenuIcon />
      </button>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
li {
  cursor: pointer;
}
</style>
