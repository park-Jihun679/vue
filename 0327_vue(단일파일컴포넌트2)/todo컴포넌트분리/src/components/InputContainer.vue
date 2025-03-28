<script setup>
const newTodo = ref('') // 새 할 일 입력값

const addTodo = () => {
  if (newTodo.value.length > 2) {
    todos.value.push({
      id: Date.now(),
      text: newTodo.value,
      completed: false,
      createdAt: formatDate(new Date()),
    })
    newTodo.value = ''
  }
}
const emit = defineEmits(['addTodo'])
</script>

<template>
  <div class="input-container">
    <input
      type="text"
      placeholder="할 일을 입력하세요"
      v-model.trim="newTodo"
      @keyup.enter="emit('addTodo', { newTodo })"
    />
    <button @click="emit('addTodo', { newTodo })">추가</button>
  </div>
</template>

<style scoped></style>
