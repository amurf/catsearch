<template>
  <span>
    <page-title :title="$metaInfo.title" />

      <div class="content">
        <p>Pretty pictures</p>
      </div>
  </span>
</template>

<script>
export default {
  head() {
    return {
      title: `Gallery`,
    };
  },
}
</script>

<style scoped>
.content {
  @apply my-3 bg-orange-200;;
}
</style>
