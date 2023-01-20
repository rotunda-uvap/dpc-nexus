var get = require('lodash/get');

module.exports = ({ actions }) => {
  const {createTypes } = actions;

// Create custom schema interfaces and extend types.
const typeDefs = `
type SearchableItem implements Node @dontInfer {
  id: ID!
  nid: String
  date: String
  title: String
  pub: String
  hero: String
  avatar: String
  baseURL: String
  body: String
  author: String
  headnote: String
  recipient: String
  source: String
  collection: String
}



`;

createTypes(typeDefs);
};
