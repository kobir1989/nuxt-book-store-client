<script setup>
const img = useImage();
const isVideoModal = ref(false);
const openVideoModal = () => {
  isVideoModal.value = !isVideoModal.value;
};

const closeVideoModal = () => {
  isVideoModal.value = false;
};
</script>

<template>
  <div class="bg-black-800 mt-[5rem] pb-[5rem]">
    <main-container>
      <div class="pt-[5rem] border_bottom">
        <section-title
          >Ride To Destinations <br />
          With Maximum Comfort
        </section-title>
        <span
          class="block text-gold-900 text-md font-[600] tracking-[2px] mt-[1rem]"
          >FINEST TRANSPORT</span
        >
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[4rem] pt-[2rem]">
        <div>
          <h2 class="text-[1.5rem] text-[#FFF]">No Delays</h2>
          <p class="text-gray-200 text-md mt-4">
            Arrive at your destination without any delays. Our efficient
            services ensure you reach your destination on time, every time. Your
            journey is our priority.
          </p>
        </div>
        <div class="mb-[5rem]">
          <h2 class="text-[1.5rem] text-[#FFF]">Premium Support</h2>
          <p class="text-gray-200 text-md mt-4">
            Experience top-notch support that is second to none. Our dedicated
            team is here to assist you at every step of your journey. Your
            comfort and satisfaction are our primary focus.
          </p>
        </div>
      </div>
      <div class="w-full relative">
        <NuxtImg
          src="/images/driver.jpg"
          format="webp"
          width="1280"
          height="600"
          :placeholder="img(`/nuxt.svg`, { h: 600, f: 'png', blur: 2, q: 50 })"
        />
        <button
          class="play_button lg:h-[10rem] h-[6rem] lg:w-[10rem] w-[6rem] text-[#7e7d7d] flex items-center justify-center text-[3rem] lg:text-[4rem]"
          @click="openVideoModal"
        >
          <PlayIcon />
        </button>
      </div>
      <!-- Video Player Modal  -->
      <PopupModal :is-shown="isVideoModal" @close="closeVideoModal">
        <iframe
          v-if="isVideoModal"
          class="rounded-lg"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/8cUL_EkO7mU?si=nGFoZgk3d4qF7P4h"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </PopupModal>
    </main-container>
  </div>
</template>

<style lang="scss" scoped>
.border_bottom {
  padding-bottom: 2rem;
  border-bottom: 1px solid #5a5a5a;
}
.play_button {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  border: 2px solid #7e7d7d;
  border-radius: 50%;
  & svg {
    transition: all 0.6s ease-in-out;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transform: rotate(0deg);
    border: 2px solid #7e7d7d;
    border-top: 2px solid #fff;
    z-index: 10;
    transition: all 0.6s ease-in-out;
    opacity: 0;
  }
}
.play_button:hover::before {
  opacity: 1;
  transform: rotate(360deg);
  transition: all 0.6s ease-in-out;
}
.play_button:hover {
  svg {
    color: #fff;
    transition: all 0.6s ease-in-out;
    transform: rotate(-360deg);
  }
}
</style>
