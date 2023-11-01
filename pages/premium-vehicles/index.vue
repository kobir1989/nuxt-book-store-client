<script setup>
import { premiumProducts } from "~/constants/products";
useIntersection();

const selectedValue = ref({
  model: "",
  type: "",
  color: "",
});

const handleFilterUpdate = (selectedValueFromChild) => {
  selectedValue.value = { ...selectedValue.value, ...selectedValueFromChild };
};

const filteredProducts = computed(() => {
  const { model, type, color } = selectedValue.value;

  if (!model && !type && !color) {
    return premiumProducts; // Return all products if no filters are applied
  }

  return premiumProducts.filter((product) => {
    const isModelMatch = !model || product.model === model;
    const isTypeMatch = !type || product.type === type;
    const isColorMatch = !color || product.color === color;

    // Filter based on selected values
    return isModelMatch && isTypeMatch && isColorMatch;
  });
});
</script>

<template>
  <main class="pb-[5rem]">
    <main-nav :light-mood="true" />
    <section>
      <DynamicCover
        image-url="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/02/vehicle-list-title-img.jpg"
        lebel="Premium Wheels"
        text-align="center"
        :show-button="false"
      />
    </section>
    <main-container>
      <div
        class="pt-[5rem] pb-[2rem] flex lg:flex-row flex-col justify-between items-start gap-6 lg:items-center"
      >
        <section-title color="#141a1c">Browse Your Limousine</section-title>
        <filter-bar @update-filter="handleFilterUpdate" />
      </div>
      <div
        class="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-center lg:grid-cols-3"
      >
        <div v-for="product in filteredProducts" :key="product?.id">
          <ProductCardMd
            :title="product?.name"
            :description="product?.description"
            :price="product?.price"
            :ratings="product?.rating"
            :image-url="product?.image"
            :navigate-to="product?.id"
          />
        </div>
      </div>
    </main-container>
  </main>
</template>

<style lang="scss" scoped></style>
