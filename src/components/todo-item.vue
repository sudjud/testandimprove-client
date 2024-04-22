<template>
  <div>
    {{ idx + 1 }}: {{ todo.text }}
    <button @click="deleteTodo(todo.id)">Удалить</button>
    <button @click="selectTodo(todo.id)">Редактировать</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

interface Props {
  idx: number;
  todo: {
    text: string;
    id: number;
  };
}

const props = defineProps<Props>();
</script>
