<script setup>
import { onMounted } from 'vue';
import { useStudent } from '@/api/Student.js';
import StudentCard from '@/components/StudentCard.vue';

const { students, error, fetchAllStudents } = useStudent();
onMounted(() => {
  fetchAllStudents();
});
</script>

<template>
  <div>
    <h2>KB-19기 학생들</h2>
    <div>
      <div v-for="student in students" :key="student.id">
        <StudentCard :student="student"/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
