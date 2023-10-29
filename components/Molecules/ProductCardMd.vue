<script setup>
const img = useImage();
defineProps({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
  ratings: {
    type: Number,
    default: 5,
  },
  navigateTo: {
    type: String,
    default: "/product-details",
  },
  imageUrl: {
    type: String,
    default:
      "https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/Vihecle-list-image-01.jpg",
  },
});
</script>

<template>
  <div class="bg-[#F6F5F1] px-6 py-8">
    <!-- card Image  -->
    <div class="w-full h-[15rem]">
      <NuxtImg
        class="w-full h-full object-contain"
        :src="imageUrl"
        :alt="title"
        format="webp"
        :placeholder="img(`${imageUrl}`, { h: 280, f: 'png', blur: 2, q: 50 })"
      />
    </div>
    <!-- card Contents flex-->
    <div class="flex flex-col gap-4 pt-6">
      <!-- card heading -->
      <div>
        <h4 class="text-[1.3rem] text-black-900 pb-1 line-clamp-1">
          {{ title }}
        </h4>
        <CustomRatings :rating="ratings" />
      </div>
      <!-- card description -->
      <p class="text-md text-black-500 line-clamp-3">
        {{ description }}
      </p>
      <!-- price -->
      <h5 class="text-[2rem] font-[600] text-black-900 relative ml-3">
        <span class="text-[1.2rem] font-[500] absolute top-2 -left-3">$</span
        >{{ price }}
        <span class="text-[1.2rem] font-[500]">/ hour</span>
      </h5>
      <!-- button -->
      <AppButton variant="outlined" txt-color="#141a1c" radius="0"
        ><NuxtLink :to="navigateTo"> MORE DETAILS </NuxtLink></AppButton
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
