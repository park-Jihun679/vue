<script setup>
// defineProps
// 부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수
defineProps({
  idol: {
    type: Object,
    required: true,
    // validator
    // Vue 공식기능
    // 부모가 prop을 전달할 때 마다 함수가 호출됨
    validator: (value) => {
      return (
        (typeof value.id === 'number' || typeof value.id === 'string') &&
        typeof value.name === 'string' &&
        typeof value.checked === 'boolean'
      )
    },
  },
})
</script>

<template>
  <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
</template>

<style scoped></style>
