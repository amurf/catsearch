<template>
  <nav class="flex items-center justify-between flex-wrap p-2">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <span class="font-semibold text-xl tracking-tight">
        <nuxt-link to="/">Catsearch</nuxt-link>
      </span>
    </div>
    <div class="flex items-center w-auto">
      <div class="text-sm flex-grow"></div>
      <div>
        <nuxt-link to="/example" class="nav--button">Example site</nuxt-link>
        <nuxt-link to="/signup" class="nav--button">Add your cat</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<style>

.nav--button {
  @apply inline-block text-sm px-4 py-2 leading-none border rounded text-black mt-0;
}

.nav--button:hover {
  @apply border-transparent text-teal-500 bg-white;
}

</style>
