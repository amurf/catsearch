<template>
  <div class='wrapper'>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  layout: 'breeder-site',
}
</script>

<style scoped>
.wrapper {
  @apply w-full px-2;
}

.content {
  @apply my-3 bg-orange-200;;
}

</style>
