import { ref, onMounted, onUnmounted } from "vue";

interface Position {
  currentPosition: Ref<number>;
}

export const useScrollPosition = (): Position => {
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
