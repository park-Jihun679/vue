<script setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();
const { increse, reset } = counter;
</script>
<template>
  <div>
    <h3>{{ counter.count }}</h3>
    <button @click="increse">증가</button>
    <button @click="reset">초기화</button>
  </div>
</template>
