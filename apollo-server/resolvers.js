export default {
  Query: {
    beers: (root, args, { api }) => api.getRandomBeer(),
    beer: (root, args, { api }) => api.getRandomBeer()
  }
};
