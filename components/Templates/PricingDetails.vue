<script setup>
import { priceOptions } from "~/constants/priceOptionsArr";
const img = useImage();
</script>

<template>
  <div class="py-[5rem]">
    <MainContainer>
      <div class="border_bottom">
        <SectionTitle> A High Variety Of Options </SectionTitle>
        <p
          class="text-gold-900 text-md font-inconso tracking-[2px] font-[600] mt-6"
        >
          BEST POSSIBILITIES
        </p>
      </div>
      <div class="pt-[3rem]">
        <div
          v-for="option in priceOptions"
          :key="option?.id"
          class="flex mb-8 border_bottom"
        >
          <!-- background image  -->
          <div class="w-[15rem] hidden lg:flex">
            <NuxtImg
              :src="option?.image"
              width="400"
              height="300"
              :alt="option?.label"
              format="webp"
              :placeholder="
                img(option?.image, { h: 400, f: 'png', blur: 2, q: 50 })
              "
            />
          </div>
          <div
            class="flex md:flex-row flex-col gap-6 justify-between md:items-center w-full lg:-ml-[8rem]"
          >
            <!-- price -->
            <div>
              <h3 class="text-[#FFF] text-[1.5rem]">{{ option?.label }}</h3>
              <p class="text-md mt-1 text-gray-900">
                from
                <span class="text-gold-900 text-[3rem] font-[700] ml-4 relative"
                  ><span class="text-[1.5rem] font-[600] absolute top-2 -left-4"
                    >$</span
                  >{{ option?.price
                  }}<span class="text-[1.5rem] font-[600]">/h</span></span
                >
              </p>
            </div>
            <!-- options -->
            <ul
              class="text-gray-200 min-w-[13.5rem] flex flex-col gap-4 text-md tracking-[1px]"
            >
              <li class="flex gap-2 items-center">
                <CheckIcon />{{ option?.option1 }}
              </li>
              <li class="flex gap-2 items-center">
                <CheckIcon />{{ option?.option2 }}
              </li>
              <li class="flex gap-2 items-center">
                <CheckIcon />{{ option?.option3 }}
              </li>
            </ul>
            <!-- button -->
            <div>
              <AppButton variant="outlined">BOOK NOW</AppButton>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  </div>
</template>

<style lang="scss" scoped>
.banner_cover_img {
  height: 30vh;
  width: 100%;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    height: 55vh;
  }
}
</style>
