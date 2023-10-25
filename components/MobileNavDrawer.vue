<script setup>
const navDrawer = useShowNavDrawer();
const closeDrawer = () => {
  navDrawer.value = false;
};
</script>

<template>
  <Transition name="slide-up">
    <div
      class="z-[100] text-center px-8 py-6 fixed right-0 top-0 w-[100vw] h-[100vh] bg-[#141a1caf] backdrop-blur-sm"
    >
      <div class="mb-12">
        <h2 class="text-[#FFF] text-[1.4rem] tracking-[2px] font-cairo">
          DREAMY DRIVE
        </h2>
      </div>
      <ul
        class="flex flex-col text-[#FFF] gap-[2rem] font-inconso tracking-[2px] text-sm"
      >
        <li>PREMIUM VEHICLES</li>
        <li>LUXURY VEHICLES</li>
        <li>OUR DRIVERS</li>
        <li>PRICING PACKAGES</li>
        <li>CONTRUCT US</li>
        <li>ABOUT US</li>
      </ul>
      <button
        class="absolute bottom-[5rem] border border-[#d1d1d1] rounded-full p-3 text-[#d1d1d1] text-[1.2rem] hover:text-red-900 hover:border-red-900 transition delay-100 ease-linear"
        @click="closeDrawer"
      >
        <CloseIcon />
      </button>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
ul {
  li {
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    transform: translateY(0);
    &:hover {
      color: var(--gold-dark);
      transform: translateY(-2px);
      transition: all 0.2s ease-in-out;
      &::before {
        content: "";
        position: absolute;
        top: 2rem;
        left: 50%;
        width: 10rem;
        height: 3px;
        background: var(--gold-dark);
        transform: translate(-50%, -50%);
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
    }
  }
}
</style>
