<script setup>
import Child from './Child4.vue';
</script>

<!-- 
scoped-slot
- 자식이 데이터를 넘겨준걸 이용해서 부모가 콘텐츠를 제공한다.

-->
<template>
  <div style="border: 2px solid blue; padding: 10px">
    <Child v-slot:item="{ item }">
      <h3>{{ item.name }}</h3>
    </Child>
  </div>
</template>

<style scoped></style>
