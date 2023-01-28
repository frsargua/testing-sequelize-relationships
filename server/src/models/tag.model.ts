module.exports = (sequelize: any, DataTypes: any) => {
  const Tag = sequelize.define("tag", {
    name: {
      type: DataTypes.STRING,
    },
  });

  return Tag;
};
