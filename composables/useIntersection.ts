export const useIntersection = (): void => {
  let observer: IntersectionObserver;
  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (
          entry.intersectionRatio > 0 &&
          !entry.target.classList.contains("slide__up__animation")
        ) {
          entry.target.classList.add("slide__up__animation");
          entry.target.setAttribute("data-animated", "true");
        }
      });
    });
    document.querySelectorAll(".intersection").forEach((element) => {
      if (!element.getAttribute("data-animated")) {
        observer.observe(element);
      }
    });
  });
  // Clean up
  onBeforeUnmount(() => {
    observer.disconnect();
  });
};
