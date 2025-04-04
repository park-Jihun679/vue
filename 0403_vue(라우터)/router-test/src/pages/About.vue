<script setup></script>

<template>
  <div class="card card-body">
    <h2>About</h2>
    <nav>
      <!-- 이름으로 link -->
      <router-link :to="{ name: 'class' }">학급 소개</router-link>
      <router-link to="/about/goal">목표</router-link>
      <router-view />
    </nav>
  </div>
</template>

<style scoped></style>
