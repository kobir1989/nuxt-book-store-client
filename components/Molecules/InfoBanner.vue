<template>
  <div class="bg-black-800 text-gold-900 text-[4rem] py-[5rem] border_bottom">
    <MainContainer class="intersection">
      <div class="flex lg:flex-row flex-col justify-between gap-10 pb-[2rem]">
        <div class="flex_center">
          <LocationIcon />
          <h4 class="text-[1.1rem]">
            118-A Gulshan-2, <br />
            1200 Dhaka
          </h4>
        </div>
        <div class="flex_center">
          <CustomarCare />
          <h4 class="text-[1.1rem] pl-2">
            Phone - +880174000000 <br />
            Email: Kobir.h.ritu@gmail.com
          </h4>
        </div>
        <div class="flex_center">
          <ClockIcon />
          <h4 class="text-[1.1rem]">
            Mon-Sat 09:00-23:00, <br />Sunday is closed.
          </h4>
        </div>
      </div>
    </MainContainer>
  </div>
</template>

<style lang="scss" scoped>
.flex_center {
  @apply flex items-center gap-2;
}
</style>
