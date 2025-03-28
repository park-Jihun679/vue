<script setup></script>

<template>
  <div class="child">
    <h2>Child1</h2>
  </div>
</template>

<!--
scoped 속성을 사용하면 해당 컴포넌트에서만 적용되는 스타일이 된다.
-> 특정 속성을 만들어서 해당 컴포넌트에만 등록될 수 있게 바꾸어줌
ex) data-v-xxxxxx
-->
<style scoped>
.child {
  background-color: yellow;
  border: solid 1px black;
  margin: 1.5rem;
  padding: 1rem;
}
</style>
