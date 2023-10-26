<script setup>
import { ratingsArr } from "~/constants/ratingsArr";
</script>

<template>
  <div class="bg-black-800 py-[5rem]">
    <MainContainer>
      <div>
        <SectionTitle>
          We trive to meet the needs of our clients <br />
          and we value their opinions about our work
        </SectionTitle>
      </div>
      <div class="pt-[5rem]">
        <Swiper
          :modules="[SwiperAutoplay]"
          :breakpoints="{
            1280: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 2,
            },
            480: {
              slidesPerView: 1,
            },
          }"
          :space-between="30"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :autoplay="{
            delay: 3500,
          }"
        >
          <SwiperSlide
            v-for="rating in ratingsArr"
            :key="rating?.id"
            class="border_LR"
          >
            <div class="text-[#FFF] flex flex-col gap-2">
              <h3 class="text-[1.5rem]">{{ rating?.label }}</h3>
              <CustomRatings :rating="rating?.rating" />
              <p class="pt-4 text-gray-900">{{ rating?.description }}</p>
              <p class="pt-4 text-[1rem] uppercase text-gold-500">
                {{ rating?.customerName }}
              </p>
              <p class="text-sm text-gold-500">{{ rating?.address }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </MainContainer>
  </div>
</template>

<style lang="scss" scoped>
.border_LR {
  border-right: 1px solid #d1d1d1;
  min-height: 15rem;
  padding-right: 1rem;
}
</style>
