<script setup>
const emits = defineEmits(['check-changed']);
const props = defineProps({
  id: String,
  checked: Boolean,
  label: String,
});

const checkChange = (e) => {
  const newChecked = e.target.checked;
  emits('check-changed', { id: props.id, checked: newChecked });
};
</script>

<template>
  <div>
    <input
      type="checkbox"
      :value="id"
      :checked="checked"
      @change="checkChange"
    />
    <span
      v-if="checked === true"
      style="color: blue; text-decoration: underline"
    >
      <i>{{ label }}</i>
    </span>
    <span v-else style="color: gray">{{ label }}</span>
  </div>
</template>

<style scoped></style>
