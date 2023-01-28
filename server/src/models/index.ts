let Tutorial = require("./tutorial.model.ts");
let Tag = require("./tag.model.ts");
let Book = require("./book.model.ts");

Tag.hasMany(Book, {
  foreignKey: "tag_id",
});
Book.belongsTo(Tag, { foreignKey: "tag_id" });

Tag.belongsToMany(Tutorial, {
  through: "tutorial_tag",
  as: "tutorials",
  foreignKey: "tag_id",
});
Tutorial.belongsToMany(Tag, {
  through: "tutorial_tag",
  as: "tags",
  foreignKey: "tutorial_id",
});

module.exports = { Tutorial, Tag, Book };
