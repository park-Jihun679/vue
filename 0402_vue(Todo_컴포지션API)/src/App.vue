<script setup>
import FilterContainer from './components/FilterContainer.vue'
import HeaderLayout from './components/HeaderLayout.vue'
import InputContainer from './components/InputContainer.vue'
import TodoItem from './components/TodoItem.vue'
import SummaryContainer from './components/SummaryContainer.vue'

import { computed, onMounted, ref } from 'vue'
import { userTodos } from './api/useTodos'
const {
  todos,
  loading,
  error,
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  setFilter,
  deleteCompletedTodos,
} = userTodos()

onMounted(() => {
  fetchTodos()
})

const currentFilter = ref('all')

function handleAddTodo(newTodo) {
  addTodo(newTodo)
}

function handleUpdateTodo(updatedTodo) {
  updateTodo(updatedTodo)
}

function handleDeleteTodo(id) {
  deleteTodo(id)
}
const handleDeleteCompletedTodos = () => {
  deleteCompletedTodos()
}

function handleFilterChange(filter) {
  setFilter(filter)
}

const filteredTodos = computed(() => {
  if (currentFilter.value === 'active') {
    return todos.value.filter(todo => !todo.computed)
  } else if (currentFilter.value === 'completed') {
    return todos.value.filter(todo => todo.computed)
  }
  return todos.value
})

const activeTodoCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length
})
const completedTodoCount = computed(() => {
  return todos.value.filter(todo => todo.completed).length
})

console.log('App ---', loading, error)
</script>

<template>
  <HeaderLayout title="작심" />
  <InputContainer @add-todo="handleAddTodo" />
  <FilterContainer @update-filter="handleFilterChange" />
  <div v-if="loading">로딩중...</div>
  <div v-else-if="error">
    <p>에러 {{ error }}</p>
    <button @click="fetchTodos">새로고침</button>
  </div>
  <ul v-else class="todo-list">
    <TodoItem
      v-for="todo in filteredTodos"
      :key="todo.id"
      :todo="todo"
      @update-todo="handleUpdateTodo"
      @delete-todo="handleDeleteTodo"
    />
  </ul>
  <SummaryContainer
    :activeTodoCount="activeTodoCount"
    :completedTodoCount="completedTodoCount"
    @delete-completed="handleDeleteCompletedTodos"
  />
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
