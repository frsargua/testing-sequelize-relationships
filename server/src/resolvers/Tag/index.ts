const db = require("../../models/index");
import { GraphQLError } from "graphql";
const Tag = db.tag;
const Tutorial = db.tutorial;

export const createTag = async (_: any, { input }: any) => {
  try {
    console.log(input);
    const tutorial = await db.tutorial.create(input.tutorialInput);
    const tag = await db.tag.create(input.tagInput);
    await tag.addTutorial(tutorial);

    const tagDB = await Tag.findByPk(tag.id, {
      include: [
        {
          model: Tutorial,
          as: "tutorials",
          attributes: ["id", "title", "description"],
          through: {
            attributes: [],
          },
        },
      ],
    });
    return tagDB;
  } catch (err: any) {
    console.log(`[ERROR]: Failed to create user | ${err.original}`);
    throw new GraphQLError(`Failed to create user | ${err.original}`);
  }
};
