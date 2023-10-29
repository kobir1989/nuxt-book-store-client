<script setup>
const img = useImage();
</script>
<template>
  <div class="pt-[5rem] pb-[5rem]">
    <MainContainer class="intersection">
      <div class="grid grid-cols-8 gap-8">
        <div class="col-span-8 lg:col-span-4">
          <SectionText
            title="We Care Of Your Safety <br />
          And Convenience"
            details="Safety is at the core of what we do. Our drivers are well-versed in road safety protocols and are equipped to make your journey secure and worry-free. Your well-being is our utmost concern."
            tag="PREMIUM DRIVERS"
          />
          <div class="mt-10">
            <AppButton variant="outlined">BOOK NOW</AppButton>
          </div>
        </div>
        <div
          class="col-span-8 sm:col-span-4 lg:col-span-2 max-w-[500] max-h-[600]"
        >
          <NuxtImg
            class="w-full h-full"
            format="webp"
            src="/images/care.jpg"
            alt="care"
            width="600"
            height="800"
            :placeholder="
              img(`/images/care.jpg`, { h: 800, f: 'png', blur: 2, q: 50 })
            "
          />
        </div>
        <div
          class="col-span-8 sm:col-span-4 lg:col-span-2 max-w-[500] max-h-[600]"
        >
          <NuxtImg
            class="w-full h-full"
            format="webp"
            src="/images/care-2.jpg"
            alt="care"
            width="600"
            height="800"
            :placeholder="
              img(`/images/care-2.jpg`, { h: 800, f: 'png', blur: 2, q: 50 })
            "
          />
        </div>
      </div>
    </MainContainer>
  </div>
</template>
