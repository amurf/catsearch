<template>
  <div class="container">
    <logo />

    <div class='flex justify-center'>
      <input class='border shadow p-2 search' placeholder="Search.." />
      <button class='button--green' @click="showResults = true">Search</button>
    </div>

    <div v-if="showResults" v-for="breeder in results" class='w-full flex flex-col mt-2'>
      <div class='heading shadow bg-gray-200'>{{ breeder.name }}</div>
      <div class='border flex p-2'>

        <img src="http://placekitten.com/g/150/150" style="flex: 0 0 150px; height: 150px;" />

        <p class="text ml-2">
          {{ breeder.breed }}
          available in blue, pink, purple, green

          Located in Suburb
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { showResults: false };
  },

  computed: {
    results() {
      return this.$store.state.breeders.list;
    },
  },
}
</script>

<style scoped>
input.search {
  flex: 1 0 80%;
}
</style>
