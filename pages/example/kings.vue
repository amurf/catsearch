<template>
  <span>
    <page-title :title="$metaInfo.title" />

      <div class="content">
        <p>The king</p>
      </div>
  </span>
</template>

<script>
export default {
  head() {
    return {
      title: `Kings`,
    };
  },
}
</script>

<style>
.content {
  @apply my-3 bg-orange-200;;
}
</style>
