<script setup>
useIntersection();
</script>

<template>
  <main class="bg-black-900">
    <!-- Hero Section  -->
    <HeroSection />
    <!-- Product info section  -->
    <div>
      <ProductInfo />
    </div>
    <!-- Transportation Details section -->
    <TransportationDetails />
    <!-- Premium Drivers Section -->
    <PremiumDrivers />
    <!-- Discount Banner section (*Full screen width) -->
    <DynamicCover
      image-url="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-5.jpg"
      lebel="Do You Need To Rent A Car? <br />
        See Our Offers"
      text-align="right"
    />
    <!-- Team info section  -->
    <TeamInfo />
    <!-- Company info section  -->
    <CompanyInfo />
    <!-- Testimonials Section (*customar ratings with carousal) -->
    <TestimonialsSection />
    <!-- Pricing details section -->
    <PricingDetails />
    <!-- Discount banner section (*full screen width) -->
    <DynamicCover
      image-url="https://luxedrive.qodeinteractive.com/wp-content/uploads/2023/01/h1-img-13.jpg"
      lebel="Get 15% Off Your Rental! <br />
       Choose Your Model"
    />
    <InfoBanner />
  </main>
</template>

<style lang="scss" scoped></style>
