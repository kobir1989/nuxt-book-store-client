import { ref, onMounted, onUnmounted } from "vue";

export const useScrollPosition = () => {
  const currentPosition = ref(0);
  const handleScroll = () => {
    currentPosition.value = window.scrollY;
  };
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  return { currentPosition };
};
