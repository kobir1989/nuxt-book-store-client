<script setup>
import { pricingArr } from "~/constants/pricingArr";
</script>

<template>
  <MainContainer>
    <!-- title & description -->
    <div class="flex flex-col lg:flex-row gap-[2rem] mt-[5rem]">
      <SectionTitle
        >What We Provide Is The Luxury Transport And Most Comfortable
        Experience.</SectionTitle
      >
      <div>
        <p class="text-gray-200 leading-7 tracking-[0.5px]">
          Experience the epitome of luxury in transportation. We offer the most
          comfortable and opulent journeys, setting new standards in travel.
          Discover a world of relaxation and style with us.
        </p>
        <p
          class="mt-6 text-gold-900 font-inconso text-md font-bold tracking-[2px] flex items-center gap-3"
        >
          <span class="text-[3rem]">
            <CustomarCare />
          </span>
          CALL CENTER: +880174000000
        </p>
      </div>
    </div>
    <!-- Product Cards  -->
    <div
      class="mt-[5rem] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-items-center gap-x-4 gap-y-12"
    >
      <div
        v-for="product in pricingArr"
        :key="product.id"
        class="max-w-[24rem]"
      >
        <PricingCard
          :name="product?.name"
          :lebel="product?.label"
          :description="product?.description"
          :image="product?.image"
          :rating="product?.rating"
          :price="product?.price"
        />
      </div>
    </div>
  </MainContainer>
</template>

<style lang="scss" scoped></style>
