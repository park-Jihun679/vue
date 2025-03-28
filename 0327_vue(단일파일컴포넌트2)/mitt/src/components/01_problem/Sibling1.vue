<script setup>
const emits = defineEmits(['send-message']);

const sendMessage = () => {
  emits('send-message', '안녕 Sibling2! 나는 Silbling1이야');
};
</script>

<template>
  <div style="border: 1px solid blue; padding: 10px">
    <h3>Sibling1</h3>
    <button @click="sendMessage">Sibling2에게 메시지 보내기</button>
  </div>
</template>

<style scoped></style>
