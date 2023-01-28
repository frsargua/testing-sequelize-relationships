const { gql } = require("@apollo/server");

export const typeDefs = `

type Query {
    tag(tagId: ID!): Tag
  }

type Tutorial{
  description: String
  title: String
}

type Tag{
  name: String
  tutorials:[Tutorial]
}

input CreateTagInput{
  name: String
}
input CreateTutorialInput{
  description: String
  title: String
}

input TagInputData {
  tutorialInput:CreateTutorialInput
  tagInput:CreateTagInput
}
  type Mutation {
    createTag(input: TagInputData!): Tag
  }
`;
