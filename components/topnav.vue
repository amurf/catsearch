<template>
  <nav class="flex items-center justify-between flex-wrap p-2">
    <div class="flex items-center flex-shrink-0 text-blacl mr-6">
      <span class="font-semibold text-xl tracking-tight">
        <nuxt-link to="/">Catsearch</nuxt-link>
      </span>
    </div>
    <div class="flex items-center w-auto">
      <div class="text-sm flex-grow"></div>
      <div>
        <nuxt-link to="/signup" class="inline-block text-sm px-4 py-2 leading-none border rounded text-blacl border-teal hover:border-transparent hover:text-teal-500 hover:bg-white mt-0">Add your cat</nuxt-link>
      </div>
    </div>
  </nav>
</template>
