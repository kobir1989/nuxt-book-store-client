<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "",
  },
  details: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <SectionTitle>
      {{ title.split('<br />')[0] }} <br />
      {{ title.split('<br />')[1] }}
    </SectionTitle>
    <span
      name="tag"
      class="block text-md font-[600] mt-[1rem] gold_text_long_spacing"
    >
      {{ tag }}
    </span>
    <p
      name="details"
      class="text-gray-200 text-md mt-6 leading-8 tracking-[0.5px]"
    >
      {{ details }}
    </p>
  </div>
</template>
