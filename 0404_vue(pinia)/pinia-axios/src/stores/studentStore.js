import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import apiClient from '@/utils/axios';

export const useStudentStore = defineStore('studentStore', () => {
  // state
  const students = ref([]);

  // action
  const fetchStudents = async () => {
    try {
      const response = await apiClient.get('./students');
      students.value = response.data;
    } catch (err) {
      console.log('학생정보 로딩에러 : ', err);
    }
  };

  // getter
  const studentCount = computed(() => students.value.length);

  return { students, fetchStudents, studentCount };
});
