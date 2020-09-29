export const state = () => ({
  list: [
    { name: 'Cats R Us', breed: 'everything' },
    { name: 'Leopard', breed: 'Cheetoh' },
  ],
})

export const mutations = {
  add(state, item) {
    state.list.push(item);
  },
  remove(state, { breed }) {
    state.list.splice(state.list.indexOf(breed), 1)
  },
}
