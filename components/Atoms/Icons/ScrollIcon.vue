<script setup>
const { currentPosition } = useScrollPosition();
const circleRadius = 8.5; // Adjust this value as needed
</script>

<template>
  <svg
    class="qodef-svg--back-to-top"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="25px"
    height="25px"
    viewBox="0 0 18 18"
    style="enable-background: new 0 0 18 18"
    xml:space="preserve"
  >
    <circle
      fill="none"
      :stroke="currentPosition > 8017 ? 'currentColor' : 'transparent'"
      :r="circleRadius"
      cx="9"
      cy="9"
    ></circle>
    <circle
      fill="none"
      :stroke="currentPosition > 8017 ? 'transparent' : 'currentColor'"
      :r="circleRadius"
      cx="9"
      cy="9"
      :style="{
        strokeDasharray: Math.PI * 2 * circleRadius,
        strokeDashoffset: Math.floor(
          (currentPosition / 8017) * (Math.PI * 2 * circleRadius),
        ),
      }"
    ></circle>
    <circle fill="#9e7d4e" stroke="none" cx="9" cy="9" r="2"></circle>
  </svg>
</template>
