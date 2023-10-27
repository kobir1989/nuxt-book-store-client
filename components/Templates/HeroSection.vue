<script setup>
import { covers } from "~/constants/covers";
const img = useImage();
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
    <!-- visible on big screens -->
    <div class="z-[10] w-full absolute inset-0 -translate-y-0">
      <HeroHeader />
    </div>

    <div
      class="z-[10] absolute top-[50%] md:left-[10%] left-[5%] -translate-y-[50%] intersection"
    >
      <section-title>
        Need to Rent a Luxury Car? <br />
        Send A Request</section-title
      >
      <p class="text-[1.2rem] text-[#FFF] mt-3">
        Complete the form below and we'll contact you as soon as possible
      </p>
      <div class="mt-8">
        <AppButton variant="outlined" @click="toggleModal">BOOK NOW</AppButton>
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
        <NuxtImg
          preload
          format="webp"
          :placeholder="img(`${cover}`, { h: 800, f: 'png', blur: 2, q: 50 })"
          :src="cover"
          class="fade-image"
        />
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
  z-index: 0;
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
