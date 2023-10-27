interface WindowSize {
  width: Ref<number>;
}

export const useWindowWidth = (): WindowSize => {
  const width = ref<number>(0);
  const updateWindowSize = () => {
    width.value = window.innerWidth;
  };
  onMounted(() => {
    width.value = window.innerWidth;
    window.addEventListener("resize", updateWindowSize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", updateWindowSize);
  });

  return { width };
};
