<template>
  <span>
    <page-title :title="$metaInfo.title" />

      <div class="content">
        <p>Coot</p>
      </div>
  </span>
</template>

<script>
export default {
  head() {
    return {
      title: `Kittens`,
    };
  },
}
</script>

<style>
.content {
  @apply my-3 bg-orange-200;;
}
</style>
