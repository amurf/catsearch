<template>
  <span>
    <page-title :title="$metaInfo.title" />

      <div class="content">
        <p>This is the content</p>
      </div>
  </span>
</template>

<script>

export default {
  head() {
    return {
      title: `Breeder Information`,
    };
  },

}
</script>

<style>
.content {
  @apply my-3 bg-orange-200;;
}
</style>
