<script setup>
import { timesArr } from "~/constants/timesArr";

// Erorr messages for each fealds
const errors = reactive({});
// Input Value
const bookingInputValue = reactive({
  name: "",
  phone: "",
  location: "",
  time: "",
  date: "",
  dropOfLocation: "",
});

// validate Input field and create error message for each field.
const validateField = (fieldName, value) => {
  switch (fieldName) {
    case "name":
      return value.trim() === "" ? "Invalid Name!" : "";
    case "phone":
      return !/^\d{11}$/.test(value) ? "Invalid phone number" : "";
    case "location":
      return value.trim().length < 4 ? "Invalid Location!" : "";
    case "time":
      return value === "" ? "Invalid Time" : "";
    case "date":
      return value === "" ? "Invalid Date" : "";
    case "dropOfLocation":
      return value.trim().length < 4 ? "Invalid Drop of Location" : "";
    default:
      return "";
  }
};

// Form Submit Hamdler
const submitForm = () => {
  // constructing error object, key will be the field name and value will be error message
  for (const key in bookingInputValue) {
    errors[key] = validateField(key, bookingInputValue[key]);
  }
  // Check if there are any error in the errors object.
  const hasError = Object.values(errors).some((err) => err !== "");
  if (!hasError) {
    // console.log(bookingInputValue);
  }
};

// get Error message ("STRING") to display.
const getErrors = (fieldName) => {
  return errors[fieldName];
};

// Remove Error field when user Start typing.
const removeError = (fieldName) => {
  errors[fieldName] = "";
};
</script>

<template>
  <form class="w-full flex flex-col gap-6" @submit.prevent="submitForm">
    <CustomInput
      v-model="bookingInputValue.name"
      name="name"
      placeholder="Write Your Full Name"
      type="text"
      :error="getErrors('name')"
      @input="removeError('name')"
    />
    <CustomInput
      v-model="bookingInputValue.phone"
      placeholder="Write Your Phone Number"
      type="number"
      name="phone"
      :error="getErrors('phone')"
      @input="removeError('phone')"
    />
    <CustomInput
      v-model="bookingInputValue.location"
      placeholder="What is Your Pickup Location?"
      type="text"
      name="pickupLocation"
      :error="getErrors('location')"
      @input="removeError('location')"
    />
    <div class="flex gap-6">
      <div>
        <select
          v-model="bookingInputValue.time"
          class="focus_input input_common_styles"
        >
          <option disabled value="">Select Time</option>
          <option v-for="(time, index) in timesArr" :key="index">
            {{ time }}
          </option>
        </select>
        <span class="input_error_styles">{{ getErrors("time") }}</span>
      </div>
      <CustomInput
        v-model="bookingInputValue.date"
        placeholder="Select Pickup Date"
        type="date"
        name="date"
        :min="new Date().toISOString().split('T')[0]"
        :error="getErrors('date')"
        @input="removeError('date')"
      />
    </div>
    <CustomInput
      v-model="bookingInputValue.dropOfLocation"
      placeholder="What is Your Drop of Location?"
      type="text"
      name="dropOfLocation"
      :error="getErrors('dropOfLocation')"
      @input="removeError('dropOfLocation')"
    />
    <div class="mt-4">
      <AppButton type="submit">SEND REQUEST</AppButton>
    </div>
  </form>
</template>

<style lang="scss" scoped>
select {
  width: 9rem;
  padding: 1.05rem;
  color: #d1d1d1;
}
</style>
