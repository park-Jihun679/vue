<script setup>
// defineProps
// 부모 컴포넌트에서 전달받은 프로퍼티를 정의하는 함수
defineProps({
  id: [Number, String], // 문자열과 숫자열만 가능
  name: String, // 문자열만 가능
  checked: {
    type: Boolean,
    default: false,
    required: false, // 필수 여부 (default: true)
  },
})
</script>

<template>
  <li><input type="checkbox" :checked="checked" />{{ name }}</li>
</template>

<style scoped></style>
