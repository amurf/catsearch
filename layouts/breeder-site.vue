<template>
  <span>
  <nav class="flex items-center justify-between flex-wrap p-2">
    <div class="flex items-center flex-shrink-0 text-black mr-6">
      <span class="font-semibold text-xl tracking-tight">
        <nuxt-link to="/">Catsearch</nuxt-link>
      </span>
    </div>
    <div class="flex items-center w-auto">
      <div class="text-sm flex-grow"></div>
      <div>
      <nuxt-link to="/" class="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-teal hover:border-transparent hover:text-teal-500 hover:bg-white mt-0">Exit example</nuxt-link>
      </div>
    </div>
  </nav>
    <div class='h-screen flex flex-no-wrap'>
      <div class='sidebar'>
        <div class='brand'>
          Breeder name
        </div>
        <sidebar />
      </div>
      <div class='body'>
        <Nuxt />
      </div>
    </div>
  </span>
</template>

<style scoped>
/* probably doesnt work due to scoped */
body {
  overflow-y: hidden;
}

.sidebar {
  @apply p-2 bg-purple-300 flex-col;
  display: flex;
  flex: 0 0 25%;
}

.brand {
  @apply pb-5 bg-purple-500 uppercase;
}

.body {
  display: flex;
  flex: 0 0 75%;
  overflow-y: auto;
}

</style>
