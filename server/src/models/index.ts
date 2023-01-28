const Sequelize = require("sequelize");
import sequelize from "../config/db";
const db: any = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorial = require("./tutorial.model.ts")(sequelize, Sequelize);
db.tag = require("./tag.model.ts")(sequelize, Sequelize);

db.tutorial = require("./tutorial.model.ts")(sequelize, Sequelize);
db.tag = require("./tag.model.ts")(sequelize, Sequelize);

db.tag.belongsToMany(db.tutorial, {
  through: "tutorial_tag",
  as: "tutorials",
  foreignKey: "tag_id",
});
db.tutorial.belongsToMany(db.tag, {
  through: "tutorial_tag",
  as: "tags",
  foreignKey: "tutorial_id",
});

module.exports = db;
