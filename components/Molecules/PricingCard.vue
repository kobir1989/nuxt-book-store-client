<script setup>
const img = useImage();
defineProps({
  name: {
    type: String,
    default: "Name",
  },
  price: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "bmw.jpg",
  },
  description: {
    type: String,
    default: "Description",
  },
  lebel: {
    type: String,
    default: "Lebel",
  },
  rating: {
    type: Number,
    default: 5,
  },
});
</script>

<template>
  <div class="w-full">
    <div
      class="top_layer_hover relative transition_03s w-full h-[420px] md:h-[380px] lg:h-[520px]"
    >
      <NuxtImg
        class="w-full h-full object-cover"
        :src="`/images/${image}`"
        :alt="lebel"
        format="webp"
        :placeholder="
          img(`/images/${image}`, { h: 500, f: 'png', blur: 2, q: 50 })
        "
      />
      <div class="price_details px-6 absolute top-1/2 left-1/2 w-[100%]">
        <h2 class="text-[#FFF] text-[1.8rem] font-[600]">{{ lebel }}</h2>
        <p class="mt-2">
          <span class="text-gray-200 text-[1.2rem] font-[600]">from </span
          ><span class="text-gold-900 text-[2rem] font-[700]"
            >${{ price }}
          </span>
          <span class="text-gray-200 text-[1.2rem] font-[600]"> (hour)</span>
        </p>
        <p class="text-gray-200 mt-4 line-clamp-3">
          {{ description }}
        </p>
      </div>
    </div>
    <figcaption class="mt-5 flex flex-col gap-2">
      <h2 class="text-[#FFF] text-[1.5rem] line-clamp-1">
        {{ name }}
      </h2>
      <CustomRatings :rating="rating" />
    </figcaption>
  </div>
</template>

<style lang="scss" scoped>
.top_layer_hover {
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: #141a1cb4;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }
}
.top_layer_hover:hover::before {
  opacity: 1;
  transition: all 0.3s ease-in-out;
}
.price_details {
  opacity: 0;
  transition: all 0.3s ease-in-out;
}
.top_layer_hover:hover .price_details {
  opacity: 1;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease-in-out;
}
</style>
