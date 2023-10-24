<script setup>
import { covers } from "../constants/covers";
const isModal = ref(false);

// Toggle Booking From Modal
const toggleModal = () => {
  isModal.value = !isModal.value;
};
// Close Booking Form Modal
const closeModal = () => {
  isModal.value = false;
};
</script>

<template>
  <section class="overflow-x-hidden relative">
    <div class="z-[10] w-full absolute inset-0 -translate-y-0">
      <HeroHeader />
    </div>

    <div class="z-[10] absolute top-[50%] left-[10%] -translate-y-[50%]">
      <h1 class="text-lg text-[#FFF]">
        Need to Rent a Luxury Car? <br />
        Send A Request
      </h1>
      <p class="text-[1.2rem] text-[#FFF] mt-3">
        Complete the form below and we'll contact you as soon as possible
      </p>
      <div class="mt-8">
        <AppButton @click="toggleModal">BOOK NOW</AppButton>
      </div>
    </div>

    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectFade]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="(cover, index) in covers" :key="index">
        <NuxtImg preload format="webp" :src="cover" class="fade-image" />
      </SwiperSlide>
    </Swiper>
    <PopupModal :is-shown="isModal" @close="closeModal">
      <BookingForm />
    </PopupModal>
  </section>
</template>

<style lang="scss" scoped>
img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.fade-image {
  opacity: 0;
  transform: scale(1);
  transition: all 0.8s cubic-bezier(0.25, 0.45, 0.45, 0.95);
}

.swiper-slide-active .fade-image {
  opacity: 1;
  transform: scale(1.1);
  transition: all 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  z-index: 0;
}
</style>
