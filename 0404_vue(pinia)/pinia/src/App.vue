<script setup>
import Counter from './components/Counter.vue';
import LikeStore from './components/LikeStore.vue';
import { useCounterStore } from './stores/counter';
import { useLikeStore } from './stores/like';

const counter = useCounterStore();
const likeStore = useLikeStore();
</script>

<template>
  <div>
    <h1>Pinia 상태관리 예제</h1>
    <hr />
    <h2>좋아요 갯수 : {{ likeStore.like }}</h2>
    <h2>좋아요 갯수 뻥튀기 : {{ likeStore.fiveTimesLike }}</h2>
    <LikeStore />
    <hr />
    <h2>App에서 보는 Counter : {{ counter.count }}</h2>

    <Counter />
  </div>
</template>

<style scoped></style>
