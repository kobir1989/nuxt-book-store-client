<script setup>
defineProps({
  imageUrl: {
    type: String,
    default:
      "https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-5.jpg",
  },
  lebel: {
    type: String,
    default: "",
  },
  textAlign: {
    type: String,
    default: "left",
  },
});
</script>

<template>
  <div
    class="h-[40vh] lg:h-[50vh] bg-center bg-no-repeat bg-cover"
    :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
  >
    <div
      class="max-w-[1280px] m-auto h-full flex flex-col gap-10 px-[2rem] justify-center"
      :class="{
        'items-end text-right': textAlign === 'right',
        'items-start': textAlign === 'left',
        'items-center': textAlign === 'center',
      }"
    >
      <SectionTitle
        >{{ lebel.split('<br />')[0] }}<br />
        {{ lebel.split(' <br />')[1] }}</SectionTitle
      >
      <div>
        <AppButton variant="outlined">VIEW MORE</AppButton>
      </div>
    </div>
  </div>
</template>
