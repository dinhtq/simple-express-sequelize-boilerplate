module.exports = (sequelize, DataTypes) => {
  const ToDoItem = sequelize.define(
    'ToDoItem',
    {
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      underscored: false,
      tableName: 'to_do_item',
    },
  );

  ToDoItem.associate = (models) => {
    ToDoItem.belongsTo(models.ToDo, {
      foreignKey: 'toDoId',
      as: 'toDo',
      onDelete: 'CASCADE',
    });
  };

  return ToDoItem;
};
