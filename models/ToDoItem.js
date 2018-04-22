module.exports = (sequelize, DataTypes) => {
  const ToDoItem = sequelize.define(
    'ToDoItem',
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: true,
      tableName: 'to_do_item',
    },
  );

  ToDoItem.associate = (models) => {
    ToDoItem.belongsTo(models.ToDo, {
      foreignKey: 'to_do_id',
      onDelete: 'CASCADE',
    });
  };

  return ToDoItem;
};
