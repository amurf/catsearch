<template>
  <span>
    <page-title :title="$metaInfo.title" />

      <div class="content">
        <p>contactformhere</p>
      </div>
  </span>
</template>

<script>
export default {
  head() {
    return {
      title: `Contact`,
    };
  },
}
</script>

<style>
.content {
  @apply my-3 bg-orange-200;;
}
</style>
