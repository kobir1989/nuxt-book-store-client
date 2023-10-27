interface CurrentNumber {
  currentNumber: Ref<number>;
}

export const useAnimateCount = (totalCount: number): CurrentNumber => {
  const currentNumber = ref<number>(0);
  let timeout: string | number | NodeJS.Timeout | undefined;
  const count = () => {
    if (currentNumber.value <= totalCount) {
      currentNumber.value++;
    }
  };
  onMounted(() => {
    timeout = setInterval(count, 30);
  });

  onUnmounted(() => {
    clearInterval(timeout);
  });
  return { currentNumber };
};
