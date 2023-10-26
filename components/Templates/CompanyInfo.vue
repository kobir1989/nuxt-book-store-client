<script setup>
const img = useImage();
const clients = useAnimateCount(157);
const years = useAnimateCount(21);
</script>

<template>
  <div class="pt-[5rem] pb-[5rem]">
    <MainContainer>
      <div class="grid grid-cols-8 gap-8">
        <div class="col-span-8 sm:col-span-4 lg:col-span-2 max-w-[30rem]">
          <NuxtImg
            format="webp"
            src="/images/care.jpg"
            alt="care"
            width="600"
            height="1000"
            :placeholder="
              img(`/nuxt.svg`, { h: 1000, f: 'png', blur: 2, q: 50 })
            "
          />
        </div>
        <div class="col-span-8 sm:col-span-4 lg:col-span-2 max-w-[30rem]">
          <NuxtImg
            format="webp"
            src="/images/care-2.jpg"
            alt="care"
            width="600"
            height="1000"
            :placeholder="
              img(`/nuxt.svg`, { h: 1000, f: 'png', blur: 2, q: 50 })
            "
          />
        </div>
        <div class="col-span-8 lg:col-span-4 text-start lg:text-end">
          <SectionText
            title="Premium Cars Rental"
            tag="ONLY THE BEST"
            details="Discover a world of opulence, where every journey is a statement of prestige. Our exclusive fleet of premium cars sets a new standard for refinement and performance. Whether you're planning a special occasion, a business trip, or simply desire the extraordinary, Premium Cars Rental is your gateway to automotive excellence."
          />
          <div
            class="flex md:gap-[6rem] items-start lg:items-end justify-between md:justify-start lg:justify-end pt-[2rem] text-[#FFF]"
          >
            <div>
              <h2 class="text-[3.5rem] md:text-xl font-[600] relative">
                {{ years.currentNumber }}
                <span class="text-[2rem] md:text-[3rem] absolute top-0">+</span>
              </h2>
              <p class="mt-2 md:mt-4 md:text-[1.2rem] text-md">
                Years of experience
              </p>
            </div>
            <div>
              <h2 class="text-[3.5rem] md:text-xl font-[600] relative mr-6">
                {{ clients.currentNumber }}
                <span class="text-[2rem] md:text-[3rem] absolute bottom-1"
                  >k</span
                >
              </h2>
              <p class="mt-2 md:mt-4 md:text-[1.2rem] text-md">
                Satisfied clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  </div>
</template>

<style lang="scss" scoped></style>
