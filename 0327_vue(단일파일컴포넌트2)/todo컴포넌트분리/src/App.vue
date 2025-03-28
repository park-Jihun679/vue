<script setup>
import { ref, computed, onMounted } from 'vue'
import './assets/main.css'
import InputContainer from './components/InputContainer.vue'

onMounted(() => {
  loadTodos()
})

// 필터 옵션 배열
const filterOptions = ['all', 'active', 'completed']

// localstrage 에 저장
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos.value))
}

// localstrage 에서 호출하는 함수
const loadTodos = () => {
  let list = localStorage.getItem('todos')
  list ? (todos.value = JSON.parse(list)) : []
}

// 날짜 포멧
const formatDate = (date) => {
  const pad = (num) => String(num).padStart(2, '0')
  return `${pad(date.getMonth() + 1)}/${pad(date.getDate())} ${pad(
    date.getHours(),
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

// ref
const filterOption = ref('all') // 현재 필터 상태

// computed
const activeCount = computed(() => {
  return todos.value.filter((todo) => !todo.completed).length
})
const completedCount = computed(() => {
  return todos.value.filter((todo) => todo.completed).length
})
const filteredTodos = computed(() => {
  if (filterOption.value == 'active') {
    return todos.value.filter((todo) => !todo.completed)
  } else if (filterOption.value == 'completed') {
    return todos.value.filter((todo) => todo.completed)
  } else {
    return todos.value
  }
})

// method
const changeFilter = (selectedFilter) => {
  filterOption.value = selectedFilter
}

const deleteTodo = (id) => {
  todos.value = todos.value.filter((todo) => todo.id !== id)
  saveTodos()
}

const deleteAllCompleted = () => {
  todos.value = todos.value.filter((todo) => !todo.completed)
  saveTodos()
}

const todos = ref([])
const addTodoHandler = (e) => {
  newTodo.value = e.addTodo
  saveTodos()
}
</script>

<template>
  <div id="app">
    <!-- 앱 제목-->
    <header class="hd">
      <h1>TodoList</h1>
    </header>

    <!-- 입력 폼 -->
    <InputContainer @addTodo="addTodoHandler" />

    <!-- 필터 탭 (v-for로 처리) -->
    <div class="filter-container">
      <button
        v-for="(option, index) in filterOptions"
        :key="index"
        :class="filterOption === option ? 'active' : ''"
        @click="changeFilter(option)"
      >
        {{ option === 'all' ? '전체' : option === 'active' ? '미완료' : '완료' }}
      </button>
    </div>

    <!-- 할 일 목록 -->
    <ul class="todo-list">
      <li class="empty" v-if="todos.length === 0">
        <i class="fa fa-paper-plane" aria-hidden="true"></i>
        <p>할 일을 입력해 주세요</p>
      </li>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
        :class="{ completed: todo.completed }"
        @click="todo.completed = !todo.completed"
      >
        <input type="checkbox" v-model="todo.completed" />
        <span>{{ todo.text }}</span>
        <time>{{ todo.createdAt }}</time>
        <i class="fa fa-trash" @click.stop="deleteTodo(todo.id)"></i>
      </li>
    </ul>

    <!-- 요약정보 -->
    <div class="todo-summary">
      <p>
        <span>미완료 항목</span><span>{{ activeCount }}</span>
      </p>
      <p>
        <span>완료 항목</span><span>{{ completedCount }}</span>
      </p>
      <button @click="deleteAllCompleted">완료된 항목 삭제</button>
    </div>
  </div>
</template>

<style scoped></style>
