<script setup>
import { emitter } from '@/mitt';

const emit = defineEmits(['send-message']);

const sendMessage = () => {
  emitter.emit('send-message', 'mitt로 메세지 보내기');
};
</script>

<template>
  <div style="border: 1px solid blue; padding: 10px">
    <h3>Sibling1</h3>
    <button @click="sendMessage">mitt로 메시지 보내기</button>
  </div>
</template>

<style scoped></style>
