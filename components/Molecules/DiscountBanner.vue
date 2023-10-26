<script setup>
const img = useImage();
defineProps({
  lebel: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="relative">
    <div class="w-full">
      <NuxtImg
        src="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-13.jpg"
        format="webp"
        width="100%"
        height="400"
        :alt="lebel"
        :placeholder="
          img(
            `https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-13.jpg`,
            { h: 400, f: 'png', blur: 2, q: 50 },
          )
        "
      />
      <div class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <SectionTitle
          >{{ lebel.split('<br />')[0] }}<br />
          {{ lebel.split('<br />')[1] }}</SectionTitle
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
