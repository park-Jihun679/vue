import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLikeStore = defineStore('like', () => {
  const like = ref(0);

  const fiveTimesLike = computed(() => like.value * 5);

  const increse = () => {
    like.value++;
  };

  const reset = () => {
    like.value = 0;
  };

  return { like, fiveTimesLike, increse, reset };
});
