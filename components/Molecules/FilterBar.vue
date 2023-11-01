<script setup>
import {
  vehicleColor,
  vehicleModels,
  vehicleTypes,
} from "~/constants/VheicleFilterOptions";

const emit = defineEmits(["update-filter"]);

const updateSelectedValue = (key, value) => {
  const selectedValue = {
    model: "",
    type: "",
    color: "",
  };
  selectedValue[key] = value;
  emit("update-filter", selectedValue);
};
</script>

<template>
  <form class="flex flex-col md:flex-row gap-6 font-inconso w-full md:w-auto">
    <!-- Vehicle Types -->
    <div class="border_animation">
      <select
        class="options_styles"
        @change="updateSelectedValue('type', $event.target.value)"
      >
        <option value="">Vehicle Type</option>
        <option
          v-for="vTypes in vehicleTypes"
          :key="vTypes?.id"
          :value="vTypes?.value"
          class="select_styles"
        >
          {{ vTypes?.lebel }}
        </option>
      </select>
    </div>
    <!-- Vehicles Model -->
    <div class="border_animation">
      <select
        class="options_styles"
        @change="updateSelectedValue('model', $event.target.value)"
      >
        <option value="">Vehicle Model</option>
        <option
          v-for="vModel in vehicleModels"
          :key="vModel?.id"
          :value="vModel?.value"
        >
          {{ vModel?.lebel }}
        </option>
      </select>
    </div>
    <!-- Vehicles Color -->
    <div class="border_animation">
      <select
        class="options_styles"
        @change="updateSelectedValue('color', $event.target.value)"
      >
        <option value="">Vehicle Color</option>
        <option
          v-for="vColor in vehicleColor"
          :key="vColor?.id"
          :value="vColor?.value"
        >
          {{ vColor?.lebel }}
        </option>
      </select>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.options_styles {
  @apply border-b border-gray-200 p-4 w-full;
  outline: none;
  cursor: pointer;
  & .select_styles:part(button) {
    font-size: 2rem;
  }
}
.border_animation {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 0;
    background: var(--black);
    transition: all 0.4s ease-in-out;
  }
}
.border_animation:hover::before {
  width: 100%;
  transition: all 0.4s ease-in-out;
}
</style>
