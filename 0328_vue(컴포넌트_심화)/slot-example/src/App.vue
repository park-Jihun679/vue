<script setup>
import Parent from './components/04_scoped-slot/Parent4.vue';
</script>

<!--
Slot
- 부모의 컴포넌트에서 자식으로 콘텐츠를 전달하는 기능
- 컴포넌트를 더 유연하고, 재사용 가능하게 만들기 위해
-->
<template>
  <div>
    <Parent />
  </div>
</template>

<style scoped></style>
