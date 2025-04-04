<script setup>
import { useLikeStore } from '@/stores/like';

const likeStore = useLikeStore();
const { increse, reset } = likeStore;
</script>
<template>
  <div>
    <!-- <h3>{{ likeStore.like }}</h3> -->
    <button @click="increse">증가</button>
    <button @click="reset">초기화</button>
  </div>
</template>
