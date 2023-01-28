const { gql } = require("@apollo/server");

export const typeDefs = `

type Query {
    tag(tagId: ID!): Tag
  }

type Tutorial{
  description: String
  title: String
}

type Book{
  name: String
}

type Tag{
  name: String
  tutorials:[Tutorial]
  books:[Book]
}

input CreateBookInput{
  name: String
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
  bookInput:CreateBookInput
}
  type Mutation {
    createTag(input: TagInputData!): Tag
  }
`;
