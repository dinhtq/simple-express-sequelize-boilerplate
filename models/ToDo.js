module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define(
    'ToDo',
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
    },
  );

  return ToDo;
};
