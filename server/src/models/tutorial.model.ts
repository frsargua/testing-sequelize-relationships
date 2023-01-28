import sequelize from "../config/db";
import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from "sequelize";

class Tutorial extends Model<
  InferAttributes<Tutorial>,
  InferCreationAttributes<Tutorial>
> {}

Tutorial.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tutorial",
  }
);

module.exports = Tutorial;
