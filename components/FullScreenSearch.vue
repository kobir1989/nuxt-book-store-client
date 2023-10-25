<script setup>
const isSearchOpen = useSearchModal();
const inputFocus = ref(null);

const closeSearch = () => {
  isSearchOpen.value = false;
};

onUpdated(() => {
  inputFocus.value.focus();
});
</script>

<template>
  <Transition name="slide-up">
    <div
      class="custom_cursor z-[100] w-[100vw] h-[100vh] fixed bg-[#10171ae1] backdrop-blur-sm flex items-center justify-center"
      @click="closeSearch"
    >
      <form
        class="flex align-center justify-center w-[80%] lg:w-[50%] border-b border-[#b1b1b1]"
        @click.stop
      >
        <input
          ref="inputFocus"
          class="w-full py-3 md:text-[2rem] text-md text-[#FFF]"
          placeholder="Search for..."
          type="text"
        />
        <button class="text-[#FFF] text-[1.5rem] md:text-[3rem]">
          <SearchIcon />
        </button>
      </form>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.custom_cursor {
  cursor:
    url("../assets/cursor.svg") 8 8,
    auto;
}

form {
  cursor: none;
}
input {
  transition: all 1s ease-in-out;
  background: transparent;
  z-index: 55;
  &::placeholder {
    color: #fff;
    letter-spacing: 1px;
  }
}
</style>
