<template>
  <span>
    <page-title :title="$metaInfo.title" />

      <div class="content">
        <p>The queens be here</p>
      </div>
  </span>
</template>

<script>
export default {
  head() {
    return {
      title: `Queens`,
    };
  },
}
</script>

<style>
.content {
  @apply my-3 bg-orange-200;;
}
</style>
