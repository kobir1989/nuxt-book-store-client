<script setup>
defineEmits(["update:modelValue"]);
defineProps({
  type: {
    type: String,
    default: "",
  },

  placeholder: {
    type: String,
    default: "Placeholder",
  },
  modelValue: {
    type: String,
    default: "",
  },
  error: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  min: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="w-full">
    <input
      :name="name"
      :min="min"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="input_common_styles focus_input"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span v-show="error" class="input_error_styles">{{ error }}</span>
  </div>
</template>

<style lang="scss" scoped>
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}
input[type="date"]::-webkit-datetime-edit,
input[type="text"]::placeholder,
input[type="number"]::placeholder {
  color: #d1d1d1;
}
</style>
