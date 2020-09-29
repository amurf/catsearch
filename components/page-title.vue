<template>
  <div class="page-title">
    <h1>{{ title }} </h1>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style scoped>
.page-title {
  @apply py-2 bg-purple-300;
}
</style>
