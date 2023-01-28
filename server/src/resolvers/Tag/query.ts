const db = require("../../models/index");
import { GraphQLError } from "graphql";
const Tag = db.tag;
const Tutorial = db.tutorial;

export const tag = async (_: any, { tagId }: any) => {
  try {
    const tag = await Tag.findByPk(tagId, {
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

    return tag;
  } catch (err: any) {
    console.log(err);
    console.log(`[ERROR]: Failed to create user | ${err.original}`);
    throw new GraphQLError(`Failed to create user | ${err.original}`);
  }
};
