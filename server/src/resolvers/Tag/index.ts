const { Tag, Tutorial, Book } = require("../../models/index");
import { GraphQLError } from "graphql";
// const Tag = db.tag;
// const Tutorial = db.tutorial;

export const createTag = async (_: any, { input }: any) => {
  try {
    const tutorial = await Tutorial.create(input.tutorialInput);
    const tag = await Tag.create(input.tagInput);
    const book = await Book.create({ ...input.bookInput, tag_id: tag.id });
    await tag.addTutorial(tutorial);

    const tagDB = await Tag.findOne({
      where: { id: tag.id },
      include: [
        Book,
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
    console.log(tagDB);

    return tagDB;
  } catch (err: any) {
    console.log(err);
    console.log(`[ERROR]: Failed to create user | ${err.original}`);
    throw new GraphQLError(`Failed to create user | ${err.original}`);
  }
};
