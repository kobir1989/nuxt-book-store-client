<script setup>
import { teamsArr } from "~/constants/teamsArr";
const img = useImage();
</script>

<template>
  <div class="bg-black-800 pt-[5rem] pb-[5rem]">
    <MainContainer class="intersection">
      <div class="border_bottom">
        <SectionTitle>Our Proffesional Chauffeurs</SectionTitle>
        <span
          class="block text-gold-900 text-md font-[600] tracking-[2px] mt-[1rem]"
          >MEET OUR TEAM</span
        >
      </div>
      <div class="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-6">
        <div v-for="team in teamsArr" :key="team?.id" class="pt-[3rem]">
          <div class="max-w-[25rem]">
            <NuxtImg
              :src="`/images/${team?.image}`"
              :alt="team?.name"
              format="webp"
              height="500"
              width="450"
              :placeholder="
                img(`/images/${team?.image}`, {
                  h: 450,
                  f: 'png',
                  blur: 2,
                  q: 50,
                })
              "
            />
          </div>
          <div class="text-[#FFF] flex flex-col gap-2 pt-[1.5rem]">
            <h3 class="font-[600] text-[1.3rem]">{{ team?.name }}</h3>
            <p
              class="text-sm text-gold-500 tracking-[2px] flex items-center gap-2"
            >
              <span class="text-[1.5rem]"><PhoneIcon /></span> {{ team?.phone }}
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  </div>
</template>

<style lang="scss" scoped></style>
