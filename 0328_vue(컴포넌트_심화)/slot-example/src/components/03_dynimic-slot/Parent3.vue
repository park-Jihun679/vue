<script setup>
import Child from './Child3.vue';
import { ref } from 'vue';

const slotName = ref('header');

const changeFooter = () => {
  slotName.value = 'footer';
};
const changeDeafutl = () => {
  slotName.value = 'default';
};
const changeHeader = () => {
  slotName.value = 'header';
};
</script>

<template>
  <div style="border: 2px solid blue; padding: 10px">
    <Child :slotName="slotName">
      <template #header>
        <p>헤더입니다.</p>
      </template>
      <template #default> <p>기본슬롯입니다.</p> </template>
      <template #footer> <p>푸터입니다.</p> </template>
    </Child>
  </div>
  <button @click="changeFooter">슬롯 이름 footer로 변경</button>
  <button @click="changeDeafutl">슬롯 이름 default로 변경</button>
  <button @click="changeHeader">슬롯 이름 header로 변경</button>
</template>

<style scoped></style>
