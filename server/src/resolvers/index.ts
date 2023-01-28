const { createTag } = require("./Tag/index");
const { tag } = require("./Tag/query");

export const resolvers = {
  Query: { tag },
  Mutation: { createTag },
};
