<template>
  <ul>
    <li v-for="item in navItems">
      <nuxt-link :to="{ name: item.to }">
        {{ item.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { text: 'Breed information', to: 'example' },
        { text: 'Kings', to: 'example-kings' },
        { text: 'Queens', to: 'example-queens' },
        { text: 'Kittens', to: 'example-kittens' },
        { text: 'Gallery', to: 'example-gallery' },
        { text: 'Contact', to: 'example-contact' },
      ],
    };
  },
};
</script>
