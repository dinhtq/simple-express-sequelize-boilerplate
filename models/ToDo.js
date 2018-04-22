module.exports = (sequelize, DataTypes) => {
  const ToDo = sequelize.define(
    'ToDo',
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: false,
      tableName: 'to_do',
    },
  );

  return ToDo;
};
