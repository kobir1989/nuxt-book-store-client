<script setup>
import { ourServices, quickLinks } from "~/constants/footerLinks";
</script>

<template>
  <footer class="bg-black-800 pt-[5rem]">
    <MainContainer>
      <div
        class="grid grid-cols-9 gap-10 content-center place-content-center pb-[5rem]"
      >
        <!-- col-1 -->
        <div class="col-span-9 md:col-span-4 flex flex-col gap-8">
          <h3 class="golden_text text-[1.3rem]">DREAMY DRIVE</h3>
          <p class="text-sm text-gray-900">
            Discover a world of opulence, where every journey is a statement of
            prestige.<br />
            Our exclusive fleet of premium cars sets a new standard for
            refinement and performance.
          </p>
          <p class="text-xs golden_text tracking-[2px]">
            CALL CENTER: +88017400000
          </p>
        </div>
        <!-- col-2 -->
        <div class="col-span-9 sm:col-span-4 md:col-span-2">
          <h4 class="links_heading">Quick Links</h4>
          <ul class="links flex flex-col gap-8 font-inconso">
            <li v-for="quickLink in quickLinks" :key="quickLink?.id">
              <NuxtLink :to="quickLink?.linkTo">
                {{ quickLink?.lebel }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- col-3 -->
        <div class="col-span-9 sm:col-span-5 md:col-span-3 font-inconso">
          <h4 class="links_heading">Our Services</h4>
          <ul class="links flex flex-col gap-8">
            <li v-for="ourService in ourServices" :key="ourService?.id">
              <NuxtLink :to="ourService?.linkTo">
                {{ ourService?.lebel }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </MainContainer>
    <div class="border_bottom w-full"></div>
    <MainContainer>
      <div class="py-4">
        <p class="text-xs text-gold-500">
          &copy; {{ new Date().getFullYear() }} Kabir Hossain -
          kobir.h.ritu@gmail.com
        </p>
      </div>
    </MainContainer>
  </footer>
</template>

<style lang="scss" scoped>
.links_heading {
  @apply text-[#FFF] text-[1.4rem] mb-8;
}
.golden_text {
  @apply text-gold-900  font-[600];
}
</style>
