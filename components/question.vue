<template>

  <div class='question'>
    <label>{{ label }}</label>
    <slot></slot>
  </div>

</template>

<script>
export default {
  props: ['label'],
}
</script>

<style scoped>
.question {
  display: flex;
  flex-direction: column;
}

.question label {
  font-size: 2em;
}

</style>

